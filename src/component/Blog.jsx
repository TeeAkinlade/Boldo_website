import React from 'react'
import { blogData } from '../data/blogData'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div className='px-8 py-12 md:px-20 md:py-16'>
            <div className="max-w-7xl m-auto">
                <div className="flex flex-col justify-center items-center ">
                    <p className="text-primaryGray text-center mb-6">Our Blog</p>
                    <h1 className="text-2xl md:text-4xl leading-normal text-center max-w-2xl">Value proposition accelerator product management venture</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-16 lg:place-items-center">
                    {
                        blogData.map(({ id, photo, text, profilePic, name }) => (
                            <div className="" key={id}>
                                <img src={photo} alt="" />
                                <p className="my-4 text-secondaryBlue text-sm font-semibold">Category <span className='text-primaryGray ml-2'>November 22, 2021</span></p>
                                <p className="text-base font-normal max-w-[250px] my-4">{text}</p>
                                <div className="flex items-center gap-5 mt-4">
                                    <img src={profilePic} alt="" />
                                    <p className=" text-sm">{name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link to="#"
                        className='bg-white text-secondaryBlue px-6 md:px-10 py-2 border-2 border-secondaryBlue hover:bg-secondaryBlue hover:text-white rounded-full'
                    >
                        Load more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Blog