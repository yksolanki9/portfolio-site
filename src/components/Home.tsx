import * as React from "react";
import { useInView } from "react-intersection-observer";
import { MenuIcon } from "./MenuIcon";
import { NavBar } from "./NavBar";
import type { HomeProps } from "../types";
import { contactUrls } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const socials = [
  { icon: faGithub, href: contactUrls.github, label: "GitHub" },
  { icon: faLinkedinIn, href: contactUrls.linkedin, label: "LinkedIn" },
  { icon: faXTwitter, href: contactUrls.twitter, label: "Twitter" },
  { icon: faDev, href: contactUrls.dev, label: "Dev.to" },
  { icon: faEnvelope, href: contactUrls.email, label: "Email" },
];

const marqueeItems = [
  "Agentic AI",
  "LLMs",
  "Video Generation",
  "RAG",
  "Prompt Engineering",
  "React",
  "Node.js",
  "TypeScript",
  "Angular",
  "PostgreSQL",
  "AWS",
  "Ionic",
  "Capacitor",
  "MongoDB",
  "Express",
];

export const Home = (props: HomeProps) => {
  const { name, title } = props;
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const { inView, ref } = useInView({ threshold: 0.3, triggerOnce: true });

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      id="home"
      ref={ref}
      className={`relative min-h-screen bg-paper ${
        isMenuOpen ? "overflow-hidden" : ""
      }`}
    >
      {/* Navigation */}
      <div className="sm:hidden">
        <MenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div className="hidden sm:block">
        <NavBar isMobileView={false} setIsMenuOpen={setIsMenuOpen} />
      </div>
      {isMenuOpen && <NavBar isMobileView={true} setIsMenuOpen={setIsMenuOpen} />}

      {/* Hero */}
      <div className="max-w-content mx-auto px-6 lg:px-10 min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div
          className={`reveal ${inView ? "is-visible" : ""} max-w-4xl`}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-muted">
              {title} · Mumbai, India
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display text-[15vw] leading-[0.92] sm:text-8xl md:text-9xl tracking-tightest text-ink">
            {name}
          </h1>

          {/* Intro */}
          <p className="mt-8 max-w-2xl text-xl sm:text-2xl leading-snug text-ink-soft">
            <span className="text-ink font-medium">5+ years</span> of shipping
            scalable software, from{" "}
            <span className="text-ink font-medium">full-stack applications</span>{" "}
            to <span className="text-ink font-medium">AI agents</span>, for
            startups.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("journey")}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper hover:bg-accent transition-colors"
            >
              View my work
            </button>
            <a
              href={contactUrls.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink hover:border-ink transition-colors"
            >
              Résumé
            </a>

            {/* Socials */}
            <div className="flex items-center gap-1 sm:ml-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full text-muted hover:text-ink hover:bg-paper-alt transition-colors"
                >
                  <FontAwesomeIcon icon={s.icon} className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tech marquee */}
      <div className="absolute bottom-0 inset-x-0 border-t border-line overflow-hidden py-4 bg-paper">
        <div className="flex items-center gap-10 whitespace-nowrap animate-marquee w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-sm font-medium tracking-wide text-faint flex items-center gap-10"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-line" />
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about"
        className="hidden lg:flex absolute bottom-20 right-10 items-center gap-2 text-xs tracking-widest uppercase text-faint hover:text-ink transition-colors"
      >
        Scroll
        <FontAwesomeIcon icon={faArrowDown} className="w-3 h-3 animate-bounce" />
      </button>
    </div>
  );
};
