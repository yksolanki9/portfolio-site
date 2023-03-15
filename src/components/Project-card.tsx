//@ts-nocheck
import * as React from "react";
import { badgeUrlMapping } from "../utils/badge-url-mapping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";

export const ProjectCard = ({ project }) => {
  const { title, description, badges, redirections } = project;
  return (
    <div className="card">
      <div className="flex justify-between">
        <div>{title}</div>
        <div>
          <FontAwesomeIcon icon={"arrow-up-right-from-square"} />
        </div>
      </div>

      <div className="text-xs font-light pt-2">{description}</div>

      {badges.map((badge) => (
        <img className="inline p-2" src={badgeUrlMapping[badge]} />
      ))}

      <FontAwesomeIcon icon={["fab", "angular"]} />
      <FontAwesomeIcon icon={["fab", "google-play"]} />
    </div>
  );
};
