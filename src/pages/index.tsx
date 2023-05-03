import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Blogs } from "../components/Blogs";
import { Contact } from "../components/Contact";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Blogs></Blogs>
      <Contact></Contact>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
