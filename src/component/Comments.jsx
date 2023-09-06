import React from 'react'
import { commentData } from '../data/commentData'
import slider from '../images/Group 234.svg'

const Comments = () => {
    return (
        <div className='bg-secondaryBlue px-8 py-12 md:px-16 md:py-16'>
            <div className="max-w-7xl m-auto">
                <div className=" flex flex-col md:flex-row justify-between items-end">
                    <div className="md:max-w-lg">
                        <h1 className="text-white text-4xl">An enterprise template to ramp up your company website</h1>
                    </div>
                    <img src={slider} alt="" className='h-9' />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-16">
                    {
                        commentData.map(({ id, photo, comments, name, position }) => (
                            <div className=" bg-white text-secondaryBlue rounded px-12 py-6" key={id}>
                                <p className="mb-8">{comments}</p>
                                <img src={photo} alt="" />
                                <p className="font-semibold text-sm">{name}</p>
                                <p className="text-xs">{position}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Comments