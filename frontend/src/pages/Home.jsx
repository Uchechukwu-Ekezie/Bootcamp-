import React from 'react'
import Hero from '../Components/Hero'
import Skills from '../Components/Skills'
import Teacher from '../Components/Teacher'
import ParentOp from '../Components/ParentOp'
import Team from '../Components/Team'

function Home() {
  return (
    <div> 
      <Hero/>
      <Skills/>
      <Teacher/>
      <Team/>
      <ParentOp/>
    </div>
  )
}

export default Home