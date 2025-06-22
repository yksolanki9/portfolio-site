import * as React from "react";
import { useInView } from "react-intersection-observer";
import { MenuIcon } from "./MenuIcon";
import { NavBar } from "./NavBar";
import { GitHubStats } from "./GitHubStats";
import { FloatingParticles } from "./ui/FloatingParticles";
import { useMousePosition } from "../hooks/useMousePosition";
import type { HomeProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const Home = (props: HomeProps) => {
  const { name, title } = props;
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const { mousePosition, handleMouseMove } = useMousePosition();

  const { inView, ref } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      id="home"
      ref={ref}
      className={`relative pt-12 min-[1100px]:px-16 md:px-8 px-4 min-h-screen bg-gradient-dark overflow-hidden ${
        isMenuOpen ? "touch-none" : ""
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Geometric Shapes */}
      <div className="bg-geometric">
        <div className="geometric-shape border-custom-cyan"></div>
        <div className="geometric-shape border-neon-purple"></div>
        <div className="geometric-shape border-neon-pink"></div>
      </div>

      {/* Floating Particles */}
      <FloatingParticles count={6} />

      {/* Navigation */}
      <div className="sm:hidden">
        <MenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      <div className="hidden sm:block">
        <NavBar isMobileView={false} setIsMenuOpen={setIsMenuOpen} />
      </div>

      {isMenuOpen && (
        <NavBar isMobileView={true} setIsMenuOpen={setIsMenuOpen} />
      )}

      {/* Main Content */}
      {!isMenuOpen && (
        <div className="relative top-1/3 lg:mx-12 mx-4 perspective-1000">
          {/* 3D Interactive Card Container */}
          <div
            className="relative z-10 transform-gpu transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${
                mousePosition.y * 0.1
              }deg) rotateY(${mousePosition.x * 0.1}deg)`,
            }}
          >
            {/* Glowing Background Card */}
            <div className="absolute inset-0 bg-gradient-purple opacity-10 rounded-3xl blur-xl transform scale-105 animate-pulse-glow" />

            {/* Main Content Card */}
            <div className="relative glass-card rounded-2xl p-8 md:p-12 transform hover:scale-[1.02] transition-all duration-500">
              {/* Hello Text with 3D Effect */}
              <h3
                className={`min-[1000px]:text-8xl min-[700px]:text-7xl text-5xl font-medium transition-all duration-1000 delay-300 ease-out neon-glow text-white hover-tilt ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transform: `translateZ(20px)`,
                }}
              >
                Hello,
              </h3>

              {/* Name with Enhanced Animation */}
              <h1
                className={`min-[1000px]:text-8xl min-[700px]:text-7xl text-5xl leading-tight pt-4 font-bold transition-all duration-1000 delay-[1500ms] ease-out ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transform: `translateZ(30px)`,
                }}
              >
                I'm{" "}
                <span className="bg-gradient-to-r from-custom-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-color hover:animate-glitch">
                  {name}
                </span>
                <span className="text-custom-cyan animate-color text-glow">
                  .
                </span>
              </h1>

              {/* Title with Typing Effect Enhanced */}
              <div
                className={`inline-block sm:text-2xl text-lg font-light sm:mt-6 mt-8 transition-all duration-1000 delay-[2700ms] ease-out ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  transform: `translateZ(15px)`,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <h5 className="inline-block pr-[6px] overflow-hidden whitespace-nowrap border-r-[3px] border-custom-cyan animate-typing text-glow">
                    {title}
                  </h5>
                </div>
              </div>

              {/* Interactive CTA Buttons */}
              <div
                className={`mt-8 transition-all duration-1000 delay-[3500ms] ease-out ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transform: `translateZ(25px)`,
                }}
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <button
                    className="group relative px-8 py-4 bg-gradient-cyan text-black font-semibold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 card-3d"
                    onClick={() =>
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Discover My Work
                    </span>
                    <div className="absolute inset-0 bg-gradient-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 animate-pulse-glow opacity-0 group-hover:opacity-50" />
                  </button>

                  <a
                    href="https://github.com/yksolanki9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 card-3d border border-gray-600 hover:border-custom-cyan"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="w-5 h-5 group-hover:animate-pulse"
                      />
                      <span className="relative z-10">
                        <span className="block text-sm">yksolanki9</span>
                      </span>
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-custom-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Tech Icons */}
          <div className="absolute -top-20 -right-10 opacity-20">
            <div className="floating-element">
              <div className="w-16 h-16 border-2 border-custom-cyan rounded-lg transform rotate-45 animate-rotate-slow" />
            </div>
          </div>
          <div className="absolute top-1/2 -left-16 opacity-15">
            <div className="floating-element">
              <div className="w-12 h-12 border-2 border-neon-purple rounded-full animate-pulse" />
            </div>
          </div>
          <div className="absolute -bottom-10 right-1/4 opacity-25">
            <div className="floating-element">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-pink to-neon-orange rounded-full animate-tilt" />
            </div>
          </div>
        </div>
      )}

      {/* GitHub Stats - Subtle Integration */}
      {!isMenuOpen && (
        <GitHubStats
          username="yksolanki9"
          className={`transition-all duration-1000 delay-[4500ms] ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        />
      )}

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-[4000ms] ${
          inView && !isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="hidden sm:flex flex-col items-center gap-2 animate-float ">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-custom-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-custom-cyan rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
