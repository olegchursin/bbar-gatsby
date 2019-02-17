import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import ButtonLight from './widgets/ButtonLight'

const styles = {
  intro: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    width: '100%',
    zIndex: 1,
  },
}

const IntroImage = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "index-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid

      const handleClick = () => {
        console.log('clicked button')
      }

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div style={styles.intro}>
            <ButtonLight handleClick={handleClick} />
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default IntroImage
