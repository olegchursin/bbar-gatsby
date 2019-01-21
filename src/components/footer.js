import React from 'react'

import BBarMapImg from './img/bbarMap'

const styles = {
  innerContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '0 auto',
    maxWidth: '1280px',
    width: '90%',
  },
  footerWrapper: {
    backgroundColor: '#1e3238',
    color: '#fff',
    height: '400px',
    padding: '0 0 0 40px',
  },
}

const Footer = () => {
  return (
    <div style={styles.footerWrapper}>
      <div style={styles.innerContainer}>
        <div>
          <h1>Address</h1>
          <p>
            <a
              href="https://goo.gl/maps/nAfL51kVCtB2"
              target="_blank"
              rel="noopener noreferrer"
            >
              40 East 4th St. New York, NY 10003
            </a>
          </p>
          <div className={'white-space-30'} />
          <h1>Events & Reservations</h1>
          <p>
            <a href="mailto:reservations@bbarandgrill.com">
              reservations@bbarandgrill.com
            </a>
          </p>
        </div>
        <div>
          <BBarMapImg />
        </div>
        <div />
      </div>
    </div>
  )
}

export default Footer
