import * as React from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export const ScrollProgressBar: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-dark-700 z-50">
      <div
        className="h-full bg-gradient-to-r from-custom-cyan via-neon-purple to-neon-pink transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
