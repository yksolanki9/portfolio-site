import * as React from "react";

export const Experience = () => {
  return (
    <div className="2xl:pt-64 pt-44 pb-40 px-16 h-fit bg-cyan-800 experience-section">
      <h2 className="text-5xl text-center">Experience</h2>
      <div className="flex flex-col items-center">
        <div className="top-container">
          <div className="exp-container left">
            <div>Fyle | Member of Technical Staff II</div>
            <div>Angular, Ionic, Capacitor</div>
            <div className="date">Aug 2022 - Present</div>
          </div>

          <div className="exp-container">
            <div>Fyle | Member of Technical Staff I</div>
            <div>Angular, Ionic, Capacitor</div>
          </div>

          <div className="exp-container">
            <div>Fyle | Full Stack Developer Intern</div>
            <div>Angular, Ionic, Capacitor</div>
          </div>

          <div className="exp-container">
            <div>Jeevam Health | Backend Developer Intern</div>
            <div>NodeJs, ExpressJs, MongoDB</div>
          </div>

          <div className="exp-container">
            <div>Samsung Research | Software Developer Intern</div>
            <div>Matlab, NYUSIM, Data Modelling</div>
          </div>
        </div>
      </div>
    </div>
  );
};


  // /* <div className="exp-container-icon">
  //             <img src={fyleLogo}></img>
  //           </div> */