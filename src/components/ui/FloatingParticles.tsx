import * as React from "react";
import { generateParticles } from "../../utils/animations";

interface FloatingParticlesProps {
  count?: number;
}

export const FloatingParticles: React.FC<FloatingParticlesProps> = ({
  count = 6,
}) => {
  const particles = React.useMemo(() => generateParticles(count), [count]);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle floating-element"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </>
  );
};
