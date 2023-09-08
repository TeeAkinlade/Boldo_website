import React from 'react'
import ellipse from '../images/Ellipse 9.svg'
import HeroPhoto from '../images/HeroGraphics.svg'
import heroPhoto2 from '../images/Group 249.svg'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='px-0 py-0'>
            <div className=" relative">
                <div className="absolute top-[-140px] md:top-[-170px] right-0 -z-20">
                    <img src={ellipse} alt="circle-shape" />
                </div>
                <div className="max-w-7xl m-auto px-8 md:px-12 lg:px-16 pt-32 pb-16">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                        <div className="max-w-xl">
                            <h1 className="text-3xl font-medium md:text-3xl lg:text-4xl leading-normal">Save time by building  fast with Boldo Template </h1>
                            <p className="text-primaryGray mt-6 mb-8 lg:mb-14">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                            <div className=" flex mb-10 md:mb-0 gap-5">
                                <Link to="#"
                                    className='bg-secondaryBlue text-white px-4 md:px-8 py-2 hover:border-2 hover:border-secondaryBlue hover:bg-white hover:text-secondaryBlue rounded-full'
                                >
                                    Buy template
                                </Link>
                                <Link to="#"
                                    className='bg-white text-secondaryBlue px-6 md:px-8 py-2 border-2 border-secondaryBlue hover:bg-secondaryBlue hover:text-white rounded-full'
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <img src={HeroPhoto} alt="hero-photo"
                                className='w-full'
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 md:mt-16">
                        <img src={heroPhoto2} alt="logos" className="sm:w-[80%] w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero