import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Top Five Emcees' },
            { name: 'keywords', content: 'hip hop, rap, music, rappers, GOAT, top five' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <div
          style={{
            margin: '0 auto',
            maxWidth: 1800,
            padding: '1.45rem 1.0875rem 1.45rem',
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
