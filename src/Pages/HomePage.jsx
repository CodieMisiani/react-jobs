import React from 'react'
import Hero from '../components/Hero'
import Homecard from '../components/Homecard'
import Joblisting from '../components/Joblisting'
import ViewAllJobs from '../components/ViewAllJobs'
const HomePage = () => {
  return (
    <div>
        <Hero />
        <Homecard />
        <Joblisting isHome={true}/>
        <ViewAllJobs/>
    </div>
  )
}

export default HomePage