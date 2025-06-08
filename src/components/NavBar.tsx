import * as React from "react";

interface NavBarProps {
  isMobileView: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  {
    href: "https://drive.google.com/file/d/1l4uC4A6XIXr7sYKiyzAinMt_gSI8ix1c/view?usp=sharing",
    label: "Resume",
    external: true,
  },
];

export const NavBar = ({ isMobileView, setIsMenuOpen }: NavBarProps) => {
  const [activeSection, setActiveSection] = React.useState<string>("");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter((item) => !item.external)
        .map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            if (window.location.hash !== `#${section}`) {
              window.history.replaceState(null, "", `#${section}`);
            }
            break;
          }
        }
      }
    };

    const hash = window.location.hash.substring(1);
    if (hash && navItems.some((item) => item.href === `#${hash}`)) {
      setActiveSection(hash);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank");
    } else {
      window.history.pushState(null, "", href);

      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(href.substring(1));
      }
    }
    if (isMobileView) {
      setIsMenuOpen(false);
    }
  };

  if (isMobileView) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 backdrop-blur-lg">
        <div className="glass-card rounded-3xl p-8 max-w-sm w-full mx-4 transform animate-slide-up">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-glow bg-gradient-to-r from-custom-cyan to-neon-purple bg-clip-text text-transparent">
              Navigation
            </h3>
            <div className="w-16 h-[2px] bg-gradient-cyan mx-auto mt-2"></div>
          </div>

          {/* Mobile Menu Items */}
          <nav className="space-y-4">
            {navItems.map((item, index) => {
              const isActive =
                !item.external && activeSection === item.href.substring(1);
              const isResume = item.external;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href, item.external)}
                  className={`w-full group relative p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? "bg-gradient-to-r from-custom-cyan/20 to-neon-purple/20 text-white border border-custom-cyan/50"
                      : isResume
                      ? "bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 text-white border border-neon-purple/50"
                      : "text-gray-300 hover:text-white hover:bg-glass-white"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-medium ${
                        isActive || isResume ? "text-glow" : ""
                      }`}
                    >
                      {item.label}
                      {isResume && (
                        <svg
                          className="inline w-4 h-4 ml-2"
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
                      )}
                    </span>
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-custom-cyan animate-pulse"
                          : isResume
                          ? "bg-neon-purple animate-pulse"
                          : "bg-gray-600 group-hover:bg-neon-purple"
                      }`}
                    />
                  </div>

                  {/* Animated underline */}
                  <div
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-custom-cyan to-neon-purple transition-all duration-300 ${
                      isActive || isResume
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-50"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Close hint */}
          <div className="text-center mt-8 text-gray-400 text-sm">
            Tap anywhere outside to close
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 animate-slide-in-left">
      <div className="glass-card rounded-full px-6 py-3 shadow-2xl">
        <ul className="flex items-center space-x-6">
          {navItems.map((item, index) => {
            const isActive =
              !item.external && activeSection === item.href.substring(1);
            const isResume = item.external;
            return (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href, item.external)}
                  className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 ${
                    isActive
                      ? "text-custom-cyan text-glow"
                      : isResume
                      ? "text-neon-purple hover:text-neon-pink"
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {item.label}
                  {isResume && (
                    <svg
                      className="inline w-3 h-3 ml-1"
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
                  )}

                  {/* Active indicator */}
                  <div
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-custom-cyan animate-pulse"
                        : isResume
                        ? "bg-neon-purple group-hover:animate-pulse"
                        : "bg-transparent group-hover:bg-neon-purple"
                    }`}
                  />

                  {/* Hover effect */}
                  <div
                    className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 ${
                      isResume
                        ? "bg-gradient-to-r from-neon-purple/20 to-neon-pink/20"
                        : "bg-gradient-to-r from-custom-cyan/20 to-neon-purple/20"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
