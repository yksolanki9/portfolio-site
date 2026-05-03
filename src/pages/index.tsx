import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { About } from "../components/About";
import { Blogs } from "../components/Blogs";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { ScrollProgressBar } from "../components/ui/ScrollProgressBar";
import { about, name, projects, title, urls, workExperience } from "../data";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto w-full max-w-4xl px-6 py-12" role="main">
        <section id="home" aria-label="Introduction">
          <Home name={name} title={title} />
        </section>

        <section id="about" aria-label="About">
          <About about={about} />
        </section>

        <section id="journey" aria-label="Professional Experience">
          <Experience workExperience={workExperience} />
        </section>

        <section id="projects" aria-label="Technical Projects and Portfolio">
          <Projects projects={projects} />
        </section>

        <section className="py-16" id="blog" aria-label="Technical Blog and Articles">
          <Blogs />
        </section>

        <section id="contact" aria-label="Contact Information">
          <Contact urls={urls} />
        </section>
      </main>

      <ScrollProgressBar />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>
      Yash Solanki - Senior Full Stack Developer Mumbai | YC Startup Engineer
    </title>
    <meta
      name="description"
      content="Experienced Full Stack Developer in Mumbai with 4+ years building scalable web applications for Y Combinator startups. Expert in React, Node.js, Angular & mobile development. Currently Founding Engineer at Craze (YC S22)."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#ffffff" />

    <meta
      name="keywords"
      content="full stack developer mumbai, senior software engineer mumbai, yc startup developer, y combinator engineer, react developer mumbai, nodejs developer india, angular developer mumbai, founding engineer, startup developer mumbai, experienced software developer mumbai, web developer mumbai, mobile app developer mumbai, tech lead mumbai, software engineer startup experience"
    />
    <meta name="author" content="Yash Solanki" />
    <meta
      name="robots"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <meta name="googlebot" content="index, follow" />

    <meta name="geo.region" content="IN-MH" />
    <meta name="geo.placename" content="Mumbai" />
    <meta name="geo.position" content="19.0760;72.8777" />
    <meta name="ICBM" content="19.0760, 72.8777" />

    <meta name="language" content="en" />
    <meta name="revisit-after" content="7 days" />

    <link rel="icon" type="image/svg+xml" href="/favicon-new.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32-new.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" href="/favicon-new.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
    <link rel="manifest" href="/manifest.webmanifest" />

    <meta
      property="og:title"
      content="Yash Solanki - Senior Full Stack Developer Mumbai | YC Startup Engineer"
    />
    <meta
      property="og:description"
      content="Experienced Full Stack Developer in Mumbai with 4+ years building scalable applications for Y Combinator startups. Currently Founding Engineer at Craze (YC S22). Expert in React, Node.js, Angular."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yashsolanki.dev" />
    <meta property="og:site_name" content="Yash Solanki - Full Stack Developer" />
    <meta property="og:image" content="/icons/icon-512x512.png" />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
    <meta property="og:image:alt" content="Yash Solanki - Full Stack Developer Portfolio" />
    <meta property="og:locale" content="en_IN" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Yash Solanki - Senior Full Stack Developer Mumbai | YC Startup Engineer"
    />
    <meta
      name="twitter:description"
      content="Experienced Full Stack Developer in Mumbai building scalable applications for Y Combinator startups. Founding Engineer at Craze (YC S22). Expert in React, Node.js, Angular."
    />
    <meta name="twitter:image" content="/icons/icon-512x512.png" />
    <meta name="twitter:image:alt" content="Yash Solanki - Full Stack Developer Portfolio" />
    <meta name="twitter:creator" content="@yashsolanki" />
    <meta name="twitter:site" content="@yashsolanki" />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Yash Solanki",
        jobTitle: "Senior Full Stack Developer",
        description:
          "Experienced Full Stack Developer with 4+ years building scalable web applications for Y Combinator startups",
        url: "https://yashsolanki.dev",
        image: "https://yashsolanki.dev/icons/icon-512x512.png",
        sameAs: [
          "https://github.com/yksolanki9",
          "https://linkedin.com/in/yashsolanki",
          "https://twitter.com/yashsolanki",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "India",
        },
      })}
    </script>
  </>
);
