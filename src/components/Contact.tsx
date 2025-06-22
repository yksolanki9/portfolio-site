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
    color: "bg-red-500",
    hoverColor: "hover:text-red-400",
  },
  {
    icon: faLinkedinIn,
    key: "LINKEDIN",
    label: "LinkedIn",
    color: "bg-blue-500",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: faGithub,
    key: "GITHUB",
    label: "GitHub",
    color: "bg-gray-500",
    hoverColor: "hover:text-gray-400",
  },
  {
    icon: faTwitter,
    key: "TWITTER",
    label: "Twitter",
    color: "bg-blue-400",
    hoverColor: "hover:text-blue-300",
  },
  {
    icon: faInstagram,
    key: "INSTAGRAM",
    label: "Instagram",
    color: "bg-pink-500",
    hoverColor: "hover:text-pink-400",
  },
  {
    icon: faDev,
    key: "DEV",
    label: "Dev.to",
    color: "bg-green-500",
    hoverColor: "hover:text-green-400",
  },
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
          className={`glass-card rounded-3xl p-6 md:p-8 transition-all duration-1000 delay-300 transform ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.key}
                href={urls[social.key as keyof ContactUrls]}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${social.hoverColor}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                }}
              >
                {/* Subtle Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-lg ${social.color}`}
                />

                {/* Icon Container */}
                <div className="relative z-10 transition-all duration-300">
                  <FontAwesomeIcon
                    className={`text-2xl md:text-3xl transition-all duration-300 ${
                      hoveredIndex === index
                        ? "text-white scale-110"
                        : "text-gray-300 group-hover:scale-105"
                    }`}
                    icon={social.icon}
                  />
                </div>

                {/* Label */}
                <span
                  className={`mt-2 text-xs font-medium transition-all duration-200 ${
                    hoveredIndex === index
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-200"
                  }`}
                >
                  {social.label}
                </span>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-current opacity-0 group-hover:opacity-20 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Single Contact Info Card */}
          <div
            className={`mt-8 pt-6 border-t border-gray-600 transition-all duration-1000 delay-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="glass-card rounded-xl p-6 hover-tilt text-center">
              <h4 className="text-lg font-semibold text-custom-cyan mb-2">
                Let's Build Something Amazing Together
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm always excited to work on innovative projects and
                collaborate with passionate teams. Whether it's a startup idea
                or enterprise solution, let's discuss how we can bring it to
                life.
              </p>
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
