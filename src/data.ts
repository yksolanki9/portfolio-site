import { BlogPost } from "./types";

// Personal Information
export const name = "Yash Solanki";
export const title = "Full Stack & AI Engineer";
export const about = `I'm a full-stack and AI engineer based in Mumbai, India, with 5+ years of experience building scalable products for high-growth startups, including Y Combinator companies. As the first engineer at Craze (YC S22), I've helped shape the product from the ground up: we began with an HRMS platform, then moved into agentic AI, and today I'm focused on AI video generation, architecting and shipping AI-driven products end to end. My focus now is firmly on AI: designing agentic systems, LLM and RAG pipelines, and generative-video tooling, all built on a solid full-stack foundation of React, Node.js, and Angular. I thrive in fast-paced startup environments and love turning ambitious, open-ended ideas into robust, user-focused products.`;

// Contact Information
export const contactUrls = {
  email: "mailto:yashsolanki1709@gmail.com",
  github: "https://github.com/yksolanki9",
  linkedin: "https://www.linkedin.com/in/yashsolanki",
  instagram: "https://www.instagram.com/solanki1709",
  twitter: "https://twitter.com/yksolanki9",
  dev: "https://dev.to/yksolanki9",
  resume:
    "https://drive.google.com/file/d/1sq5ydeNHuI9-Wzdju6-CmI6Fhrziak0w/view?usp=drive_link",
};

// Legacy URLs object for backward compatibility
export const urls = {
  GMAIL: contactUrls.email,
  EMAIL: contactUrls.email,
  GITHUB: contactUrls.github,
  LINKEDIN: contactUrls.linkedin,
  INSTAGRAM: contactUrls.instagram,
  TWITTER: contactUrls.twitter,
  DEV: contactUrls.dev,
  RESUME: contactUrls.resume,
};

// Work Experience
export const workExperience = [
  {
    period: "Sep 2023 - Present",
    company: "Craze",
    roles: [{ title: "Founding Engineer", period: "Sep 2023 - Present" }],
    techStack: ["react", "nodejs", "typescript", "llms", "agentic ai", "video gen"],
    tag: "YC S22",
    url: "https://crazehq.com",
  },
  {
    period: "Aug 2021 - Aug 2023",
    company: "Fyle",
    roles: [
      { title: "Member of Technical Staff II", period: "Aug 2022 - Aug 2023" },
      { title: "Member of Technical Staff I", period: "Jan 2022 - Jul 2022" },
      { title: "Full Stack Developer Intern", period: "Aug 2021 - Jan 2022" },
    ],
    techStack: ["angular", "ionic", "capacitor"],
    tag: "Acquired by Sage",
    url: "https://fylehq.com",
  },
  {
    period: "Jun 2021 - Jul 2021",
    company: "Jeevam Health",
    roles: [{ title: "Backend Intern", period: "Jun 2021 - Jul 2021" }],
    techStack: ["nodejs", "expressjs", "mongodb"],
    tag: "YC S20",
    url: "https://www.linkedin.com/company/jeevam-health",
  },
  {
    period: "May 2020 - Jul 2020",
    company: "Samsung Research Institute",
    roles: [{ title: "SDE Intern", period: "May 2020 - Jul 2020" }],
    techStack: ["matlab", "nyusim", "channel simulations"],
    url: "https://research.samsung.com/sri-b",
  },
];

// Projects
export const projects = [
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
    badges: ["express", "mongodb", "googlecloud"],
    redirections: {
      githubUrl: "https://github.com/yksolanki9/calendarX",
    },
  },
  {
    title: "Google Data Studio Connector",
    description:
      "A connector that allows users to upload excel files to Google Data Studio and create reports from them. Users can upload files from their computer or search for attachments in their Gmail inbox with a search query.",
    badges: ["express", "mongodb", "googleAppScript"],
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
];

