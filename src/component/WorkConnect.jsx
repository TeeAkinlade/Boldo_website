import React from 'react'
import photo from '../images/Rectangle 127.svg'
import icon from '../images/Group 2100.svg'

const WorkConnect = () => {
    return (
        <div className='px-8 py-10 md:px-16 md:py-16'>
            <div className="max-w-7xl m-auto">
                <img src={photo} alt=""
                    className='rounded-xl w-full'
                />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between my-12">
                <div className="">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl hover:underline decoration-blue-500 decoration-2 md:max-w-md lg:max-w-lg mb-8 md:mb-0 ">We connect our customers with the best, and help them keep up-and stay open.</h1>
                </div>
                <div className="">
                    <ul className='underline underline-offset-8 decoration-[#c4c4c4]'>
                        <li className='flex items-center justify-between text-sm'>We connect our customers with the best?<img src={icon} alt=""
                            className='h-4 ml-4'
                        /></li>
                        <li className='flex items-center justify-between text-sm mt-8'>Android research & development rockstar? <img src={icon} alt=""
                            className='h-4 ml-4'
                        /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkConnect