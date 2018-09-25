/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicArtist {
        edges {
          node {
            uid
          }
        }
      }
    }
  `);

  const artistTemplate = path.resolve('src/templates/artist.js');

  pages.data.allPrismicArtist.edges.forEach(edge => {
    createPage({
      path: `/artist/${edge.node.uid}`,
      component: artistTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
