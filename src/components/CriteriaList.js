import React from 'react'
import removeButton from '../images/icon-remove.svg'
import styled from 'styled-components'

const Items = styled.div`
  box: border box;
  display: flex;
  position: relative;
  margin-left: 155px;
  margin-top: -35px;
  z-index: 500;
  height: 105px;
  width: 1140px;
  @media (max-width: 375px) {
    margin-left: 10px;
    width: 95vw;
    height: 17vh;
  }
  font-family: Spartan, sans-serif;
  font-size: 15px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 5px 9px 18px hsl(180, 29%, 50%, 0.3);
`
const TopAttribute = styled.div`
  width: 100%;

  @media (max-width: 375px) {
    width: 70%;
  }
`
const Attribute = styled.div`
  position: relative;
  background-color: var(--light-grayish-cyan-bg);
  color: hsl(180, 29%, 50%);
  display: inline-block;
  margin-top: 5vh;
  margin-left: 40px;
  margin-right: -20px;
  margin-bottom: 3vh;
  padding-left: 7px;
  padding-top: 2vh;
  font-weight: 700;
  font-size: 12px;
  border-radius: 3px;
  @media (max-width: 375px) {
    margin-left: 20px;
    margin-right: 0px;
    padding-top: 1vh;

    margin-bottom: 0vh;
  }
`
const Clear = styled.button`
  position: absolute;
  float: right;
  font-family: Spartan, sans-serif;
  align-self: center;
  font-weight: 700;
  right: 30px;
  border: none;
  outline: none;
  background-color: transparent;
  color: hsl(180, 29%, 50%);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const CrossButton = styled.button`
  background-color: var(--desaturated-dark-cyan);
  border: none;
  outline: none;
  margin-top: -2vh;
  margin-left: 0.5vw;
  height: 5vh;
  width: 2vw;
  cursor: pointer;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  &:hover {
    background-color: black;
  }
  @media (max-width: 375px) {
    margin-top: -1vh;
    margin-left: 1.9vw;
    width: 9vw;
  }
`

const imageStyle = {
  backgroundColor: 'transparent',
}

const CriteriaList = ({ criteria, clearAll, removeCriteria }) => {
  return (
    <Items>
      <TopAttribute>
        {criteria.map((c, i) => (
          <Attribute key={i}>
            {c}
            <CrossButton onClick={() => removeCriteria(c)}>
              <img style={imageStyle} src={removeButton} alt="remove button" />
            </CrossButton>
          </Attribute>
        ))}
      </TopAttribute>
      <Clear onClick={clearAll}>Clear</Clear>
    </Items>
  )
}
export default CriteriaList
