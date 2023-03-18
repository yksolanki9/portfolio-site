import * as React from "react";

const workExp = [
  {
    period: "Aug 2022 - Present",
    title: "Fyle | Member of Technical Staff II",
    description: "Angular, Ionic, Capacitor",
  },
  {
    period: "Jan 2022 - Jul 2022",
    title: "Fyle | Member of Technical Staff I",
    description: "Angular, Ionic, Capacitor",
  },
  {
    period: "Aug 2021 - Jan 2022",
    title: "Fyle | Full Stack Developer Intern",
    description: "Angular, Ionic, Capacitor",
  },
  {
    period: "Jun 2021 - Jul 2021",
    title: "Jeevam Health | Backend Intern",
    description: "NodeJs, ExpressJs, MongoDB",
  },
  {
    period: "May 2020 - Jul 2020",
    title: "Samsung Research | SDE Intern",
    description: "Matlab, NYUSIM, Channel Simulations",
  },
];

export const Experience = () => {
  return (
    <div className="2xl:pt-64 pt-56 pb-40 px-16 h-fit bg-cyan-800 experience-section">
      <h2 className="text-5xl text-center">Experience</h2>
      <div className="page">
        <div className="section">
          <div className="top-container">
            {workExp.map((exp, index) => (
              <div
                className={
                  "exp-container " + (index % 2 === 0 ? "left" : "right")
                }
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
