import * as React from "react";
import type { MousePosition } from "../types";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  }, []);

  return { mousePosition, handleMouseMove };
};
