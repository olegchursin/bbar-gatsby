import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const styles = {
  wrapper: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  content: {
    maxWidth: '1280px',
    paddingTop: 80,
    flexGrow: 1,
  },
}

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
        <div style={styles.wrapper}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div style={styles.content}>{children}</div>
          <Footer />
        </div>
      </>
    )}
  />
)

export default Layout
