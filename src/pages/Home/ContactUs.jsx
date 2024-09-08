import React from 'react'

const ContactUs = () => {
  return (
    <div className='py-[70px] px-[100px] bg-[#FBFBFB]'>
        <div className="">
            <h2 className='font-bold text-center text-[32px]'>Contact Us</h2>
            <p className=' text-[20px] text-center mt-[16px]'>Any questions or remarks? Just write us a message.</p>
        </div>

        <div className="">
            <form action="">
                <div className="flex flex-row gap-[24px] justify-center items-center mt-[40px]">
                <div className="flex flex-col gap-[8px] w-[496px] justify-center ">
                    <label htmlFor="" className=''>Full Name</label> 
                    <input type="text"
                    className='border-[1px] rounded-[6px] px-[20px] py-[12px] '
                     placeholder='Enter your name'/>
                </div>
                <div className="flex flex-col gap-[8px] justify-center  w-[496px]">
                    <label htmlFor="" className=''>Email</label> 
                    <input type="text"
                    className='border-[1px] rounded-[6px] px-[20px] py-[12px] '
                     placeholder='Enter your Email'/>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactUs