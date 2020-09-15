import React from 'react'
import bgDesktop from '../images/bg-header-desktop.svg'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  @media (max-width: 360px) {
    margin-left: -260vw;
    width: 360vw;
  }
  background-color: hsl(180, 29%, 50%);
`

const Header = () => {
  return (
    <div>
      <Image src={bgDesktop} alt="bg-img" />
    </div>
  )
}

export default Header
