import React from 'react'
import { serviceData } from '../data/serviceData'
import { BiRightArrowAlt } from 'react-icons/bi'

const Services = () => {
    return (
        <div className='bg-secondaryBlue px-8 py-12 sm:px-12 md:py-16'>
            <div className="max-w-7xl m-auto">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center max-w-2xl">
                        <p className="text-primaryGray text-xl">Our services</p>
                        <h1 className="text-white text-2xl md:text-4xl leading-normal md:leading-normal mt-4 mb-12">Handshake infographic mass market crowdfunding iteration.</h1>
                    </div>
                </div>
                <div className="grid grid-col sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white place-items-center">
                    {
                        serviceData.map(({ id, picture, title, text }) => (
                            <div className="" key={id}>
                                <img src={picture} alt="photo"
                                    className='mb-8'
                                />
                                <h3 className="text-lg mt-4">{title}</h3>
                                <div className="flex place-items-end gap-1 underline underline-offset-8">
                                    <p className="text-sm font-semibold mt-4">{text}</p>
                                    <BiRightArrowAlt
                                        className="text-white h-xl"
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Services