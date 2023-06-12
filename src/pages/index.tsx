import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Blogs } from "../components/Blogs";
import { Contact } from "../components/Contact";
import { name, title, about } from "../data/about";
import { workExperience } from "../data/work-experience";
import { projects } from "../data/projects";
import { urls } from "../data/contact";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Home name={name} title={title}></Home>
      <About about={about}></About>
      <Experience workExperience={workExperience}></Experience>
      <Projects projects={projects}></Projects>
      <Blogs></Blogs>
      <Contact urls={urls}></Contact>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Yash Solanki's Portfolio</title>;
