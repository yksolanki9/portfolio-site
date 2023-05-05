import * as React from "react";

export const Experience = (props: any) => {
  return (
    <div className="2xl:pt-64 pt-56 pb-40 lg:px-16 px-2  h-fit bg-cyan-800 experience-section">
      <h2 id="experience" className="text-5xl pt-4 text-center">
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
                <div className="date">{exp.period}</div>
                <div className="content">
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
