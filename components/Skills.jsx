import Image from 'next/image'
import { skillsData0, skillsData1, skillsData2 } from '@/assets/assets'
import React from 'react'
import { motion } from 'motion/react'

const Skills = () => {
    return (
        <motion.div 
        initial = {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        id='skills' className='items-center w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 
            initial = {{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
            className='text-center mb-2 text-lg font-Ovo'>What I offer</motion.h4>

            <motion.h2 
            initial = {{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
            className='text-center text-5xl font-Ovo bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-transparent'>My Skills</motion.h2>
            <br />
                <motion.ul 
                initial = {{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 0.3}}
                className='flex items-center justify-center gap-6 sm:gap-5'>
                    {skillsData0.map((skill, index) => (
                        <motion.li 
                        whileHover={{scale: 1.05}}
                        className='flex items-center justify-center mt-4 w-24 sm:w-26 aspect-square border border-gray-400 rounded-lg hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-xl/20 ' key={index}><Image src={skill} alt='Skill' className='w-16 sm:w-18' /></motion.li>
                    ))}
                </motion.ul>
                <motion.ul 
                initial = {{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 0.3}}
                className='flex items-center justify-center gap-6 sm:gap-5'>
                    {skillsData1.map((skill, index) => (
                        <motion.li 
                        whileHover={{scale: 1.05}}
                        className='flex items-center justify-center mt-4 w-24 sm:w-26 aspect-square border border-gray-400 rounded-lg hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-xl/20 ' key={index}><Image src={skill} alt='Skill' className='w-16 sm:w-18' /></motion.li>
                    ))}
                </motion.ul>
                <motion.ul 
                initial = {{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 0.3}}
                className='flex items-center justify-center gap-6 sm:gap-5'>
                    {skillsData2.map((skill, index) => (
                        <motion.li 
                        whileHover={{scale: 1.05}}
                        className='flex items-center justify-center mt-4 w-24 sm:w-26 aspect-square border border-gray-400 rounded-lg hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-xl/20 ' key={index}><Image src={skill} alt='Skill' className='w-16 sm:w-18' /></motion.li>
                    ))}
                </motion.ul>
                <br />
                <br />
                <br />
            </motion.div>
    )
}

export default Skills
