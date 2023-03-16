//@ts-nocheck
import * as React from "react";
import { ProjectCard } from "./Project-card";

const projects = [
  {
    title: "Comet",
    description:
      "A mobile application designed for personal daily journaling and self-reflection. It enables users to upload images and receive daily reminders to write in their journal, making it easier to establish a consistent journaling habit.",
    badges: ["angular", "ionic", "capacitor"],
    redirections: {
      githubUrl: "https://github.com/yksolanki9/comet-ui",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.ionic.comet_daily_journal",
    },
  },
  {
    title: "CalendarX",
    description:
      "A meeting scheduling web application that enables users to share their availibility with others and allows invitees to select a time which works best for them.",
    badges: ["node", "express", "mongodb", "google-apis"],
    redirections: {
      githubUrl: "https://github.com/yksolanki9/calendarX",
    },
  },
  {
    title: "Google Data Studio Connector",
    description:
      "A connector that allows users to upload excel files to Google Data Studio and create reports from them. Users can upload files from their computer or search for attachments in their Gmail inbox with a search query.",
    badges: ["node", "express", "mongodb", "passportjs", "google-apps-scripts"],
    redirections: {
      githubUrl: "https://github.com/yksolanki9/excel-data-studio-connector",
    },
  },
  {
    title: "Capacitor Share With Plugin",
    description:
      "A capacitor plugin that allows users to share files from file explorer or any other application and import it into their ionic app.",
    badges: ["java", "capacitor", "typescript"],
    redirections: {
      githubUrl: "https://github.com/yksolanki9/capacitor-share-with-plugin",
      npmUrl: "https://github.com/yksolanki9/capacitor-share-with-plugin",
    },
  },
  {
    title: "Find My Bank",
    description:
      "A React application with Node backend which helps users to search for information about their bank branch. It uses dynamic filtering, pagination, API caching and bookmarking.",
    badges: ["react", "node", "express", "postgres"],
    redirections: {
      githubUrl: "https://github.com/yksolanki9/Find-My-Bank",
    },
  },
  {
    title: "Vidya",
    description:
      "A NGO landing page designed with Razorpay payment integration which allows visitors to make donation.",
    badges: ["react", "material-ui", "razorpay"],
    redirections: {
      githubUrl: "https://github.com/yksolanki9/vidya-ngo",
    },
  },
];

export const Projects = () => {
  return (
    <div className="2xl:pt-64 mt-20 py-40 px-16 bg-gray-800 about-section">
      <h2 className="text-5xl pb-4 text-center">Projects</h2>
      <div className="grid grid-cols-2 gap-4 justify-center justify-items-center">
        {projects.map((project) => (
          <ProjectCard project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};
