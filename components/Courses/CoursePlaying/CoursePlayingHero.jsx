import React from 'react'
import CPVideo from './CPVideo'
import CPHeroTabs from './CPHeroTabs'

const CoursePlayingHero = () => {
  return (
    <div className="flex gap-5 justify-around flex-wrap">
      <CPVideo/>
      <CPHeroTabs/>
    </div>
  )
}

export default CoursePlayingHero
