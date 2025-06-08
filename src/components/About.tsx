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
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 15,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 15,
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
        {/* Profile Image Section with 3D Effect */}
        <div
          className={`xl:basis-3/12 lg:basis-4/12 basis-5/12 pt-20 md:pt-0 transition-all delay-200 duration-1000 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
        >
          <div
            className="relative perspective-1000 group"
            style={{
              transform: `perspective(1000px) rotateY(${
                mousePosition.x * 0.1
              }deg) rotateX(${-mousePosition.y * 0.1}deg)`,
            }}
          >
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-cyan opacity-30 rounded-full blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-500" />

            {/* Profile Image Container */}
            <div className="relative glass-card rounded-3xl p-6 transform group-hover:scale-105 transition-all duration-500 card-3d">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  className="h-[200px] sm:h-[300px] md:h-auto w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src={profileImage}
                  alt="Yash Solanki - Full Stack Developer"
                />
                {/* Image Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-custom-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 bg-neon-purple text-white px-3 py-1 rounded-full text-xs font-semibold animate-float">
                4+ Years
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-custom-cyan text-black px-3 py-1 rounded-full text-xs font-semibold animate-float"
                style={{ animationDelay: "1s" }}
              >
                Full Stack
              </div>
            </div>
          </div>
        </div>

        {/* About Text Section */}
        <div
          className={`text-md md:text-lg md:leading-8 font-light md:pl-10 pt-10 pb-20 md:py-0 xl:basis-5/12 lg:basis-6/12 basis-7/12 transition-all duration-1000 delay-500 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <div className="relative">
            {/* Section Title */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-gradient-cyan"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-glow">
                About Me
              </h2>
              <div className="w-12 h-[2px] bg-gradient-purple"></div>
            </div>

            {/* Glass Card for Text */}
            <div className="glass-card rounded-2xl p-6 md:p-8 hover-tilt group">
              <p className="leading-relaxed text-gray-200 group-hover:text-white transition-colors duration-300">
                {about}
              </p>

              {/* Skills Highlight */}
              <div className="mt-6 pt-6 border-t border-gray-600">
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
                      className="px-3 py-1 bg-gradient-to-r from-glass-white to-glass-dark rounded-full text-sm border border-gray-600 hover:border-custom-cyan transition-all duration-300 hover:scale-105 neon-glow"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive CTA */}
              <div className="mt-8 flex gap-4">
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

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-neon-pink opacity-20 rounded-full animate-pulse floating-element" />
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-neon-green to-neon-orange opacity-30 rounded-lg transform rotate-45 animate-tilt" />
          </div>
        </div>
      </div>

      {/* Section Transition Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 text-gray-400">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-custom-cyan"></div>
          <span className="text-sm">Next: Experience</span>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-custom-cyan"></div>
        </div>
      </div>
    </div>
  );
};
