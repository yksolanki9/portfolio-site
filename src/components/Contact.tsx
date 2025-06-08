import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import {
  faDev,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
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
  {
    icon: faEnvelope,
    key: "GMAIL",
    label: "Email",
    color: "hover:text-red-400",
  },
  {
    icon: faLinkedinIn,
    key: "LINKEDIN",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: faGithub,
    key: "GITHUB",
    label: "GitHub",
    color: "hover:text-gray-400",
  },
  {
    icon: faTwitter,
    key: "TWITTER",
    label: "Twitter",
    color: "hover:text-blue-300",
  },
  {
    icon: faInstagram,
    key: "INSTAGRAM",
    label: "Instagram",
    color: "hover:text-pink-400",
  },
  { icon: faDev, key: "DEV", label: "Dev.to", color: "hover:text-green-400" },
];

export const Contact: React.FC<ContactProps> = ({ urls }) => {
  const { inView, ref } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div
      id="contact"
      ref={ref}
      className="relative py-32 lg:px-16 px-4 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 border border-neon-purple rounded-full animate-pulse floating-element" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-custom-cyan rounded-lg transform rotate-45 animate-rotate-slow" />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-purple rounded-full opacity-50 animate-float" />
        <div
          className="absolute bottom-1/3 left-10 w-20 h-20 bg-gradient-cyan rounded-full opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-[2px] bg-gradient-cyan"></div>
            <h2 className="text-4xl sm:text-6xl font-bold text-glow bg-gradient-to-r from-custom-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-20 h-[2px] bg-gradient-purple"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
            Ready to bring your next project to life?
          </p>
          <p className="text-md text-gray-400 mb-12">
            Feel free to reach out through any of these platforms
          </p>
        </div>

        {/* Social Links Grid */}
        <div
          className={`glass-card rounded-3xl p-8 md:p-12 transition-all duration-1000 delay-300 transform ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={social.key}
                href={urls[social.key as keyof ContactUrls]}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-500 transform hover:scale-110 ${social.color}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animationDelay: `${(index + 1) * 200}ms`,
                }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl ${
                    social.key === "GMAIL"
                      ? "bg-red-500"
                      : social.key === "LINKEDIN"
                      ? "bg-blue-500"
                      : social.key === "GITHUB"
                      ? "bg-gray-500"
                      : social.key === "TWITTER"
                      ? "bg-blue-400"
                      : social.key === "INSTAGRAM"
                      ? "bg-pink-500"
                      : "bg-green-500"
                  }`}
                />

                {/* Icon Container */}
                <div
                  className={`relative z-10 transition-all duration-500 ${
                    hoveredIndex === index ? "animate-bounce" : ""
                  }`}
                >
                  <FontAwesomeIcon
                    className={`text-4xl md:text-5xl transition-all duration-500 ${
                      hoveredIndex === index
                        ? "text-white scale-125 drop-shadow-2xl"
                        : "text-gray-300 group-hover:scale-110"
                    }`}
                    icon={social.icon}
                  />
                </div>

                {/* Label */}
                <span
                  className={`mt-4 text-sm md:text-base font-medium transition-all duration-300 ${
                    hoveredIndex === index
                      ? "text-white text-glow"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {social.label}
                </span>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-30 transition-all duration-300" />

                {/* Floating Particles on Hover */}
                {hoveredIndex === index && (
                  <>
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-current rounded-full animate-ping" />
                    <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-current rounded-full animate-pulse" />
                  </>
                )}
              </a>
            ))}
          </div>

          {/* Additional Contact Info */}
          <div
            className={`mt-12 pt-8 border-t border-gray-600 transition-all duration-1000 delay-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="glass-card rounded-xl p-6 hover-tilt">
                <h4 className="text-lg font-semibold text-custom-cyan mb-2">
                  Let's Build Something Amazing
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I'm always excited to work on innovative projects and
                  collaborate with passionate teams. Whether it's a startup idea
                  or enterprise solution, let's discuss how we can bring it to
                  life.
                </p>
              </div>
              <div className="glass-card rounded-xl p-6 hover-tilt">
                <h4 className="text-lg font-semibold text-neon-purple mb-2">
                  Open for Opportunities
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Currently exploring new challenges in full-stack development,
                  mobile applications, and emerging technologies. Always ready
                  for the next adventure!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`mt-12 transition-all duration-1000 delay-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href={urls.GMAIL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-cyan text-black font-bold rounded-full hover:bg-gradient-purple hover:text-white transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-custom-cyan/50"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-lg group-hover:animate-bounce"
            />
            Send me an email
            <div className="w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-16 h-16 border-2 border-neon-pink opacity-20 rounded-full animate-pulse floating-element" />
        <div className="absolute -bottom-10 -left-10 w-12 h-12 bg-gradient-to-r from-neon-green to-neon-orange opacity-30 rounded-lg transform rotate-45 animate-tilt" />
      </div>
    </div>
  );
};
