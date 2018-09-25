import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const ArtistPage = ({ data: { prismicArtist: artistNode } }) => {
    console.log(artistNode);
    const { data } = artistNode;

    return (
      <Layout>
        <h1>{data.artist_name.text}</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    );
}

export default ArtistPage

ArtistPage.propTypes = {
  data: PropTypes.shape({
    prismicArtist: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query ArtistBySlug($uid: String!) {
    prismicArtist(uid: { eq: $uid }) {
      uid
      data {
        artist_rank
        artist_name {
          text
        }
        artist_hometown {
          text
        }
        artist_albums {
          album_title {
            text
          }
          album_release_date {
            text
          }
        }
      }
    }
  }
`;
