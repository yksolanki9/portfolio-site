import * as React from "react";
import {
  calculateScrollProgress,
  createOptimizedScrollHandler,
} from "../utils/animations";

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = React.useState<number>(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollProgress(calculateScrollProgress());
    };

    const optimizedScrollHandler = createOptimizedScrollHandler(handleScroll);

    window.addEventListener("scroll", optimizedScrollHandler);

    // Set initial value
    handleScroll();

    return () => {
      window.removeEventListener("scroll", optimizedScrollHandler);
    };
  }, []);

  return scrollProgress;
};
