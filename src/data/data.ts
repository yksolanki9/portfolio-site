// Personal Information
export const name = "Yash Solanki";
export const title = "Senior Full Stack Developer";
export const about = `I'm a Senior Full Stack Developer based in Mumbai, India, with 4+ years of experience building scalable web applications for high-growth startups, including Y Combinator companies. Currently serving as a Founding Engineer at Craze (YC S22), I specialize in React, Node.js, Angular, and mobile development. My expertise spans both frontend and backend technologies, with a proven track record of delivering robust, user-focused solutions for startups from ideation to scale. I thrive in fast-paced startup environments and am passionate about leveraging cutting-edge technologies to solve complex real-world problems.`;

// Contact Information
export const contactUrls = {
  email: "mailto:yashsolanki1709@gmail.com",
  github: "https://github.com/yksolanki9",
  linkedin: "https://www.linkedin.com/in/yashsolanki",
  instagram: "https://www.instagram.com/solanki1709",
  twitter: "https://twitter.com/yksolanki9",
  dev: "https://dev.to/yksolanki9",
  resume:
    "https://drive.google.com/file/d/1l4uC4A6XIXr7sYKiyzAinMt_gSI8ix1c/view?usp=sharing",
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
    title: "Founding Engineer",
    techStack: ["react", "nodejs", "postgres", "aws"],
    tag: "YC S22",
    url: "https://crazehq.com",
  },
  {
    period: "Aug 2022 - Aug 2023",
    company: "Fyle",
    title: "Member of Technical Staff II",
    techStack: ["angular", "ionic", "capacitor"],
    url: "https://fylehq.com",
  },
  {
    period: "Jan 2022 - Jul 2022",
    company: "Fyle",
    title: "Member of Technical Staff I",
    techStack: ["angular", "ionic", "capacitor"],
    url: "https://fylehq.com",
  },
  {
    period: "Aug 2021 - Jan 2022",
    company: "Fyle",
    title: "Full Stack Developer Intern",
    techStack: ["angular", "ionic", "capacitor"],
    url: "https://fylehq.com",
  },
  {
    period: "Jun 2021 - Jul 2021",
    company: "Jeevam Health",
    title: "Backend Intern",
    techStack: ["nodejs", "expressjs", "mongodb"],
    tag: "YC S20",
    url: "https://www.linkedin.com/company/jeevam-health",
  },
  {
    period: "May 2020 - Jul 2020",
    company: "Samsung Research",
    title: "SDE Intern",
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
  mobile: ["Ionic", "Capacitor", "React Native"],
  tools: ["Git", "Docker", "Webpack", "Vite", "Jest"],
  cloud: ["AWS", "Google Cloud", "Vercel", "Netlify"],
};

// Social Media Links
export const socialLinks = [
  {
    name: "GitHub",
    url: contactUrls.github,
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: contactUrls.linkedin,
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: contactUrls.twitter,
    icon: "twitter",
  },
  {
    name: "Instagram",
    url: contactUrls.instagram,
    icon: "instagram",
  },
  {
    name: "Dev.to",
    url: contactUrls.dev,
    icon: "dev",
  },
];

// Blog Posts (placeholder for future blog content)
export const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt:
      "Best practices for building large-scale React applications with proper architecture and optimization techniques.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Performance"],
    slug: "building-scalable-react-applications",
  },
  {
    title: "Full Stack Development with Node.js and React",
    excerpt:
      "A comprehensive guide to building modern web applications using Node.js backend and React frontend.",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["Node.js", "React", "Full Stack"],
    slug: "full-stack-development-nodejs-react",
  },
  {
    title: "Mobile App Development with Ionic and Capacitor",
    excerpt:
      "Learn how to build cross-platform mobile applications using Ionic framework and Capacitor.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Ionic", "Capacitor", "Mobile"],
    slug: "mobile-app-development-ionic-capacitor",
  },
];

// SEO and Meta Information
export const seoData = {
  title: `${name} - ${title}`,
  description:
    "Senior Full Stack Developer in Mumbai with 4+ years of experience building scalable web applications for Y Combinator startups. Expert in React, Node.js, Angular, and mobile development.",
  keywords: [
    "Full Stack Developer",
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
  url: "https://yksolanki9.github.io",
  image: "/profile.png",
};
