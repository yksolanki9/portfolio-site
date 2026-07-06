import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "./ui/SectionHeading";
import { workExperience as allExperience } from "../data";
import type { ExperienceProps } from "../types";

const highlights = [
  { value: "5+", label: "Years of experience" },
  { value: `${allExperience.length}`, label: "Companies shipped for" },
  { value: "AI", label: "Agentic AI & video generation" },
];

export const Experience: React.FC<ExperienceProps> = ({ workExperience }) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const openUrl = (url: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="journey"
      className="bg-paper-alt border-y border-line"
    >
      <div className="max-w-content mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <SectionHeading
          index="02"
          kicker="Experience"
          title="The journey so far"
          description="Leaving my mark, one startup at a time."
        />

        <div ref={ref} className="mt-16">
          {workExperience.map((exp, index) => (
            <div
              key={index}
              role="link"
              tabIndex={0}
              onClick={() => openUrl(exp.url)}
              onKeyDown={(e) => e.key === "Enter" && openUrl(exp.url)}
              className={`group grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-y-3 gap-x-6 items-start py-8 border-t border-line cursor-pointer reveal ${
                inView ? "is-visible" : ""
              } ${index === workExperience.length - 1 ? "border-b" : ""}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Period */}
              <div className="text-sm text-faint pt-1 tabular-nums">
                {exp.period}
              </div>

              {/* Company + role + tech */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl sm:text-3xl text-ink tracking-tight group-hover:text-accent transition-colors">
                    {exp.company}
                  </h3>
                  {exp.tag && (
                    <span className="inline-flex items-center rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold tracking-wide text-accent">
                      {exp.tag}
                    </span>
                  )}
                </div>
                {exp.roles.length > 1 ? (
                  <ul className="mt-3 space-y-3 border-l border-line pl-4">
                    {exp.roles.map((role, i) => (
                      <li key={i} className="relative">
                        <span
                          className={`absolute -left-[21px] top-2 h-1.5 w-1.5 rounded-full ${
                            i === 0 ? "bg-accent" : "bg-line"
                          }`}
                        />
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                          <span className="text-base text-ink-soft">
                            {role.title}
                          </span>
                          <span className="text-sm text-faint tabular-nums">
                            {role.period}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1 text-base text-muted">
                    {exp.roles[0].title}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex pt-2 justify-end">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="w-4 h-4 text-faint opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-20 grid grid-cols-3 gap-6 border-t border-line pt-12">
          {highlights.map((h) => (
            <div key={h.label} className="text-center sm:text-left">
              <div className="font-display text-4xl sm:text-5xl text-ink tracking-tight">
                {h.value}
              </div>
              <div className="mt-2 text-sm text-muted">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
