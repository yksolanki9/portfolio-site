import * as React from "react";

interface NavBarProps {
  isMobileView: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
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
    const sections = navItems
      .filter((item) => !item.external)
      .map((item) => item.href.substring(1));

    // Set up Intersection Observer for better performance
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the middle portion of viewport
      threshold: 0,
    };

    let currentIntersections = new Map<string, boolean>();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        currentIntersections.set(entry.target.id, entry.isIntersecting);
      });

      // Find the first intersecting section in order
      let newActiveSection = "";
      for (const section of sections) {
        if (currentIntersections.get(section)) {
          newActiveSection = section;
          break;
        }
      }

      // Update active section and URL using callback to avoid stale closure
      setActiveSection((currentActive) => {
        if (newActiveSection !== currentActive) {
          if (newActiveSection === "home") {
            // When home section is active, clear the URL fragment
            if (window.location.hash) {
              window.history.replaceState(null, "", window.location.pathname);
            }
          } else if (newActiveSection) {
            // Update URL fragment for other sections
            if (window.location.hash !== `#${newActiveSection}`) {
              window.history.replaceState(null, "", `#${newActiveSection}`);
            }
          }
          return newActiveSection;
        }
        return currentActive;
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
        currentIntersections.set(section, false);
      }
    });

    // Handle initial hash on page load
    const hash = window.location.hash.substring(1);
    if (hash && navItems.some((item) => item.href === `#${hash}`)) {
      setActiveSection(hash);
      // Scroll to the section after a brief delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If no hash, start with home as active
      setActiveSection("home");
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank");
    } else {
      const section = href.substring(1);

      if (section === "home") {
        // For home section, use root URL
        window.history.pushState(null, "", window.location.pathname);
      } else {
        // For other sections, use fragment
        window.history.pushState(null, "", href);
      }

      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(section);
      }
    }
    if (isMobileView) {
      setIsMenuOpen(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  if (isMobileView) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 backdrop-blur-lg"
        onClick={handleBackdropClick}
      >
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
                      ? "bg-gradient-to-r from-neon-purple/30 to-neon-pink/30 text-white border border-neon-purple/60 shadow-lg shadow-neon-purple/30 animate-pulse-glow"
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
                          className="inline w-4 h-4 ml-2 animate-bounce text-neon-pink"
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
                          ? "bg-neon-pink animate-ping shadow-lg shadow-neon-pink/50"
                          : "bg-gray-600 group-hover:bg-neon-purple"
                      }`}
                    />
                  </div>

                  {/* Enhanced animated underline for resume */}
                  <div
                    className={`absolute bottom-0 left-4 right-4 h-[2px] transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-custom-cyan to-neon-purple opacity-100"
                        : isResume
                        ? "bg-gradient-to-r from-neon-purple via-neon-pink to-neon-orange opacity-100 animate-pulse shadow-sm shadow-neon-orange/50"
                        : "bg-gradient-to-r from-custom-cyan to-neon-purple opacity-0 group-hover:opacity-50"
                    }`}
                  />

                  {/* Special glow effect for resume */}
                  {isResume && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-purple/15 to-neon-pink/15 animate-pulse" />
                  )}
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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 animate-slide-down">
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
                      ? "text-neon-purple hover:text-neon-pink animate-pulse-glow font-bold"
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {item.label}
                  {isResume && (
                    <svg
                      className="inline w-3 h-3 ml-1 animate-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  )}

                  {/* Active indicator */}
                  <div
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-custom-cyan animate-pulse"
                        : isResume
                        ? "bg-neon-purple animate-ping"
                        : "bg-transparent group-hover:bg-neon-purple"
                    }`}
                  />

                  {/* Enhanced hover effect for resume - removed rectangular background */}
                  <div
                    className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 ${
                      isResume
                        ? "bg-transparent"
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
