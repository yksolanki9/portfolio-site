import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface GitHubStats {
  repositories: number;
  followers: number;
  following: number;
  totalContributions: number;
  longestStreak: number;
  currentStreak: number;
  totalStars: number;
  totalCommits: number;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

interface GitHubRepo {
  stargazers_count: number;
  fork: boolean;
}

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionsData {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: ContributionWeek[];
      };
    };
  };
}

interface GitHubStatsProps {
  username: string;
  className?: string;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({
  username,
  className = "",
}) => {
  const [stats, setStats] = useState<GitHubStats>({
    repositories: 0,
    followers: 0,
    following: 0,
    totalContributions: 0,
    longestStreak: 0,
    currentStreak: 0,
    totalStars: 0,
    totalCommits: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dataReady, setDataReady] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fetchGitHubStats = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch basic user data
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      if (!userResponse.ok) throw new Error("Failed to fetch user data");
      const userData: GitHubUser = await userResponse.json();

      // Fetch repositories for stars count
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`
      );
      if (!reposResponse.ok) throw new Error("Failed to fetch repositories");
      const reposData: GitHubRepo[] = await reposResponse.json();

      const totalStars = reposData
        .filter((repo) => !repo.fork)
        .reduce((sum, repo) => sum + repo.stargazers_count, 0);

      // Helper function to create contributions query for a specific year range
      const createContributionsQuery = (from: string, to: string) => `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection(from: "${from}", to: "${to}") {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `;

      let totalContributions = 0;
      let longestStreak = 0;
      let currentStreak = 0;

      try {
        // Try to fetch from GitHub GraphQL API (requires token)
        const token = process.env.GATSBY_GITHUB_TOKEN;

        if (!token) {
          throw new Error("GitHub token not found");
        }

        // Calculate date ranges from account creation to now
        const createdDate = new Date(userData.created_at);
        const currentDate = new Date();
        const allContributionDays: ContributionDay[] = [];

        // Generate year ranges (GitHub allows max 1 year per query)
        const yearRanges: Array<{ from: string; to: string }> = [];
        let startDate = new Date(createdDate);

        while (startDate < currentDate) {
          let endDate = new Date(startDate);
          endDate.setFullYear(endDate.getFullYear() + 1);

          // Don't go beyond current date
          if (endDate > currentDate) {
            endDate = currentDate;
          }

          yearRanges.push({
            from: startDate.toISOString().split("T")[0],
            to: endDate.toISOString().split("T")[0],
          });

          startDate = new Date(endDate);
          startDate.setDate(startDate.getDate() + 1); // Move to next day to avoid overlap
        }

        // Fetch contributions for all year ranges simultaneously
        const contributionPromises = yearRanges.map(async (range) => {
          const contributionsQuery = createContributionsQuery(
            new Date(range.from).toISOString(),
            new Date(range.to).toISOString()
          );

          const contributionsResponse = await fetch(
            "https://api.github.com/graphql",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                query: contributionsQuery,
                variables: { username },
              }),
            }
          );

          if (!contributionsResponse.ok) {
            throw new Error(
              `Failed to fetch contributions for range ${range.from} to ${range.to}`
            );
          }

          const contributionsData: { data: ContributionsData } =
            await contributionsResponse.json();

          return {
            totalContributions:
              contributionsData.data.user.contributionsCollection
                .contributionCalendar.totalContributions,
            days: contributionsData.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
              (week: ContributionWeek) => week.contributionDays
            ),
          };
        });

        // Wait for all API calls to complete
        const contributionResults = await Promise.all(contributionPromises);

        // Aggregate all results
        contributionResults.forEach((result) => {
          totalContributions += result.totalContributions;
          allContributionDays.push(...result.days);
        });

        // Calculate streaks from all contribution data
        if (allContributionDays.length > 0) {
          const sortedDays = allContributionDays.sort(
            (a: ContributionDay, b: ContributionDay) =>
              new Date(a.date).getTime() - new Date(b.date).getTime()
          );

          let tempStreak = 0;
          let maxStreak = 0;
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          // Calculate current and longest streaks
          for (let i = sortedDays.length - 1; i >= 0; i--) {
            const dayDate = new Date(sortedDays[i].date);
            const daysDiff = Math.floor(
              (today.getTime() - dayDate.getTime()) / (1000 * 60 * 60 * 24)
            );

            if (sortedDays[i].contributionCount > 0) {
              tempStreak++;
              if (daysDiff === currentStreak) {
                currentStreak = tempStreak;
              }
            } else {
              maxStreak = Math.max(maxStreak, tempStreak);
              tempStreak = 0;
            }
          }

          longestStreak = Math.max(maxStreak, tempStreak);
        }

        // Mark data as successfully fetched
        setDataReady(true);
      } catch (err) {
        // If any API call fails, don't show the tags at all
        console.warn("GitHub API failed, hiding stats:", err);
        setDataReady(false);
        return; // Exit early, don't set stats
      }

      // Estimate total commits (GitHub API doesn't provide this directly)
      const totalCommits = Math.floor(totalContributions * 0.8); // Rough estimation

      setStats({
        repositories: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        totalContributions,
        longestStreak,
        currentStreak,
        totalStars,
        totalCommits,
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch GitHub stats"
      );
      console.error("Error fetching GitHub stats:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setDataReady(false); // Reset data ready state
    fetchGitHubStats();
  }, [username]);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num.toString();
  };

  if (loading || !dataReady) {
    return null; // Hide everything until data is successfully loaded
  }

  if (error) {
    return null; // Gracefully handle errors by not showing anything
  }

  const floatingTags = [
    {
      label: `${stats.totalContributions} contributions`,
      icon: "💻",
      position: "bottom-32 right-8 lg:right-16",
      delay: "2000ms",
      gradient: "from-custom-cyan to-neon-green",
    },
    {
      label: `${stats.repositories} repositories`,
      icon: "📁",
      position: "bottom-64 right-64 lg:right-72",
      delay: "2500ms",
      gradient: "from-neon-purple to-neon-pink",
    },
    {
      label: `${stats.longestStreak} day streak`,
      icon: "🔥",
      position: "bottom-16 right-96 lg:right-108",
      delay: "3000ms",
      gradient: "from-neon-pink to-neon-orange",
    },
  ];

  return (
    <div
      ref={ref}
      className={`absolute inset-0 pointer-events-none z-30 ${className}`}
    >
      {floatingTags.map((tag, index) => (
        <div
          key={tag.label}
          className={`absolute ${
            tag.position
          } transform transition-all duration-1000 z-30 ${
            inView
              ? "opacity-70 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }`}
          style={{
            transitionDelay: tag.delay,
            animationDelay: `${index * 2}s`,
          }}
        >
          {/* Floating Tag */}
          <div className="relative group animate-float">
            {/* Subtle glow effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${tag.gradient} opacity-20 rounded-full blur-md group-hover:opacity-30 transition-opacity duration-500`}
            />

            {/* Main tag */}
            <div className="relative glass-card rounded-full px-4 py-2 border border-gray-600/30 hover:border-gray-400/50 transition-all duration-300 group-hover:scale-105 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-sm opacity-80">{tag.icon}</span>
                <span
                  className={`font-medium bg-gradient-to-r ${tag.gradient} bg-clip-text text-transparent`}
                >
                  {tag.label}
                </span>
              </div>
            </div>

            {/* Connecting line (optional visual element) */}
            <div
              className={`absolute top-1/2 -right-8 w-6 h-[1px] bg-gradient-to-r ${tag.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300 hidden lg:block`}
            />
          </div>
        </div>
      ))}

      {/* Subtle GitHub link */}
      <div
        className={`absolute bottom-8 right-8 transition-all duration-1000 z-30 ${
          inView ? "opacity-30 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "3500ms" }}
      >
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-400 transition-colors duration-300 group pointer-events-auto"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="group-hover:underline">yksolanki9</span>
        </a>
      </div>
    </div>
  );
};

export default GitHubStats;
