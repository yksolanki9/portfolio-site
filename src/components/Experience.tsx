import * as React from "react";
import { useInView } from "react-intersection-observer";

export const Experience = (props: any) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="2xl:pt-64 pt-56 pb-40 lg:px-16 px-2 h-fit experience-section"
    >
      <h2 id="experience" className="text-3xl sm:text-5xl pt-4 text-center">
        Experience
      </h2>
      <div className="page">
        <div className="section">
          <div className="top-container">
            {props.workExperience.map((exp: any, index: number) => (
              <div
                className={
                  "exp-container " + (index % 2 !== 0 ? "right" : "left")
                }
                key={index}
              >
                <div
                  className={`date transition-all duration-1000 delay-200 ease-in ${
                    inView ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {exp.period}
                </div>
                <div
                  className={`content transition-all duration-500 hover:scale-110 ${
                    index % 2 !== 0 ? "translate-x-full" : "-translate-x-full"
                  } ${inView ? "opacity-100 !translate-x-0" : "opacity-0"}`}
                >
                  <div>{exp.title}</div>
                  <div className="subtitle">{exp.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
