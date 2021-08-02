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
