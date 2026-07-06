import React from "react";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "./ui/SectionHeading";
import { techStack } from "../data";

interface AboutProps {
  about: string;
}

const skillGroups: { label: string; items: string[] }[] = [
  { label: "AI & Generative", items: techStack.ai },
  { label: "Frontend", items: techStack.frontend },
  { label: "Backend", items: techStack.backend },
  { label: "Mobile", items: techStack.mobile },
  { label: "Cloud & Tools", items: [...techStack.cloud, ...techStack.tools] },
];

export const About = ({ about }: AboutProps) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div id="about" className="max-w-content mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <SectionHeading
        index="01"
        kicker="About"
        title="A bit about me"
      />

      <div
        ref={ref}
        className={`reveal ${
          inView ? "is-visible" : ""
        } mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start`}
      >
        {/* Portrait */}
        <div className="lg:col-span-4">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-line bg-paper-alt">
              <img
                src="/profile.png"
                alt="Yash Solanki, Full Stack & AI Engineer based in Mumbai, India"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted">Based in Mumbai, India</span>
              <span className="inline-flex items-center gap-1.5 text-accent font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Available
              </span>
            </div>
          </div>
        </div>

        {/* Narrative + skills */}
        <div className="lg:col-span-8">
          <p className="font-display text-2xl sm:text-3xl leading-snug text-ink tracking-tight">
            I build robust, user-focused products for startups, from full-stack
            foundations to agentic AI.
          </p>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted">
            {about}
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-faint mb-4">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1 text-sm text-ink-soft hover:border-ink transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
