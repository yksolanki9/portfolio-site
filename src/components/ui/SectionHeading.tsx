import * as React from "react";
import { useInView } from "react-intersection-observer";

interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  kicker,
  title,
  description,
  align = "left",
}) => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${
        align === "center" ? "text-center mx-auto" : ""
      } max-w-2xl`}
    >
      <div
        className={`flex items-center gap-3 mb-5 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="section-index text-xs font-medium tracking-widest text-accent uppercase">
          {index}
        </span>
        <span className="h-px w-8 bg-line" />
        <span className="text-xs font-medium tracking-widest text-faint uppercase">
          {kicker}
        </span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tightest text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
};
