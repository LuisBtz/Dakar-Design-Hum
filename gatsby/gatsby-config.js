module.exports = {
  siteMetadata: {
    title: `Dakar Design Hub`,
    description: `We are an interdisciplinary design space that will provide high quality creative design educationto talented individuals who are looking to pursue a career in design.`,
    author: `DDH`,
    siteUrl: `https://www.netlify.com/`,
    social: {
      twitter: `schaudustin`,
    },
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://dakardesignhub.us5.list-manage.com/subscribe/post?u=ed2f6e6e81abf5c2d2afde25b&amp;id=9ffa271c6d", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `poo7pnjn`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
        watchMode: true,
      },
    },
  ],
};