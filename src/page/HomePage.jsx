import React from 'react'
import Hero from '../component/Hero'
import Services from '../component/Services'
import Connect from '../component/Connect'
import Comments from '../component/Comments'
import WorkConnect from '../component/WorkConnect'
import Blog from '../component/Blog'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <Connect />
            <Comments />
            <WorkConnect />
            <Blog />
        </>
    )
}

export default HomePage