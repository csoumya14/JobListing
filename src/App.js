import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CriteriaList from './components/CriteriaList'
import CompanyData from './components/CompanyData'
import JobList from './components/JobList'

const App = () => {
  const [jobDetails, setJobDetails] = useState([])
  const [criteria, setCriteria] = useState([])

  useEffect(() => setJobDetails(CompanyData), [])

  const jobDetailsToShow = jobDetails.filter((job) => {
    return criteria.every((c) => {
      return job.role === c || job.level === c || job.languages.includes(c) || job.tools.includes(c)
    })
  })

  const handleClick = (value) => {
    if (!criteria.includes(value)) setCriteria([...criteria, value])
  }

  const removeCriteria = (item) => {
    setCriteria(criteria.filter((c) => c !== item))
  }

  const clearAll = () => {
    setCriteria([])
  }

  return (
    <div>
      <Header />
      {criteria.length > 0 ? (
        <CriteriaList criteria={criteria} removeCriteria={removeCriteria} clearAll={clearAll} />
      ) : null}
      <JobList jobsToShow={jobDetailsToShow} handleClick={handleClick} />
      <Footer />
    </div>
  )
}

export default App
