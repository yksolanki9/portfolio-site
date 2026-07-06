import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { About } from "../components/About";
import { Blogs } from "../components/Blogs";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { ScrollProgressBar } from "../components/ui/ScrollProgressBar";
import { about, name, projects, title, urls, workExperience } from "../data";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-paper">
      {/* Main Content */}
      <main role="main">
        {/* Hero Section */}
        <section id="home" aria-label="Introduction">
          <Home name={name} title={title} />
        </section>

        {/* About Section */}
        <section
          aria-label="About Yash Solanki - Full Stack Developer Mumbai"
        >
          <About about={about} />
        </section>

        {/* Experience Section */}
        <section
          aria-label="Professional Experience - Y Combinator Startups"
        >
          <Experience workExperience={workExperience} />
        </section>

        {/* Projects Section */}
        <section aria-label="Technical Projects and Portfolio">
          <Projects projects={projects} />
        </section>

        {/* Blogs Section */}
        <section aria-label="Technical Blog and Articles">
          <Blogs />
        </section>

        {/* Contact Section */}
        <section aria-label="Contact Information">
          <Contact urls={urls} />
        </section>
      </main>

      <Footer />

      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Performance Optimization: Preload critical resources */}
      {typeof window !== "undefined" && (
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
        </>
      )}
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>
      Yash Solanki - Full Stack & AI Engineer Mumbai | YC Startup Engineer
    </title>
    <meta
      name="description"
      content="Full Stack & AI Engineer in Mumbai with 5+ years building scalable products for Y Combinator startups. First engineer at Craze (YC S22), now building agentic AI and video-generation products. Expert in React, Node.js, Angular, LLMs & AI agents."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="canonical" href="https://yashsolanki.in/" />

    {/* SEO Keywords */}
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

    {/* Location/Geographic SEO */}
    <meta name="geo.region" content="IN-MH" />
    <meta name="geo.placename" content="Mumbai" />
    <meta name="geo.position" content="19.0760;72.8777" />
    <meta name="ICBM" content="19.0760, 72.8777" />

    {/* Schema.org structured data will be added separately */}
    <meta name="language" content="en" />
    <meta name="revisit-after" content="7 days" />

    {/* Custom Favicon */}
    <link rel="icon" type="image/svg+xml" href="/favicon-new.svg?v=2" />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32-new.png?v=2"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png?v=2"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/icon-192x192.png?v=2"
    />
    <link rel="manifest" href="/manifest.webmanifest" />

    {/* Open Graph tags */}
    <meta
      property="og:title"
      content="Yash Solanki - Full Stack & AI Engineer Mumbai | YC Startup Engineer"
    />
    <meta
      property="og:description"
      content="Full Stack & AI Engineer in Mumbai with 5+ years building scalable products for Y Combinator startups. First engineer at Craze (YC S22), now building agentic AI and video-generation products. Expert in React, Node.js, Angular & LLMs."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yashsolanki.in/" />
    <meta
      property="og:site_name"
      content="Yash Solanki - Full Stack & AI Engineer"
    />
    <meta
      property="og:image"
      content="https://yashsolanki.in/icons/icon-512x512.png"
    />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
    <meta
      property="og:image:alt"
      content="Yash Solanki - Full Stack & AI Engineer Portfolio"
    />
    <meta property="og:locale" content="en_IN" />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Yash Solanki - Full Stack & AI Engineer Mumbai | YC Startup Engineer"
    />
    <meta
      name="twitter:description"
      content="Full Stack & AI Engineer in Mumbai building scalable products for Y Combinator startups. First engineer at Craze (YC S22), building agentic AI & video generation. Expert in React, Node.js, Angular & LLMs."
    />
    <meta
      name="twitter:image"
      content="https://yashsolanki.in/icons/icon-512x512.png"
    />
    <meta
      name="twitter:image:alt"
      content="Yash Solanki - Full Stack & AI Engineer Portfolio"
    />
    <meta name="twitter:creator" content="@yksolanki9" />
    <meta name="twitter:site" content="@yksolanki9" />

    {/* JSON-LD Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Yash Solanki",
        jobTitle: "Full Stack & AI Engineer",
        description:
          "Full Stack & AI Engineer with 5+ years building scalable products for Y Combinator startups. First engineer at Craze (YC S22), building agentic AI and video-generation products.",
        url: "https://yashsolanki.in/",
        image: "https://yashsolanki.in/icons/icon-512x512.png",
        email: "mailto:yashsolanki1709@gmail.com",
        sameAs: [
          "https://github.com/yksolanki9",
          "https://www.linkedin.com/in/yashsolanki",
          "https://twitter.com/yksolanki9",
          "https://www.instagram.com/solanki1709",
          "https://dev.to/yksolanki9",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        worksFor: {
          "@type": "Organization",
          name: "Craze",
          description: "Y Combinator S22 startup",
        },
        knowsAbout: [
          "Full Stack Development",
          "Agentic AI",
          "AI Agents",
          "Video Generation",
          "Large Language Models",
          "React",
          "Node.js",
          "Angular",
          "JavaScript",
          "TypeScript",
          "Mobile Development",
          "Y Combinator Startups",
          "Startup Engineering",
        ],
        alumniOf: {
          "@type": "Organization",
          name: "University of Mumbai",
        },
      })}
    </script>

    {/* Organization Schema for Current Company */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Craze",
        description: "Y Combinator S22 startup",
        url: "https://crazehq.com",
        employee: {
          "@type": "Person",
          name: "Yash Solanki",
          jobTitle: "Founding Engineer",
        },
      })}
    </script>

    {/* WebSite + ProfilePage Schema (helps search engines and AI assistants) */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        dateModified: "2026-07-07",
        url: "https://yashsolanki.in/",
        name: "Yash Solanki - Full Stack & AI Engineer",
        mainEntity: {
          "@type": "Person",
          name: "Yash Solanki",
          jobTitle: "Full Stack & AI Engineer",
          url: "https://yashsolanki.in/",
        },
        about:
          "Yash Solanki is a Full Stack & AI Engineer based in Mumbai, India, with 5+ years of experience. He is the first engineer at Craze (YC S22), where he builds agentic AI and AI video-generation products. Previously at Fyle (acquired by Sage), Jeevam Health (YC S20), and Samsung Research Institute.",
        isPartOf: {
          "@type": "WebSite",
          name: "Yash Solanki",
          url: "https://yashsolanki.in/",
        },
      })}
    </script>

    {/* Performance optimizations */}
    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
  </>
);
