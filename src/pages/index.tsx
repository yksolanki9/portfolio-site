import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  About,
  Home,
  Experience,
  Projects,
  Blogs,
  Contact,
  ScrollProgressBar,
} from "../components";
import { name, title, about, workExperience, projects, urls } from "../data";
import { createOptimizedScrollHandler } from "../utils";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    // Smooth scrolling enhancement
    document.documentElement.style.scrollBehavior = "smooth";

    // Add modern cursor for interactive elements
    const addCursorEffect = () => {
      const interactiveElements = document.querySelectorAll(
        "button, a, .cursor-pointer"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          document.body.style.cursor = "pointer";
        });
        el.addEventListener("mouseleave", () => {
          document.body.style.cursor = "default";
        });
      });
    };

    // Add scroll-based parallax effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax-element");

      parallaxElements.forEach((el, index) => {
        const speed = 0.5 + index * 0.1;
        const yPos = -(scrolled * speed);
        (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Performance optimized scroll handler
    const optimizedScrollHandler = createOptimizedScrollHandler(handleScroll);

    window.addEventListener("scroll", optimizedScrollHandler);
    addCursorEffect();

    return () => {
      window.removeEventListener("scroll", optimizedScrollHandler);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global Background Enhancement */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700" />

        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-custom-cyan/20 rounded-full animate-float parallax-element" />
        <div className="absolute top-1/4 right-20 w-24 h-24 border border-neon-purple/20 rounded-lg transform rotate-45 animate-rotate-slow parallax-element" />
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border border-neon-pink/20 rounded-full animate-pulse parallax-element" />
        <div className="absolute bottom-20 right-1/4 w-16 h-16 border border-neon-green/20 rounded-lg animate-tilt parallax-element" />

        {/* Dynamic light effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-custom-cyan/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10" role="main">
        {/* Hero Section */}
        <section className="relative" id="home" aria-label="Introduction">
          <Home name={name} title={title} />
        </section>

        {/* About Section */}
        <section
          className="relative"
          id="about"
          aria-label="About Yash Solanki - Full Stack Developer Mumbai"
        >
          <About about={about} />
        </section>

        {/* Experience Section */}
        <section
          className="relative"
          id="journey"
          aria-label="Professional Experience - Y Combinator Startups"
        >
          <Experience workExperience={workExperience} />
        </section>

        {/* Projects Section */}
        <section
          className="relative"
          id="projects"
          aria-label="Technical Projects and Portfolio"
        >
          <Projects projects={projects} />
        </section>

        {/* Blogs Section (minimal for now) */}
        <section
          className="relative py-20"
          id="blog"
          aria-label="Technical Blog and Articles"
        >
          <Blogs />
        </section>

        {/* Contact Section */}
        <section
          className="relative"
          id="contact"
          aria-label="Contact Information"
        >
          <Contact urls={urls} />
        </section>
      </main>

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
      Yash Solanki - Senior Full Stack Developer Mumbai | YC Startup Engineer
    </title>
    <meta
      name="description"
      content="Experienced Full Stack Developer in Mumbai with 4+ years building scalable web applications for Y Combinator startups. Expert in React, Node.js, Angular & mobile development. Currently Founding Engineer at Craze (YC S22)."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#00DDFF" />

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
    <link rel="icon" type="image/svg+xml" href="/favicon-new.svg" />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32-new.png"
    />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="icon" href="/favicon-new.ico" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/icon-192x192.png"
    />
    <link rel="manifest" href="/manifest.webmanifest" />

    {/* Open Graph tags */}
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
    <meta
      property="og:site_name"
      content="Yash Solanki - Full Stack Developer"
    />
    <meta property="og:image" content="/icons/icon-512x512.png" />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
    <meta
      property="og:image:alt"
      content="Yash Solanki - Full Stack Developer Portfolio"
    />
    <meta property="og:locale" content="en_IN" />

    {/* Twitter Card tags */}
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
    <meta
      name="twitter:image:alt"
      content="Yash Solanki - Full Stack Developer Portfolio"
    />
    <meta name="twitter:creator" content="@yashsolanki" />
    <meta name="twitter:site" content="@yashsolanki" />

    {/* JSON-LD Structured Data */}
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
          addressCountry: "IN",
        },
        worksFor: {
          "@type": "Organization",
          name: "Craze",
          description: "Y Combinator S22 startup",
        },
        knowsAbout: [
          "Full Stack Development",
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

    {/* Performance optimizations */}
    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    <link
      rel="preload"
      href="/fonts/Poppins-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  </>
);
