//@ts-nocheck
import * as React from "react";
import { badgeUrlMapping } from "../utils/badge-url-mapping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../utils/fontawesome";

export const ProjectCard = ({ project }) => {
  const { title, description, badges, redirections } = project;
  return (
    <a className="w-full" href={redirections.githubUrl} target={"_blank"}>
      <div className="group p-4 m-2 border border-white border-opacity-25 rounded-lg flex flex-col min-h-full transition-all duration-300 hover:shadow-md hover:shadow-slate-200 hover:scale-105">
        <div className="flex justify-between">
          <div>{title}</div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FontAwesomeIcon icon="arrow-up-right-from-square" />
          </div>
        </div>
        <div className="text-sm leading-6 font-light pt-2 flex-1 text-slate-200">
          {description}
        </div>
        <div className="mt-auto">
          {badges.map((badge, index) => (
            <img
              className="inline mr-2 last:mr-0 mt-2 h-5 min-[450px]:h-6"
              key={index}
              src={badgeUrlMapping[badge]}
            />
          ))}
        </div>
      </div>
    </a>
  );
};
