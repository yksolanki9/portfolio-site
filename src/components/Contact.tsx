import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import {
  faDev,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

interface ContactUrls {
  GMAIL: string;
  LINKEDIN: string;
  GITHUB: string;
  TWITTER: string;
  INSTAGRAM: string;
  DEV: string;
}

interface ContactProps {
  urls: ContactUrls;
}

const socialLinks = [
  { icon: faLinkedinIn, key: "LINKEDIN", label: "LinkedIn" },
  { icon: faGithub, key: "GITHUB", label: "GitHub" },
  { icon: faXTwitter, key: "TWITTER", label: "Twitter" },
  { icon: faInstagram, key: "INSTAGRAM", label: "Instagram" },
  { icon: faDev, key: "DEV", label: "Dev.to" },
] as const;

export const Contact: React.FC<ContactProps> = ({ urls }) => {
  const { inView, ref } = useInView({ threshold: 0.2, triggerOnce: true });
  const email = urls.GMAIL.replace("mailto:", "");

  return (
    <div
      id="contact"
      ref={ref}
      className="max-w-content mx-auto px-6 lg:px-10 py-28 lg:py-40"
    >
      <div className={`reveal ${inView ? "is-visible" : ""}`}>
        <div className="flex items-center gap-3 mb-8">
          <span className="section-index text-xs font-medium tracking-widest text-accent uppercase">
            05
          </span>
          <span className="h-px w-8 bg-line" />
          <span className="text-xs font-medium tracking-widest text-faint uppercase">
            Contact
          </span>
        </div>

        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tightest text-ink max-w-4xl">
          Let's build something together.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          I'm always open to discussing new projects, product ideas, or
          opportunities to collaborate. Drop me a line and I'll get back to you.
        </p>

        {/* Email */}
        <a
          href={urls.GMAIL}
          className="group mt-12 inline-flex items-center gap-3"
        >
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-ink text-paper group-hover:bg-accent transition-colors">
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
          </span>
          <span className="font-display text-2xl sm:text-4xl text-ink tracking-tight link-underline">
            {email}
          </span>
        </a>

        {/* Socials */}
        <div className="mt-14 flex flex-wrap gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.key}
              href={urls[social.key as keyof ContactUrls]}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink hover:border-ink transition-colors"
            >
              <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
              {social.label}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-3 h-3 text-faint group-hover:text-ink transition-colors"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
