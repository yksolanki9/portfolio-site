import React from "react";
//@ts-ignore
import profileImage from "../images/profile.png";
import { useInView } from "react-intersection-observer";

interface AboutProps {
  about: string;
}

export const About = ({ about }: AboutProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 5,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 5,
    });
  }, []);

  return (
    <div
      id="about"
      ref={ref}
      className="relative 2xl:pt-64 lg:pt-32 min-[700px]:pt-24 lg:p-16 max-[400px]:p-4 p-8 min-h-screen about-section overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-neon-purple rounded-full animate-pulse floating-element" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-custom-cyan rounded-lg transform rotate-45 animate-rotate-slow" />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-purple rounded-full opacity-50 animate-float" />
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center min-h-screen relative z-10">
        {/* Profile Image Section with Optimized Animations */}
        <div
          className={`xl:basis-3/12 lg:basis-4/12 basis-5/12 pt-20 md:pt-0 transition-all duration-700 ease-out ${
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div
            className="relative perspective-1000 group"
            style={{
              transform: `perspective(1000px) rotateY(${
                mousePosition.x
              }deg) rotateX(${-mousePosition.y}deg)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {/* Simplified Glowing Background */}
            <div
              className={`absolute inset-0 bg-gradient-cyan rounded-full blur-xl transform transition-all duration-500 ${
                inView
                  ? "opacity-20 scale-105 group-hover:scale-110"
                  : "opacity-0 scale-50"
              }`}
            />

            {/* Profile Image Container */}
            <div
              className={`relative glass-card rounded-3xl p-6 transform transition-all duration-500 card-3d ${
                inView ? "translate-y-0 group-hover:scale-102" : "translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  className="h-[200px] sm:h-[300px] md:h-auto w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  src={profileImage}
                  alt="Yash Solanki - Full Stack Developer"
                />
                {/* Subtle Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-custom-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating Tech Badges with reduced animation */}
              <div
                className={`absolute -top-4 -right-4 bg-neon-purple text-white px-3 py-1 rounded-full text-xs font-semibold transition-all duration-500 ${
                  inView
                    ? "opacity-100 translate-y-0 animate-float"
                    : "opacity-0 -translate-y-2"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                4+ Years
              </div>
              <div
                className={`absolute -bottom-4 -left-4 bg-custom-cyan text-black px-3 py-1 rounded-full text-xs font-semibold transition-all duration-500 ${
                  inView
                    ? "opacity-100 translate-y-0 animate-float"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "800ms", animationDelay: "1s" }}
              >
                Full Stack
              </div>
            </div>
          </div>
        </div>

        {/* About Text Section with Optimized Animations */}
        <div
          className={`text-md md:text-lg md:leading-8 font-light md:pl-10 pt-10 pb-20 md:py-0 xl:basis-5/12 lg:basis-6/12 basis-7/12 transition-all duration-700 ease-out ${
            inView
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-4 scale-98"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="relative">
            {/* Section Title with simplified animation */}
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-600 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div
                className={`h-[2px] bg-gradient-cyan transition-all duration-700 ${
                  inView ? "w-12" : "w-0"
                }`}
              />
              <h2 className="text-2xl md:text-3xl font-bold text-glow">
                About Me
              </h2>
              <div
                className={`h-[2px] bg-gradient-purple transition-all duration-700 ${
                  inView ? "w-12" : "w-0"
                }`}
                style={{ transitionDelay: "100ms" }}
              />
            </div>

            {/* Glass Card with simplified reveal animation */}
            <div
              className={`glass-card rounded-2xl p-6 md:p-8 hover-tilt group transition-all duration-600 ${
                inView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-3 scale-99"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <p
                className={`leading-relaxed text-gray-200 group-hover:text-white transition-colors duration-300 ${
                  inView ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                {about}
              </p>

              {/* Skills Highlight with optimized staggered reveal */}
              <div
                className={`mt-6 pt-6 border-t border-gray-600 transition-all duration-500 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <h3 className="text-lg font-semibold mb-4 text-custom-cyan">
                  Tech Stack Highlights
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Angular",
                    "React",
                    "Node.js",
                    "MongoDB",
                    "TypeScript",
                    "Ionic",
                  ].map((tech, index) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-gradient-to-r from-glass-white to-glass-dark rounded-full text-sm border border-gray-600 hover:border-custom-cyan transition-all duration-300 hover:scale-105 neon-glow transform ${
                        inView
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-1 scale-95"
                      }`}
                      style={{
                        transitionDelay: `${900 + index * 50}ms`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive CTA with simplified animation */}
              <div
                className={`mt-8 flex gap-4 transition-all duration-500 ${
                  inView
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-2 scale-98"
                }`}
                style={{ transitionDelay: "1200ms" }}
              >
                <button
                  className="px-6 py-3 bg-gradient-cyan text-black font-semibold rounded-full hover:bg-gradient-purple hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-custom-cyan/50"
                  onClick={() =>
                    document
                      .getElementById("experience")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Experience
                </button>
                <button
                  className="px-6 py-3 border-2 border-custom-cyan text-custom-cyan font-semibold rounded-full hover:bg-custom-cyan hover:text-black transition-all duration-300 transform hover:scale-105"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Simplified Decorative Elements */}
            <div
              className={`absolute -top-8 -left-8 w-16 h-16 border-2 border-neon-pink opacity-15 rounded-full animate-pulse transition-all duration-700 ${
                inView ? "opacity-15 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: "1400ms" }}
            />
            <div
              className={`absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-neon-green to-neon-orange opacity-20 rounded-lg transform rotate-45 transition-all duration-700 ${
                inView ? "opacity-20 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionDelay: "1500ms" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
