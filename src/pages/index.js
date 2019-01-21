import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import AstronautImg from '../components/img/astronaut'
import MapImg from '../components/img/bbarMap'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <AstronautImg />
      <MapImg />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
