import React from 'react'
import { AchievementsData } from './AchievementsData'
import AchievementsComponent from './AchievementsComponent'


const Achievements = () => {
    return (

        <div className='bg-[#131619] p-4 mb-5 max-w-sm rounded-3xl'>
            <div className="heading pl-4 text-3xl font-bold py-4">
                <span className='pb-2 text-white'>Achievements</span>
            </div>
            {AchievementsData.map((item, index) => (
                <div className={((index +1)!== AchievementsData.length) ? " border-b border-b-[#35373E]" : ""}>
                    <AchievementsComponent item={...item} />
                </div>
            ))}
        </div>

    )
}

export default Achievements
