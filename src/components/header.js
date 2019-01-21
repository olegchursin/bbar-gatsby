import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  padding: 0 3rem;
  background: #1f3238;

  @media (max-width: 700px) {
    background: #1f3238;
    box-shadow: 0 1px 2px #1f3238;
  }
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledContainer>
    <StyledLink>{siteTitle}</StyledLink>
    <StyledLink>{siteTitle}</StyledLink>
  </StyledContainer>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
