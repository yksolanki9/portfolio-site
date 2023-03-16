//@ts-nocheck
import * as React from "react";
import { badgeUrlMapping } from "../utils/badge-url-mapping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";

export const ProjectCard = ({ project }) => {
  const { title, description, badges, redirections } = project;
  return (
    <a href={redirections.githubUrl} target={"_blank"}>
      <div className="card">
        <div className="flex justify-between">
          <div>{title}</div>
          <div>
            <FontAwesomeIcon icon={"arrow-up-right-from-square"} />
          </div>
        </div>

        <div className="text-xs font-light pt-2">{description}</div>

        {badges.map((badge) => (
          <img className="inline p-1 h-8" src={badgeUrlMapping[badge]} />
        ))}
      </div>
    </a>
  );
};