// Skills and Technologies
export const techStack = {
  frontend: ["React", "Angular", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "AWS"],
  ai: [
    "LLMs",
    "Agentic AI",
    "Video Generation",
    "RAG",
    "Prompt Engineering",
  ],
  mobile: ["Ionic", "Capacitor", "React Native"],
  tools: ["Git", "Docker", "Webpack", "Vite", "Jest"],
  cloud: ["AWS", "Google Cloud", "Vercel", "Netlify"],
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Did I Build Cropping of Receipts",
    platform: "Fyle Stories",
    description: "Deep dive into one of my first projects at Fyle.",
    url: "https://stories.fylehq.com/p/how-did-i-build-cropping-of-receipts",
    category: "Mobile App",
    publishedDate: "2023",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 2,
    title: "Node.js REST API: Complete Guide",
    platform: "Scaler Topics",
    description:
      "Comprehensive guide to building robust REST APIs with Node.js, covering best practices and real-world examples.",
    url: "https://www.scaler.com/topics/nodejs/node-js-rest-api/",
    category: "Backend Development",
    publishedDate: "2023",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "Node.js Fetch: Modern HTTP Requests",
    platform: "Scaler Topics",
    description:
      "Master the fetch API in Node.js for handling HTTP requests with modern JavaScript patterns and error handling.",
    url: "https://www.scaler.com/topics/nodejs/node-js-fetch/",
    category: "Node.js",
    publishedDate: "2023",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 4,
    title: "Node.js vs PHP: Complete Comparison",
    platform: "Scaler Topics",
    description:
      "In-depth comparison between Node.js and PHP for backend development, performance analysis, and use cases.",
    url: "https://www.scaler.com/topics/nodejs/node-js-vs-php/",
    category: "Backend Development",
    publishedDate: "2023",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 5,
    title: "Closure in JavaScript: Deep Dive",
    platform: "Scaler Topics",
    description:
      "Understanding JavaScript closures with practical examples, common patterns, and advanced use cases.",
    url: "https://www.scaler.com/topics/nodejs/closure-in-javascript/",
    category: "JavaScript",
    publishedDate: "2023",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 6,
    title: "NPM Publish: Complete Guide",
    platform: "Scaler Topics",
    description:
      "Step-by-step guide to publishing your packages to NPM, including best practices and automation strategies.",
    url: "https://www.scaler.com/topics/npm-publish/",
    category: "Node.js",
    publishedDate: "2023",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 7,
    title: "Noob's Guide to Using Any Google API in Node.js",
    platform: "Dev.to",
    description:
      "Beginner-friendly tutorial for integrating Google APIs into Node.js applications with authentication and best practices.",
    url: "https://dev.to/yksolanki9/noobs-guide-to-using-any-google-api-in-nodejs-1j8g",
    category: "API Integration",
    publishedDate: "2023",
    readTime: "15 min read",
    image:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&h=300&fit=crop&crop=center",
  },
  {
    id: 8,
    title: "Require vs Import in Node.js",
    platform: "Dev.to",
    description:
      "Understanding the differences between CommonJS require and ES6 import/export in Node.js applications.",
    url: "https://dev.to/yksolanki9/require-vs-import-in-nodejs-4fap",
    category: "Node.js",
    publishedDate: "2023",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
  },
];

// SEO and Meta Information
export const seoData = {
  title: `${name} - ${title}`,
  description:
    "Full Stack & AI Engineer in Mumbai with 5+ years building scalable products for Y Combinator startups. First engineer at Craze (YC S22), now building agentic AI and video-generation products. Expert in React, Node.js, Angular, LLMs, and AI agents.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "Agentic AI",
    "Video Generation",
    "LLM",
    "React",
    "Node.js",
    "Angular",
    "Mumbai",
    "Y Combinator",
    "Startup",
    "TypeScript",
    "JavaScript",
  ],
  author: name,
  url: "https://yashsolanki.in",
  image: "https://yashsolanki.in/profile.png",
};
