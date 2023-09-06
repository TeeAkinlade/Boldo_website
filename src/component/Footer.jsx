import React from 'react'
import img from "../images/Logo.svg"

const Footer = () => {
    return (
        <footer className='px-8 py-12 md:px-16 md:py-16'>
            <div className="max-w-7xl m-auto">
                <div className="bg-secondaryBlue rounded-md text-center py-16 flex flex-col place-items-center">
                    <h1 className="text-2xl md:text-4xl leading-snug text-white max-w-lg ">An enterprise template to ramp up your company website</h1>
                    <div className="flex flex-col md:flex-row mt-4 gap-4">
                        <input type="email"
                            placeholder='Your email address'
                            className="bg-white py-2 px-8 rounded-full mt-5 md:mt-0 text-black outline-none"
                        />
                        <button className='bg-green font-semibold py-2 px-6 rounded-full'>Start now</button>
                    </div>
                </div>
                <div className="mt-32 mb-16 grid grid-cols-1 md:grid-cols-2">
                    <div className="">
                        <img src={img} alt="" className="h-7" />
                        <p className="text-primaryGray text-sm my-8 hover:underline hover:decoration-purple-800 decoration-2 max-w-xs">
                            Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
                        </p>
                        <p className="text-sm text-primaryGray hover:underline hover:decoration-purple-800 decoration-2">All rights reserved.</p>
                    </div>
                    <div className="grid grid-cols-3 cursor-pointer mt-10 md:mt-0">
                        <div className="text-sm">
                            <h3 className="font-semibold mb-8 hover:underline hover:decoration-purple-800 decoration-2">Landings</h3>
                            <p className="text-primaryGray hover:underline hover:decoration-purple-800 decoration-2">Home</p>
                            <p className="text-primaryGray hover:underline hover:decoration-purple-800 decoration-2 my-6">Products</p>
                            <p className="text-primaryGray hover:underline hover:decoration-purple-800 decoration-2">Services</p>
                        </div>
                        <div className="text-sm">
                            <h3 className="font-semibold mb-8 hover:underline hover:decoration-purple-800 decoration-2">Company</h3>
                            <p className="text-primaryGray hover:underline hover:decoration-purple-800 decoration-2">Home</p>
                            <p className="text-primaryGray hover:underline hover:decoration-purple-800 decoration-2 my-6">Careers</p>
                            <p className="text-primaryGray hover:underline hover:decoration-purple-800 decoration-2">Services</p>
                        </div>
                        <div className="text-sm hover:underline hover:decoration-purple-800 decoration-2">
                            <h3 className="font-semibold mb-8">Resources</h3>
                            <p className="text-primaryGray hover:underline hover:decoration-purple-800 decoration-2">Blog</p>
                            <p className="text-primaryGray hover:underline hover:decoration-purple-800 decoration-2 my-6">Products</p>
                            <p className="text-primaryGray hover:underline hover:decoration-purple-800 decoration-2">Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer