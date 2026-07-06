import * as React from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export const ScrollProgressBar: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-[70] pointer-events-none">
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
