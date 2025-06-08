//@ts-nocheck
import * as React from "react";
import { badgeUrlMapping } from "../utils/badge-url-mapping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import "../utils/fontawesome";

interface ProjectCardProps {
  id: number;
  project: {
    title: string;
    description: string;
    badges: string[];
    redirections: {
      githubUrl: string;
      playStoreUrl?: string;
      npmUrl?: string;
    };
  };
  rootRef?: React.RefObject<HTMLDivElement>;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  project,
  rootRef,
}) => {
  const { title, description, badges, redirections } = project;
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const { inView, ref } = useInView({
    threshold: 0.8,
    triggerOnce: true,
    root: rootRef?.current,
  });

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent) => {
      if (!rootRef.current) return;

      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 8,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 8,
      });
    },
    [rootRef]
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-md mx-auto group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-custom-cyan/10 to-neon-purple/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Main Card */}
      <div
        className="glass-card rounded-2xl p-6 h-full card-3d transform transition-all duration-500 group-hover:scale-[1.01]"
        style={{
          transform: `perspective(1000px) rotateY(${
            mousePosition.x * 0.05
          }deg) rotateX(${-mousePosition.y * 0.05}deg) scale(${
            mousePosition.x || mousePosition.y ? 1.01 : 1
          })`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-custom-cyan transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Enhanced Tech Stack Badges */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-custom-cyan mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="group/tech relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Main Badge Container */}
                <div className="relative px-3 py-1.5 bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-lg border border-gray-600/50 transition-all duration-300 transform hover:scale-102 hover:border-custom-cyan/40 cursor-pointer">
                  {/* Subtle Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-custom-cyan/3 via-neon-purple/3 to-neon-pink/3 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />

                  {/* Badge Text */}
                  <span className="relative z-10 text-xs font-medium text-gray-300 group-hover/tech:text-white transition-colors duration-200">
                    {badge}
                  </span>

                  {/* Subtle Particles */}
                  <div className="absolute -top-0.5 -right-0.5 w-0.5 h-0.5 bg-custom-cyan rounded-full opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={redirections.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl text-white font-medium transition-all duration-300 hover:from-custom-cyan hover:to-neon-purple hover:text-black transform hover:scale-102"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>Code</span>
          </a>

          {redirections.playStoreUrl && (
            <a
              href={redirections.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 px-3 py-2.5 bg-gradient-to-r from-neon-green/20 to-neon-green/30 border border-neon-green/50 rounded-xl text-neon-green font-medium transition-all duration-300 hover:bg-neon-green hover:text-black transform hover:scale-102"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22,9.5v9a1.5,1.5,0,0,1-1.5,1.5H3.5A1.5,1.5,0,0,1,2,18.5V5.5A1.5,1.5,0,0,1,3.5,4h9ZM8.5,7.5v9l7-4.5Z" />
              </svg>
              <span className="text-xs">Store</span>
            </a>
          )}

          {redirections.npmUrl && (
            <a
              href={redirections.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 px-3 py-2.5 bg-gradient-to-r from-red-500/20 to-red-600/30 border border-red-500/50 rounded-xl text-red-400 font-medium transition-all duration-300 hover:bg-red-500 hover:text-white transform hover:scale-102"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 7v10h6.5V9.5h4V17H17V7H0z" />
              </svg>
              <span className="text-xs">NPM</span>
            </a>
          )}
        </div>

        {/* Subtle Corner Indicators */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-custom-cyan to-neon-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r from-neon-pink to-neon-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};
