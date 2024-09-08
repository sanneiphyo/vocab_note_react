import React from 'react'
import mission from '../../assets/Images/mission.png'
import img1 from '../../assets/Images/image (1).png'
import img2 from '../../assets/Images/image (2).png'
import img3 from '../../assets/Images/image (3).png'

const Mission = () => {
  return (
    <div className=' py-[70px] px-[100px]'>
        <div className="flex gap-[136px] justify-center items-center">
            <div className=" w-[498px]">
                <h2 className=' text-[#2780D8] text-[32px] font-bold mb-[24px]'>Our Mission</h2>
                <p className=' text-[20px] text-[#333]'>Empowering learners to expand their vocabulary and language skills through innovative, user-friendly tools. We believe that mastering words can unlock opportunities, enhance communication, and build confidence in every aspect of life.</p>
            </div>
            <div className=" w-[606px] ">
                <img src={mission} alt="" className='w-full border rounded-md' />
            </div>

        </div>
        <div className="flex items-center justify-center gap-[175px] mt-[30px]">

            <div className="flex items-center gap-[20px]">
                <div className="flex flex-col gap-[20px] w-[228px]">
                    <img src={img1} alt=""  className='w-full '/>
                    <img src={img2} alt=""  className='w-full '/>
                </div>

                <div className="w-[299px]">
                    <img src={img3} alt="" className='w-full' />
                </div>
                
            </div>

            <div className="">
                    <div className=" w-[498px]">
                        <h2 className=' text-[#2780D8] text-[32px] font-bold mb-[24px]'>Our Vision</h2>
                        <p className=' text-[20px] text-[#333]'>Empowering learners to expand their vocabulary and language skills through innovative, user-friendly tools. We believe that mastering words can unlock opportunities, enhance communication, and build confidence in every aspect of life.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Mission