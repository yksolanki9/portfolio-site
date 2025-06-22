import React from "react";

export const Analytics: React.FC = () => {
  React.useEffect(() => {
    const trackingId = process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID;
    // Load Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", trackingId, {
      page_title: "Yash Solanki - Senior Full Stack Developer Mumbai",
      page_location: window.location.href,
      send_page_view: true,
    });

    // Track custom events for SEO insights
    gtag("event", "page_view", {
      page_title: "Portfolio - YC Startup Developer Mumbai",
      page_location: window.location.href,
      content_group1: "Portfolio",
      content_group2: "Full Stack Developer",
      content_group3: "Mumbai",
    });
  }, []);

  return null;
};

// Window type is extended in types/index.ts
