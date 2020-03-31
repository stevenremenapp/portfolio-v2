const siteMetadata = {
  title: "Site Title",
  description: "Site description"
}

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts`,
        name: "posts"
      }
    }
  ]
}