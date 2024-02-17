import React from 'react'
import ActivityLineChart from "./ActivityLineChart"
import ActivityPieChart from "./ActivityPieChart"
const LearningActivity = () => {
  return (
    <div className="flex flex-wrap justify-around md:flex-nowrap gap-4 sm:gap-5 font-">
      <ActivityLineChart/>
      <ActivityPieChart/>
    </div>
  )
}

export default LearningActivity
