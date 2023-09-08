import React from 'react';
import { storyData } from '../data/storyData';

const About = () => {
    return (
        <div className='bg-green px-0 py-0'>
            <div className="max-w-7xl m-auto px-8 sm:px-12 lg:px-16 pt-32 pb-16">
                <div className="">
                    <p className="mb-6 text-secondaryBlue">About</p>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-9 justify-between">
                        <h1 className="text-3xl  sm:text-[46px] sm:leading-none md:text-4xl max-w-lg">We love to make great things, things that matter.</h1>
                        <p className="text-sm max-w-sm text-secondaryBlue ">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl m-auto px-8 py-14 md:px-12 lg:px-16 md:pt-32 md:pb-16 bg-white">
                <div className="text-center flex flex-col place-items-center ">
                    <p className="text-sm text-secondaryBlue">Our numbers</p>
                    <h1 className=" text-2xl sm:text-3xl md:text-4xl text-secondaryBlue max-w-2xl mt-4 leading-snug sm:leading-snug">Handshake infographic mass market crowdfunding iteration.</h1>
                </div>
                <div className="flex flex-col place-items-center sm:flex-row sm:justify-between m-10">
                    <div className="">
                        <h1 className="text-secondaryBlue text-4xl sm:text-6xl md:text-7xl mb-4">120m</h1>
                        <p className="text-secondaryBlue">Cool feature title</p>
                    </div>
                    <div className="my-10 md:my-0">
                        <h1 className="text-secondaryBlue text-4xl sm:text-6xl md:text-7xl mb-4">10.000</h1>
                        <p className="text-secondaryBlue">Cool feature title</p>
                    </div>
                    <div className="">
                        <h1 className="text-secondaryBlue text-4xl sm:text-6xl md:text-7xl mb-4">240</h1>
                        <p className="text-secondaryBlue">Cool feature title</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl m-auto px-8 py-14 sm:px-12 lg:px-16 md:py-28 bg-secondaryBlue">
                <div className="flex flex-col place-items-center">
                    <div className="text-white max-w-2xl">
                        <p className="">Our story</p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl my-8 leading-snug sm:leading-snug ">Handshake infographic mass market crowdfunding iteration.</h1>
                        <p className="text-sm text-[#f1f1f1] max-w-[36rem]">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl m-auto px-8 py-14 sm:px-12 lg:px-16 md:py-28 bg-white">
                <div className="flex flex-col place-items-center">
                    <div className="max-w-2xl">
                        <p className="text-primaryGray">Our team</p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl my-6">The people behind the work</h1>
                        <p className="text-primaryGray text-base">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-12">
                        {
                            storyData.map(({ id, photo, name, position, photo1, name2, position2 }) => (
                                <div className="">
                                    <div className="" key={id}>
                                        <img src={photo} alt="" />
                                        <p className="my-4 font-semibold">{name}</p>
                                        <p className="text-primaryGray text-sm">{position}</p>
                                        <div className="flex place-items-center sm:flex-col md:flex-row gap-4" key={id}>
                                            <img src={photo1} alt="" />
                                            <div className="">
                                                <p className="mb-4 font-semibold">{name2}</p>
                                                <p className="text-primaryGray text-sm">{position2}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="max-w-7xl m-auto px-8 py-14 sm:px-12 lg:px-16 md:py-28 bg-secondaryBlue">
                <div className="flex flex-col place-items-center text-white">
                    <p className="text-sm">Our Blog</p>
                    <h1 className="text-2xl md:text-4xl max-w-2xl my-6 text-center">Value proposition accelerator product management venture</h1>
                    <div class=" py-2 md:py-3 w-full border-b border-white"></div>
                </div>
                <div className="lg:px-32">
                    <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-20 mt-10">
                        <h3 className="text-2xl whitespace-nowrap md:text-3xl text-white">We are <span className="text-green">commited.</span> </h3>
                        <p className="text-sm text-[#f1f1f1] max-w-sm">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-20 mt-10">
                        <h3 className="text-2xl whitespace-nowrap md:text-3xl text-white">We are <span className="text-green">responsible.</span> </h3>
                        <p className="text-sm text-[#f1f1f1] max-w-sm">Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP backing supply chain.  </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-20 mt-10">
                        <h3 className="text-2xl whitespace-nowrap md:text-3xl text-white">We aim for<span className="text-green"> progress.</span> </h3>
                        <p className="text-sm text-[#f1f1f1] max-w-sm">Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus.  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About