import { assets } from '@/assets/assets'
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    };
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, [])


    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                {theme === "light" && (
                    <Image
                        src={assets.header_bg_color}
                        alt=""
                        className="w-full"
                        priority
                    />
                )}
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/40 bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top">
                    {theme === "light"
                ? <Image src={assets.logo} alt='Logo' className='w-32 cursor-pointer mr-14 ' />
                : <Image src={assets.logo_dark} alt='Logo' className='w-32 cursor-pointer mr-14 ' />}
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:bg-white/40"} `}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#skills">Skills</a></li>
                    <li><a className='font-Ovo' href="#work">My Work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        { theme === "light" ?
                            <Image src={assets.moon_icon} alt='' className='w-6 ' />
                            :
                            <Image src={assets.sun_icon} alt='' className='w-6 ' />
                        }
                    </button>
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={theme === "light" ? assets.arrow_icon : assets.arrow_icon_dark} alt='' className='w-3' /></a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        { theme === "light" ?
                            <Image src={assets.menu_black} alt='' className='w-6' />
                            :
                            <Image src={assets.menu_white} alt='' className='w-6' />
                        }
                    </button>
                </div>

                <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-64 z-50 h-screen transition duration-500 ${theme === "light" ? "bg-rose-50 text-black" : "bg-black text-rose-50"}`}>

                    <div className='absolute top-6 right-6' onClick={closeMenu}>
                        {theme === "light"
                ? <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                : <Image src={assets.close_white} alt='' className='w-5 cursor-pointer' />}
                    </div>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#skills">Skills</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar
