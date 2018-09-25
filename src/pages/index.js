import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import uuid from 'uuid'

import Layout from '../components/layout'

const IndexPage = ({
  data: {
   artists: { edges },
 }
}) => {
    console.log('Data here:', edges);
    return (
      <Layout>
        <main>
          <section>
              <div>
                  <h1>"Who's the best emcee..."</h1>
              </div>
          </section>

          <section>
              { edges.map(artist => (
                  <div key={uuid()}>
                      <h1 className="artist-name"><span>#{artist.node.data.artist_rank}</span> {artist.node.data.artist_name.text}</h1>

                      <Link to={`/artist/${artist.node.uid}`}>See Artist</Link>
                  </div>
              ))}
          </section>

        </main>

      </Layout>
    );
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    artists: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
    query IndexQuery {
        artists: allPrismicArtist(
          sort: { fields: [data___artist_rank], order: ASC }
        ) {
          edges {
            node {
              uid
              data {
                artist_rank
                artist_name {
                  text
                }
                artist_hometown {
                  text
                }
              }
            }
          }
        }
    }
`;
