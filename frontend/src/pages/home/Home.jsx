import React from 'react'
import Featured from '../../components/featured/Featured'
import Section1 from '../../components/sections/section 1/section1'
import Section2 from '../../components/sections/section 2/Section2'
import Section3 from '../../components/sections/section 3/Section3'
import Section4 from '../../components/sections/section 4/Section4'
import Trustedby from '../../components/trustedby/Trustedby'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <Trustedby />
      <Section1 />
      {/* <Section2 />
      <Section3 />
      <Section4 /> */}
    </div>
  )
}

export default Home