module.exports = {
  siteMetadata: {
    title: `Shalom Christian Embassy`,
    titleTemplate: "%s · Shalom Christian Embassy",
    description: `The church of all nations.`,
    url: "shalomchristianembassy.netlify.com",
    image: "favicon-32x32.png",
    author: `Clinton Manakane <clintonwamanakane@gmail.com>`,
  },
  flags: {
    THE_FLAG: false,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },

    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `fraunces\:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i`,
          `quicksand\:300,400,500,600,700`,
          `poppins\:300,300i,400,400i,500,500i,600,700,800`,
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

//clieant secret github
//0b3b4b84117f1e5e435914ecac39abdaa67510ad
