import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Project</h4>
            <h2 className='text-center text-5xl font-Ovo bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-transparent'>My latest work</h2>
            <p className='text-center text-lg font-Ovo'>Here are some of the projects I've worked on recently.</p>
            <div className='grid grid-cols-3 my-10 gap-5'>
                {workData.map((project, index) => (
                    <div key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg border border-gray-300 shadow-xl/20 relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}}>
                        <div className='bg-white text-black w-10/12 rounded-md absolute border border-gray-700 bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                            <h2 className='font-bold'>{project.title}</h2>
                        </div>
                        <div>
                            <Image src={assets.send_icon} alt='send icon' className='w-5' />
                        </div>
                        </div>
                        
                    </div>
                ))}
            </div>
            <br />
            <div className='flex sm:flex-row items-center'>
            <motion.a 
            initial = {{y: 30, opacity: 0}}
            whileInView = {{y: 0, opacity: 1}}
            transition = {{duration: 0.6, delay: 1}}
            href="https://github.com/VedantBudhabaware?tab=repositories" download className='px-10 py-3 border border-white rounded-full flex items-center gap-2 bg-black text-white mx-auto'>More Project</motion.a>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Work
