import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const styles = {
  wrapper: {
    height: '100%',
  },
  body: {
    minHeight: '100%',
    display: 'grid',
    gridTemplateRows: '1fr auto',
  },
  footer: {
    gridRowStart: 2,
    gridRowEnd: 3,
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
        <div className={'site'}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            className={'site-content'}
            style={{
              maxWidth: '1280px',
              paddingTop: 80,
            }}
          >
            {children}
          </div>
          <Footer />
        </div>
      </>
    )}
  />
)

export default Layout
