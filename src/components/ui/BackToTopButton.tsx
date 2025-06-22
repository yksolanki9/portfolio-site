import * as React from "react";
import { ArrowUpIcon } from "../icons";
import { smoothScrollTo } from "../../utils/animations";

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-40 glass-card p-4 rounded-full transition-all duration-300 transform hover:scale-110 group"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      aria-label="Back to top"
    >
      <ArrowUpIcon className="w-6 h-6 text-custom-cyan group-hover:text-white transition-colors duration-300" />
    </button>
  );
};
