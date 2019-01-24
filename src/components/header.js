import { Link } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'

const Navbar = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: 0 auto;
  padding: 0 3rem;
  background: #1f3238;
  color: #fff;

  @media (max-width: 700px) {
    background: #1f3238;
    box-shadow: 0 1px 2px #1f3238;
  }
`
const Logo = styled(Link)`
  color: white;
  text-decoration: none;
`

const SlidingMenu = styled.div`
  height: 100vh;
  color: #fff;
  background: #1f3238;
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

const menuContents = <SlidingMenu>Side menu</SlidingMenu>

const Header = ({ siteTitle, classes }) => {
  const [open, toggleOpen] = useState(false)

  const handleMenuOpen = () => {
    toggleOpen(true)
  }

  const handleMenuClose = () => {
    toggleOpen(false)
  }

  const menuIcon = (
    <IconButton
      color="inherit"
      aria-label="Open menu"
      onClick={handleMenuOpen}
      className={classNames(classes.menuButton, open && classes.hide)}
    >
      <MenuIcon />
    </IconButton>
  )

  const slidingMenu = (
    <Drawer anchor="top" open={open} onClose={handleMenuClose}>
      <div
        tabIndex={0}
        role="button"
        onClick={handleMenuClose}
        onKeyDown={handleMenuClose}
      >
        {menuContents}
      </div>
    </Drawer>
  )

  return (
    <Navbar>
      <Logo to="/">{siteTitle}</Logo>
      {menuIcon}
      {slidingMenu}
    </Navbar>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
