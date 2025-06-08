import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Blogs } from "../components/Blogs";
import { Contact } from "../components/Contact";
import { name, title, about } from "../data/about";
import { workExperience } from "../data/work-experience";
import { projects } from "../data/projects";
import { urls } from "../data/contact";

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
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax-element");

      parallaxElements.forEach((el, index) => {
        const speed = 0.5 + index * 0.1;
        const yPos = -(scrolled * speed);
        (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Performance optimized scroll handler
    let ticking = false;
    const optimizedScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

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
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative">
          <Home name={name} title={title} />
        </section>

        {/* About Section */}
        <section className="relative">
          <About about={about} />
        </section>

        {/* Experience Section */}
        <section className="relative">
          <Experience workExperience={workExperience} />
        </section>

        {/* Projects Section */}
        <section className="relative">
          <Projects projects={projects} />
        </section>

        {/* Blogs Section (minimal for now) */}
        <section className="relative py-20">
          <Blogs />
        </section>

        {/* Contact Section */}
        <section className="relative">
          <Contact urls={urls} />
        </section>
      </main>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-dark-700 z-50">
        <div
          className="h-full bg-gradient-to-r from-custom-cyan via-neon-purple to-neon-pink transition-all duration-150 ease-out"
          style={{
            width: `${
              typeof window !== "undefined"
                ? (window.pageYOffset /
                    (document.documentElement.scrollHeight -
                      window.innerHeight)) *
                  100
                : 0
            }%`,
          }}
        />
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-40 glass-card p-4 rounded-full opacity-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 group"
        style={{
          opacity:
            typeof window !== "undefined" && window.pageYOffset > 1000 ? 1 : 0,
          pointerEvents:
            typeof window !== "undefined" && window.pageYOffset > 1000
              ? "auto"
              : "none",
        }}
      >
        <svg
          className="w-6 h-6 text-custom-cyan group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

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
    <title>Yash Solanki - Full Stack Developer | Modern Portfolio</title>
    <meta
      name="description"
      content="Full Stack Developer with 4+ years of experience in Angular, React, Node.js, and mobile development. Explore my modern portfolio showcasing innovative projects and technical expertise."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#00DDFF" />

    {/* Custom Favicon */}
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/icon-192x192.png"
    />
    <link rel="manifest" href="/manifest.webmanifest" />

    {/* Open Graph tags */}
    <meta property="og:title" content="Yash Solanki - Full Stack Developer" />
    <meta
      property="og:description"
      content="Modern portfolio showcasing 4+ years of full-stack development expertise"
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/icons/icon-512x512.png" />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Yash Solanki - Full Stack Developer" />
    <meta
      name="twitter:description"
      content="Modern portfolio showcasing 4+ years of full-stack development expertise"
    />
    <meta name="twitter:image" content="/icons/icon-512x512.png" />

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
