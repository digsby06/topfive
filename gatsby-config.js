require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Top 5',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-prismic",
      options: {

        repositoryName: "top5",

        accessToken: `${process.env.ACCESS_TOKEN}`,

        linkResolver: ({ node, key, value }) => doc => {
            console.log('from resolver', doc);
          // Your link resolver
            if (doc.type === 'artist') return "/artist/" + doc.uid;
        },

        htmlSerializer: ({ node, key, value }) => (
          (type, element, content, children) => {
            // Your HTML serializer
          }
        ),
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
