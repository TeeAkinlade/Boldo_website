import React from 'react'
import pic1 from '../images/Blog.svg'
import pic2 from '../images/Ellipse-bing.svg'
import { blogPageData } from '../data/blogPageData'
import { Link } from 'react-router-dom'

const BlogPage = () => {
    return (
        <div className='px-0 py-0'>
            <div className="max-w-7xl m-auto px-8 sm:px-12 lg:px-16 pt-32 pb-16">
                <div className="">
                    <p className="mb-6 text-secondaryBlue text-center">Blog</p>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl text-secondaryBlue text-center">Thoughts and words</h1>
                    <div className="flex flex-col md:flex-row place-items-center gap-20 mt-12">
                        <img src={pic1} alt="" className='md:max-w-[50%]' />
                        <div className="">
                            <p className="text-secondaryBlue text-sm font-semibold">Category <span className='text-primaryGray ml-2'>November 22, 2021</span></p>
                            <h3 className="my-4 text-xl sm:text-3xl lg:text-4xl md:leading-snug">Pitch termsheet backing validation focus release.</h3>
                            <div className="flex gap-4 place-items-center">
                                <img src={pic2} alt="" />
                                <p className="">Chandler Bing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6">
                <div class="py-4 md:py-5 w-full border-b border-[#0A2640]"></div>
            </div>
            <div className="max-w-7xl m-auto px-8 py-12 sm:px-12 lg:px-16 md:pt-32 md:pb-16">
                <h1 className="text-4xl">Latest news</h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 my-8 gap-5 md:my-16">
                    {
                        blogPageData.map(({ id, photo, text, profilePic, name }) => (
                            <div className=" mb-10" key={id}>
                                <img src={photo} alt="" />
                                <p className="my-4 text-secondaryBlue text-sm font-semibold">Category <span className='text-primaryGray ml-2'>November 22, 2021</span></p>
                                <p className="text-sm sm:text-base font-normal max-w-[250px] my-4">{text}</p>
                                <div className="flex items-center gap-5 mt-6">
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

export default BlogPage