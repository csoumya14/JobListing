import React from 'react'
import styled from 'styled-components'

const StyledItems = styled.div`
  box: border-box;
  margin-left: 155px;
  margin-top: 20px;
  height: 130px;
  width: 1140px;
  @media only screen and (min-width: 1024px) and (max-width: 1365px) {
    width: 1010px;
    margin-left: 75px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 1110px;
    margin-left: 95px;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 1110px;
    margin-left: 95px;
  }
  @media (max-width: 420px) {
    margin-left: 10px;
    width: 95vw;
    height: 250px;
    margin-top: 45px;
  }

  font-family: Spartan, sans-serif;
  font-size: 15px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 5px 9px 18px hsl(180, 29%, 50%, 0.3);
`
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  ${StyledItems}:nth-child(-n+2) {
    border-left: solid var(--desaturated-dark-cyan) 3px;
  }
  @media (max-width: 420px) {
    margin-top: 30px;
  }
`
const Logo = styled.img`
  margin-left: 20px;
  margin-top: 35px;
  width: 60px;
  height: 25%;
  @media (max-width: 420px) {
    margin-left: 20px;
    margin-top: -30px;
  }
`
const MiddleItem = styled.div`
  margin-left: 95px;
  margin-top: 0px;
  @media (max-width: 420px) {
    margin-left: 20px;
    margin-top: 0px;
  }
`
const MiddleItemFirstLine = styled.div`
  color: var(--desaturated-dark-cyan);
  font-size: 13px;
  margin-top: -72px;
  @media (max-width: 420px) {
    margin-top: 5px;
  }
`

const SpanNew = styled.span`
  text-transform: uppercase;
  color: white;
  padding: 0.3rem 0.3rem;
  background-color: var(--desaturated-dark-cyan);
  border-radius: 24px;
  font-size: 10px;
  font-weight: 700;
  margin-right: 0.6rem;
  margin-left: 0.5rem;
  @media (max-width: 420px) {
    margin-left: 1.2rem;
    padding: 0.5rem 0.6rem;
  }
`
const SpanFeature = styled.span`
  text-transform: uppercase;
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 0.3rem 0.3rem;
  background-color: hsl(230, 29%, 20%);
  border-radius: 24px;
  margin-right: 0.6rem;
  @media (max-width: 420px) {
    margin-right: 0.6rem;
    margin-left: 0.2rem;
    padding: 0.5rem 0.6rem;
  }
`

const Position = styled.div`
  width: 40%;
  margin-top: 15px;

  font-weight: 700;
  margin-bottom: 4px;
  &:hover {
    color: var(--desaturated-dark-cyan);
    cursor: pointer;
  }
  @media (max-width: 420px) {
    width: 75%;
    margin-top: 20px;
  }
`

const Table = styled.div`
  display: table;
  width: 40%;
  @media (max-width: 420px) {
    width: 90%;
    margin-top: 3vw;
  }
`

const HorizontalLists = styled.div`
  list-style: none;
  margin-top: 10px;
  font-size: 12px;
  color: var(--dark-grayish-cyan);
`
const List = styled.div`
  margin-right: 0.8rem;
  display: inline;
  @media (max-width: 420px) {
    margin-right: 0.6rem;
  }
`

const Line = styled.div`
  visibility: hidden;
  @media (max-width: 420px) {
    visibility: visible;
    margin-top: -5vh;
    width: 82vw;
    height: 47px;
    border-bottom: 1px solid var(--dark-grayish-cyan);
    position: absolute;
  }
`
const ListButton = styled.button`
  display: inline;
  outline: none;
  border: none;
  margin-left: 0.8rem;
  color: var(--desaturated-dark-cyan);
  font-weight: 700;
  padding: 9px;
  background-color: var(--light-grayish-cyan-bg);
  border-radius: 4px;
  &:hover {
    background-color: var(--desaturated-dark-cyan);
    cursor: pointer;
    color: white;
  }
  @media (max-width: 420px) {
    padding: 0.5rem;
    margin-left: 2rem;
    margin-top: 1rem;
    fontsize: '15px';
  }
`

const ButtonTable = styled.div`
  display: table;

  float: right;
  margin-top: -50px;
  margin-right: 50px;

  @media (max-width: 420px) {
    margin-top: 10px;
    margin-left: -10px;
    margin-right: 30px;
  }
`

const ButtonLists = styled.div`
  list-style: none;
  font-size: 12px;
  color: var(--dark-grayish-cyan);
`

const JobList = ({ jobsToShow, handleClick }) => {
  return (
    <StyledContainer>
      {jobsToShow.map((jobs) => {
        return (
          <StyledItems key={jobs.id}>
            <div>
              <div>
                <Logo src={jobs.logo} alt="logo" />
              </div>
              <MiddleItem>
                <MiddleItemFirstLine>
                  {jobs.company}
                  {jobs.new && <SpanNew>New!</SpanNew>}
                  {jobs.featured && <SpanFeature>Featured</SpanFeature>}
                </MiddleItemFirstLine>
                <Position>{jobs.position}</Position>
                <Table>
                  <HorizontalLists>
                    <List>{jobs.postedAt}</List>
                    <List>&middot;</List>
                    <List>{jobs.contract}</List>
                    <List>&middot;</List>
                    <List>{jobs.location}</List>
                  </HorizontalLists>
                </Table>
                <Line></Line>
              </MiddleItem>
            </div>
            <ButtonTable>
              <ButtonLists>
                <ListButton onClick={() => handleClick(jobs.role)}>{jobs.role}</ListButton>
                <ListButton onClick={() => handleClick(jobs.level)}>{jobs.level}</ListButton>
                {jobs.languages.map(function (lan) {
                  return (
                    <ListButton key={lan} onClick={() => handleClick(lan)}>
                      {lan}
                    </ListButton>
                  )
                })}
                {jobs.tools &&
                  jobs.tools.map(function (tool) {
                    return (
                      <ListButton key={tool} onClick={() => handleClick(tool)}>
                        {tool}
                      </ListButton>
                    )
                  })}
              </ButtonLists>
            </ButtonTable>
          </StyledItems>
        )
      })}
    </StyledContainer>
  )
}

export default JobList
