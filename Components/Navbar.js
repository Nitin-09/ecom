import Link from 'next/link'
import React from 'react'
import { signOut } from "next-auth/react"

const Navbar = (props) => {
    // const handleDrawer = () => {
    //     if (props.isDrawerVisible) {
    //         props.setisDrawerVisible(false)
    //     }
    //     else {
    //         props.setisDrawerVisible(true)
    //     }
    // }
    return (
        <div className='relative'>
            <div className='fixed z-40 w-full'>
                <div className='flex flex-col w-full lg:block'>
                    <div className='bg-black flex p-5 px-10 justify-between lg:justify-center border-b-2 border-white items-center  w-full'>
                        <ul className='lg:flex gap-5 w-[40%] hidden'>
                            <Link href='/newdrops'><li className='text-white hover:text-gray-600 select-none cursor-pointer'>NEW DROPS</li></Link>
                            <Link href='/tops'><li className='text-white hover:text-gray-600 select-none cursor-pointer'>TOPS</li></Link>
                            <Link href='/bottoms'>  <li className='text-white hover:text-gray-600 select-none cursor-pointer'>BOTTOMS</li></Link>
                            <Link href='/accessories'> <li className='text-white hover:text-gray-600 select-none cursor-pointer'>ACCESSORIES</li></Link>
                        </ul>
                        <div className='w-[20%] flex justify-center'>
                            <Link href='/'><span className='text-white text-3xl select-none cursor-pointer '>LOGO</span></Link>
                        </div>
                        <div className='w-[40%] flex justify-end gap-4 sm:gap-10'>
                            <i className="text-white text-xl fa-solid fa-magnifying-glass"></i>
                            <i className="text-white text-xl fa-solid fa-cart-shopping"></i>
                            <i onClick={handleDrawer()} className="cursor-pointer text-white text-xl fa-solid fa-bars"></i>
                            {/* <button className='text-white' onClick={() => signOut()}>LOG OUT</button> */}
                        </div>
                    </div>
                    <div className='bg-black flex lg:hidden justify-center items-center px-5 py-2 border-b-2 border-white text-xs w-full sm:text-base'>
                        <ul className='flex gap-5'>
                            <Link href='/newdrops'><li className='text-white hover:text-gray-600 select-none cursor-pointer'>NEW DROPS</li></Link>
                            <Link href='/tops'><li className='text-white hover:text-gray-600 select-none cursor-pointer'>TOPS</li></Link>
                            <Link href='/bottoms'>  <li className='text-white hover:text-gray-600 select-none cursor-pointer'>BOTTOMS</li></Link>
                            <Link href='/accessories'> <li className='text-white hover:text-gray-600 select-none cursor-pointer'>ACCESSORIES</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
