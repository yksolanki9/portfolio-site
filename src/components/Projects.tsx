import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";
import { ProjectCard } from "./Project-card";

export const Projects = () => {
  return (
    <div className="2xl:pt-64 mt-20 pt-28 px-16 h-screen bg-gray-800 about-section">
      <h2 className="text-5xl text-center">Projects</h2>
      <div className="grid grid-cols-2 justify-center justify-items-center">
        <div className="card">
          <div className="flex justify-between">
            <div>Comet</div>
            <div>
              <FontAwesomeIcon icon={"arrow-up-right-from-square"} />
            </div>
          </div>

          <div className="text-xs font-light pt-2">
            A personal daily journal and self reflection mobile app.
          </div>
          <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"></img>
          <img src="https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white"></img>
          <img src="https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=Capacitor&logoColor=white"></img>
          <FontAwesomeIcon icon={["fab", "angular"]} />
          <FontAwesomeIcon icon={["fab", "google-play"]} />
        </div>
        <div className="card">
          <p>Creating a card to see how it'll look in dark mode</p>
        </div>
        <div className="card">
          <p>Creating a card to see how it'll look in dark mode</p>
        </div>
      </div>
    </div>
  );
};
