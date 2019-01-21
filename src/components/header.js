import { Link } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'

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

const styles = {
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
}

const sideMenu = <div>Side menu</div>

const Header = ({ siteTitle, classes }) => {
  const [open, toggleOpen] = useState(false)

  const handleMenuOpen = () => {
    toggleOpen(true)
  }

  const handleMenuClose = () => {
    toggleOpen(false)
  }

  return (
    <StyledContainer>
      <StyledLink to="/">{siteTitle}</StyledLink>
      <StyledLink to="/page-2/">{siteTitle}</StyledLink>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={handleMenuOpen}
        className={classNames(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleMenuClose}>
        <div
          tabIndex={0}
          role="button"
          onClick={handleMenuClose}
          onKeyDown={handleMenuClose}
        >
          {sideMenu}
        </div>
      </Drawer>
    </StyledContainer>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
