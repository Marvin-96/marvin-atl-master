module.exports = {
  siteMetadata: {
    title: "Marvin-atl",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,


  
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts`,
    },
  },

]
};
