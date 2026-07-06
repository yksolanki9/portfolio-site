import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faNpm, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";
import type { ProjectCardProps } from "../types";
import "../utils/fontawesome";

export const ProjectCard: React.FC<ProjectCardProps> = ({ id, project }) => {
  const { title, description, badges, redirections } = project;
  const { inView, ref } = useInView({ threshold: 0.2, triggerOnce: true });

  const links = [
    { url: redirections.githubUrl, icon: faGithub, label: "GitHub" },
    { url: redirections.playStoreUrl, icon: faGooglePlay, label: "Play Store" },
    { url: redirections.npmUrl, icon: faNpm, label: "npm" },
  ].filter((l) => Boolean(l.url));

  return (
    <div
      ref={ref}
      className={`card group flex flex-col h-full p-8 reveal ${
        inView ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${(id % 2) * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="section-index text-sm text-faint">
          {String(id + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.label}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-9 h-9 rounded-full text-muted hover:text-ink hover:bg-paper-alt transition-colors"
            >
              <FontAwesomeIcon icon={l.icon} className="w-[18px] h-[18px]" />
            </a>
          ))}
        </div>
      </div>

      <h3 className="mt-5 font-display text-2xl sm:text-3xl text-ink tracking-tight group-hover:text-accent transition-colors">
        {title}
      </h3>

      <p className="mt-3 text-base leading-relaxed text-muted flex-1">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5">
        {badges.map((badge, index) => (
          <span key={index} className="text-xs font-medium text-faint">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};
