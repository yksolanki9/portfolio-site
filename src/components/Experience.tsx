import React from "react";
import { useInView } from "react-intersection-observer";

interface WorkExperience {
  period: string;
  title: string;
  description: string;
  tag?: string;
  url: string;
}

interface ExperienceProps {
  workExperience: WorkExperience[];
}

export const Experience: React.FC<ExperienceProps> = ({ workExperience }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const handleCompanyClick = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      id="experience"
      ref={ref}
      className="relative min-h-screen py-20 lg:py-32 experience-section overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-20 w-36 h-36 border border-neon-pink rounded-full animate-pulse floating-element" />
        <div className="absolute bottom-20 left-16 w-28 h-28 border border-custom-cyan rounded-lg transform rotate-45 animate-rotate-slow" />
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-purple rounded-full opacity-30 animate-float" />
      </div>

      {/* Section Header */}
      <div
        className={`text-center mb-20 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="w-16 h-[2px] bg-gradient-purple"></div>
          <h2 className="text-4xl sm:text-6xl font-bold text-glow bg-gradient-to-r from-neon-pink via-custom-cyan to-neon-purple bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-16 h-[2px] bg-gradient-cyan"></div>
        </div>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          My professional journey through 4+ years of software development,
          building scalable solutions and leading technical initiatives.
        </p>
      </div>

      {/* Modern Timeline */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-custom-cyan via-neon-purple to-neon-pink rounded-full hidden md:block">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-custom-cyan rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-pink rounded-full animate-pulse" />
        </div>

        {/* Experience Items */}
        <div className="relative">
          {workExperience.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`relative flex items-center mb-16 md:mb-20 transition-all duration-700 ease-out ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(index + 1) * 300}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Content Container */}
                <div
                  className={`
                  w-full md:w-5/12 
                  ${
                    isLeft
                      ? "md:ml-0 md:mr-auto md:pr-8"
                      : "md:ml-auto md:mr-0 md:pl-8"
                  }
                `}
                >
                  <div
                    className={`
                    glass-card rounded-2xl p-6 md:p-8 transition-all duration-500 transform hover-tilt cursor-pointer
                    ${
                      isHovered
                        ? "scale-105 shadow-2xl shadow-custom-cyan/20"
                        : "scale-100"
                    }
                    ${isLeft ? "md:text-right" : "md:text-left"}
                  `}
                    onClick={() => handleCompanyClick(exp.url)}
                  >
                    {/* Period Badge */}
                    <div
                      className={`
                      inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4
                      bg-gradient-to-r from-custom-cyan to-neon-purple text-white
                      ${isHovered ? "animate-pulse" : ""}
                    `}
                    >
                      {exp.period}
                    </div>

                    {/* Title with Company and Optional Tag */}
                    <div className="mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {exp.title.split("|")[0].trim()}
                        {exp.title.includes("|") && (
                          <div
                            className={`flex items-center gap-3 mt-1 ${
                              isLeft ? "md:justify-end" : "md:justify-start"
                            }`}
                          >
                            <span className="text-lg text-custom-cyan font-medium">
                              {exp.title.split("|")[1].trim()}
                            </span>
                            {exp.tag && (
                              <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-neon-orange/20 to-neon-pink/30 border border-neon-orange/50 rounded-full text-neon-orange font-medium text-xs transition-all duration-300 hover:bg-neon-orange hover:text-black animate-pulse">
                                {exp.tag}
                              </span>
                            )}
                          </div>
                        )}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Tech Tags */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      {exp.description.split(", ").map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-glass-white to-glass-dark rounded-full text-xs border border-gray-600 hover:border-custom-cyan transition-all duration-300 neon-glow"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Click Indicator */}
                    <div
                      className={`absolute top-4 right-4 transition-all duration-300 ${
                        isHovered
                          ? "opacity-100 scale-110"
                          : "opacity-0 scale-75"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 text-custom-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>

                    {/* Decorative Corner */}
                    <div
                      className={`
                      absolute bottom-4 w-3 h-3 bg-gradient-to-r from-neon-purple to-custom-cyan rounded-full
                      ${isLeft ? "right-4" : "left-4"}
                      ${isHovered ? "animate-pulse" : ""}
                    `}
                    />
                  </div>
                </div>

                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`
                    w-6 h-6 rounded-full border-4 border-white transition-all duration-300
                    ${
                      isHovered
                        ? "bg-gradient-to-r from-custom-cyan to-neon-purple scale-125 shadow-lg shadow-custom-cyan/50"
                        : "bg-gradient-to-r from-neon-purple to-neon-pink"
                    }
                  `}
                  >
                    <div className="absolute inset-1 rounded-full bg-white opacity-30"></div>
                  </div>

                  {/* Connection Line to Card */}
                  <div
                    className={`
                    absolute top-1/2 transform -translate-y-1/2 w-8 h-[2px] 
                    bg-gradient-to-r from-custom-cyan to-transparent
                    ${isLeft ? "left-6" : "right-6"}
                    ${isHovered ? "opacity-100" : "opacity-50"}
                    transition-opacity duration-300
                  `}
                  />
                </div>

                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-4 top-6">
                  <div
                    className={`
                    w-4 h-4 rounded-full border-2 border-white transition-all duration-300
                    ${
                      isHovered
                        ? "bg-gradient-to-r from-custom-cyan to-neon-purple scale-125"
                        : "bg-gradient-to-r from-neon-purple to-neon-pink"
                    }
                  `}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Highlights */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-neon-purple">
              Career Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-custom-cyan mb-2">
                  4+
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">
                  5+
                </div>
                <div className="text-gray-300">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-orange mb-2">
                  100+
                </div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-gradient-to-r from-custom-cyan/20 to-neon-purple/20 rounded-full border border-custom-cyan/30 text-sm">
                Full Stack Development
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-full border border-neon-purple/30 text-sm">
                Mobile Applications
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-neon-green/20 to-neon-orange/20 rounded-full border border-neon-green/30 text-sm">
                Team Leadership
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
