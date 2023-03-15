//@ts-nocheck
import * as React from "react";
import { ProjectCard } from "./Project-card";

const projects = [
  {
    title: "Comet",
    description: "A personal daily journal and self reflection mobile app.",
    badges: ["angular", "ionic", "capacitor"],
    redirections: {
      githubUrl: "",
      playStoreUrl: "",
      npmUrl: "",
      websiteUrl: "",
    },
  },
  {
    title: "CalendarX",
    description: "A web application to share meeting slots with clients",
    badges: ["node", "express", "mongodb", "google-apis"],
    redirections: {
      githubUrl: "",
      playStoreUrl: "",
      npmUrl: "",
      websiteUrl: "",
    },
  },
  {
    title: "Google Data Studio Connector",
    description: "A connector google data stydui",
    badges: ["node", "express", "mongodb", "passportjs", "google-apps-scripts"],
    redirections: {
      githubUrl: "",
      playStoreUrl: "",
      npmUrl: "",
      websiteUrl: "",
    },
  },
  {
    title: "Capacitor Share With Plugin",
    description: "A capacitor plugin to share your app",
    badges: ["java", "capacitor", "typescript"],
    redirections: {
      githubUrl: "",
      playStoreUrl: "",
      npmUrl: "",
      websiteUrl: "",
    },
  },
  {
    title: "Find My Bank",
    description: "React application to find the nearest bank",
    badges: ["react", "node", "express", "postgres"],
    redirections: {
      githubUrl: "",
      playStoreUrl: "",
      npmUrl: "",
      websiteUrl: "",
    },
  },
  {
    title: "Vidya",
    description: "Landing page for NGO website with donation",
    badges: ["react", "material-ui", "razorpay"],
    redirections: {
      githubUrl: "",
      playStoreUrl: "",
      npmUrl: "",
      websiteUrl: "",
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
