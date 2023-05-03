//@ts-nocheck
import * as React from "react";
import { badgeUrlMapping } from "../utils/badge-url-mapping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";

export const ProjectCard = ({ project }) => {
  const { title, description, badges, redirections } = project;
  return (
    <a href={redirections.githubUrl} target={"_blank"}>
      <div className="p-4 m-2 border border-white border-opacity-25 rounded-lg flex flex-col min-h-full">
        <div className="flex justify-between">
          <div>{title}</div>
          <div>
            <FontAwesomeIcon icon="arrow-up-right-from-square" />
          </div>
        </div>
        <div className="text-xs font-light pt-2 flex-1 text-slate-200">
          {description}
        </div>
        <div className="pt-2 mt-auto">
          {badges.map((badge, index) => (
            <img
              className="inline pr-2 h-6"
              key={index}
              src={badgeUrlMapping[badge]}
            />
          ))}
        </div>
      </div>
    </a>
  );
};
