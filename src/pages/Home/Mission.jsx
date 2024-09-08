import React from 'react'
import mission from '../../assets/Images/mission.png'

const Mission = () => {
  return (
    <div className=' py-[70px] px-[100px]'>
        <div className="flex gap-[136px]">
            <div className="">
                <h2>Our Mission</h2>
                <p>Empowering learners to expand their vocabulary and language skills through innovative, user-friendly tools. We believe that mastering words can unlock opportunities, enhance communication, and build confidence in every aspect of life.</p>
            </div>
            <div className="">
                <img src={mission} alt="" />
            </div>

        </div>
        <div className=""></div>
    </div>
  )
}

export default Mission