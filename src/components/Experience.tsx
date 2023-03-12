import * as React from "react";

export const Experience = () => {
  return (
    <div className="2xl:pt-64 pt-56 pb-40 px-16 h-fit bg-cyan-800 experience-section">
      <h2 className="text-5xl text-center">Experience</h2>
      <div className="page">
        <div className="section">
          <div className="top-container">
            <div className="exp-container left">
              <div className="date">Aug 2022 - Present </div>
              <div className="content">
                <div>Fyle | Member of Technical Staff II</div>
                <div className="subtitle">Angular, Ionic, Capacitor</div>
              </div>
            </div>

            <div className="exp-container right">
              <div className="date">Jan 2022 - Jul 2022</div>
              <div className="content">
                <div>Fyle | Member of Technical Staff I</div>
                <div className="subtitle">Angular, Ionic, Capacitor</div>
              </div>
            </div>

            <div className="exp-container left">
              <div className="date">Aug 2021 - Jan 2022</div>
              <div className="content">
                <div>Fyle | Full Stack Developer Intern</div>
                <div className="subtitle">Angular, Ionic, Capacitor</div>
              </div>
            </div>

            <div className="exp-container right">
              <div className="date">Jun 2021 - Jul 2021</div>
              <div className="content">
                <div>Jeevam Health | Backend Intern</div>
                <div className="subtitle">NodeJs, ExpressJs, MongoDB</div>
              </div>
            </div>

            <div className="exp-container left">
              <div className="date">May 2020 - Jul 2020</div>
              <div className="content">
                <div>Samsung Research | SDE Intern</div>
                <div className="subtitle">
                  Matlab, NYUSIM, Channel Simulations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
