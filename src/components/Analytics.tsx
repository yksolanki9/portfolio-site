import React from "react";

interface AnalyticsProps {
  trackingId?: string;
}

export const Analytics: React.FC<AnalyticsProps> = ({
  trackingId = "G-YX71PYVT2P",
}) => {
  React.useEffect(() => {
    // Google Analytics 4
    if (typeof window !== "undefined" && trackingId) {
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
    }
  }, [trackingId]);

  return null;
};

// Extend window type for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
