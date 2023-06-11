//@ts-nocheck
import * as React from "react";
import { badgeUrlMapping } from "../utils/badge-url-mapping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import "../utils/fontawesome";

export const ProjectCard = ({ id, project, rootRef }) => {
  const { title, description, badges, redirections } = project;
  const { inView, ref } = useInView({
    threshold: 1,
    triggerOnce: true,
    root: rootRef?.current,
  });
  return (
    <a
      ref={ref}
      className="w-full"
      href={redirections.githubUrl}
      target={"_blank"}
    >
      <div
        className={`group p-4 m-2 border border-white border-opacity-25 rounded-lg flex flex-col min-h-full transition-all duration-500 hover:shadow-md hover:shadow-slate-200 hover:scale-105 ${
          id % 2 !== 0 ? "translate-x-full" : "-translate-x-full"
        } ${inView ? "opacity-100 !translate-x-0" : "opacity-0"}`}
      >
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
