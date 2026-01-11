import React from 'react'
import { motion } from 'motion/react'

const About = () => {
    return (
        <motion.div 
        initial = {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 
            initial = {{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
            className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
            <motion.h2 
            initial = {{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
            className='text-center text-5xl font-Ovo bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-transparent'>About Me</motion.h2>
            <motion.div 
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div 
                initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
                className='flex-1'>
                    <p className='text-center mb-10 max-w-7xl font-Ovo'>Hi, I’m Vedant Budhabaware, a full stack web developer with a passion for building clean, scalable, and user-friendly web applications. I enjoy working across the stack—from designing intuitive front-end interfaces to developing reliable back-end systems. <br /><br />I work with technologies like [React.js, Next.js, Node.js, Express, MongoDB, SQL], but I’m always curious about learning new frameworks, tools and improving my workflow. For me, coding isn’t just about writing code—it’s about solving real problems and creating digital experiences that make people’s lives a little easier. <br /><br /></p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
