// Navigation Types
export interface NavBarProps {
  isMobileView: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

// Component Props Types
export interface HomeProps {
  name: string;
  title: string;
}

export interface AboutProps {
  about: string;
}

export interface ContactProps {
  urls: ContactUrls;
}

export interface ContactUrls {
  GMAIL: string;
  EMAIL: string;
  GITHUB: string;
  LINKEDIN: string;
  INSTAGRAM: string;
  TWITTER: string;
  DEV: string;
  RESUME: string;
}

export interface ExperienceProps {
  workExperience: WorkExperience[];
}

export interface WorkExperience {
  period: string;
  company: string;
  title: string;
  techStack: string[];
  tag?: string;
  url: string;
}

export interface ProjectsProps {
  projects: ProjectCardType[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface ProjectCardType {
  title: string;
  description: string;
  badges: string[];
  redirections: {
    githubUrl: string;
    playStoreUrl?: string;
    npmUrl?: string;
  };
}

export interface ProjectCardProps {
  id: number;
  project: ProjectCardType;
  rootRef?: React.RefObject<HTMLDivElement>;
}

// GitHub Stats Types
export interface GitHubStats {
  repositories: number;
  followers: number;
  following: number;
  totalContributions: number;
  longestStreak: number;
  currentStreak: number;
  totalStars: number;
  totalCommits: number;
}

export interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  stargazers_count: number;
  fork: boolean;
}

export interface ContributionDay {
  contributionCount: number;
  date: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionsData {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: ContributionWeek[];
      };
    };
  };
}

export interface GitHubStatsProps {
  username: string;
  className?: string;
}

// Blog Types
export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

// Analytics Types
export interface AnalyticsProps {
  trackingId?: string;
}

// Utility Types
export interface MousePosition {
  x: number;
  y: number;
}

export interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  delay: number;
}

// Extended Window Interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
