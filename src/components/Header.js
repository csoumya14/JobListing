import React from 'react'
import bgDesktop from '../images/bg-header-desktop.svg'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    width: 80rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80rem;
  }

  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 80rem;
  }
  @media (max-width: 420px) {
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
