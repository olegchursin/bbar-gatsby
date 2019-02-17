import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import IntroImage from '../components/IntroImage'
import InfoSection from '../components/InfoSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section>
      <IntroImage />
      <InfoSection />
    </section>
  </Layout>
)

export default IndexPage
