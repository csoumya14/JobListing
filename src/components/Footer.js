import React from 'react'

const attribution = {
  padding: '50px',
  fontSize: '11px',
  textAlign: 'center',
}

const Footer = () => {
  return (
    <div style={attribution}>
      Challenge by{' '}
      <a
        style={{ color: 'hsl(228, 45%, 44%)' }}
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noopener noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        style={{
          color: 'hsl(228, 45%, 44%)',
        }}
        href="https://www.linkedin.com/in/soumya-chalakkal-60885246/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Soumya Chalakkal
      </a>
      .
    </div>
  )
}

export default Footer
