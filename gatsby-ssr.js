/**
 * Gatsby SSR customizations.
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" });
};
