module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    `gatsby-plugin-emotion`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes : true,
        // Pedantic mode (default: true)
        pedantic  : true,
        // GitHub Flavored Markdown mode (default: true)
        gfm       : true,
        // Plugins configs
        plugins   : [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix      : "language-",
              inlineCodeMarker : null,
              aliases          : {},
              showLineNumbers  : false,
              noInlineHighlight: false,
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/build-contents/`,
      },
    },
  ]
}