import React from 'react'
import frame1 from '../images/Group 216 (1).svg'
import icon from '../images/Group 210.svg';
import star from '../images/star.svg'
import star1 from '../images/star (1).svg'
import sun from '../images/sun.svg';
import frame2 from '../images/Group 281.svg'
import { Link } from 'react-router-dom'
const Connect = () => {
    return (
        <div className="px-8 py-12 md:px-16 md:py-16">
            <div className='max-w-7xl m-auto'>
                <div className="">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-20">
                        <div className="">
                            <img src={frame1} alt="" className='md:w-screen lg:w-[70%]' />
                        </div>
                        <div className=" max-w-lg">
                            <h1 className="text-lg md:text-4xl leading-tight">
                                We connect our customers with the best, and help them keep up-and stay open.
                            </h1>
                            <ul className="my-10">
                                <li className='flex text-sm gap-2'><img src={icon} alt="" className='h-5' />We connect our customers with the best.</li>
                                <li className='flex text-sm gap-2 mt-4'><img src={icon} alt="" className='h-5' />Advisor success customer launch party.</li>
                                <li className='flex text-sm gap-2 mt-4'><img src={icon} alt="" className='h-5' />Business-to-consumer long tail.</li>
                            </ul>
                            <Link to="#"
                                className='bg-secondaryBlue text-white px-4 md:px-8 py-2 hover:border-2 hover:border-secondaryBlue hover:bg-white hover:text-secondaryBlue rounded-full'
                            >
                                Start now
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-16 sm:mt-32 sm:gap-20 md:gap-40">
                        <div className="max-w-lg">
                            <h1 className="text-lg md:text-4xl leading-tight">
                                We connect our customers with the best, and help them keep up-and stay open.
                            </h1>
                            <ul className="my-10">
                                <li className="flex items-center bg-secondaryBlue rounded py-2 px-2 text-white text-sm gap-2 mt-4">
                                    <img src={star} alt="" className="" />We connect our customers with the best.
                                </li>
                                <li className="flex items-center text-sm gap-2 mt-8 px-2 py-2 shadow-md">
                                    <img src={star1} alt="" className="" />Advisor success customer launch party.
                                </li>
                                <li className="flex items-center text-sm gap-2 mt-8 px-2 py-2 shadow-md">
                                    <img src={sun} alt="" className="" />Business-to-consumer long tail.
                                </li>
                            </ul>
                        </div>
                        <div >
                            <img src={frame2} alt="" className=" md:w-screen lg:max-w-[70%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connect