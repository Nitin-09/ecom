import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Navbar = (props) => {
    return (
        <div className='relative'>
            <div className='fixed z-40 w-full'>
                <div className='flex flex-col w-full lg:block'>
                    <div className='bg-black flex p-5 px-10 justify-between lg:justify-center border-b-2 border-white items-center  w-full'>
                        <ul className='lg:flex gap-5 w-[40%] hidden'>
                            <Link href='/newdrops'><li className='text-white hover:text-gray-600 select-none cursor-pointer'>NEW DROPS</li></Link>
                            <Link href='/tshirt'><li className='text-white hover:text-gray-600 select-none cursor-pointer'>T-SHIRT</li></Link>
                            <Link href='/hoodie'>  <li className='text-white hover:text-gray-600 select-none cursor-pointer'>HOODIES</li></Link>
                            <Link href='/underDevelopment'> <li className='text-white hover:text-gray-600 select-none cursor-pointer'>SWEATSHIRTS</li></Link>
                        </ul>
                        <div className='w-[20%] flex justify-center'>
                            <Link href='/'><Image src='/Whizz.jpg' width={100} height={100}></Image></Link>
                        </div>
                        <div className='w-[40%] flex justify-end gap-4 sm:gap-10'>
                            <Link href={'/searchProduct'}><i className="cursor-pointer text-white text-xl fa-solid fa-magnifying-glass"></i></Link>
                            <Link href={'/cart'}><i className="cursor-pointer text-white text-xl fa-solid fa-cart-shopping"></i></Link>
                            <i onClick={()=>{props.setisDrawerVisible(!props.isDrawerVisible)}} className={`cursor-pointer text-white text-xl ${props.isDrawerVisible?'fa-solid fa-x':'fa-solid fa-bars'} `}></i>

                        </div>
                    </div>
                    <div className='bg-black flex lg:hidden justify-center items-center px-5 py-2 border-b-2 border-white text-xs w-full sm:text-base'>
                        <ul className='flex gap-5'>
                            <Link href='/newdrops'><li className='text-white hover:text-gray-600 select-none cursor-pointer'>NEW DROPS</li></Link>
                            <Link href='/tshirt'><li className='text-white hover:text-gray-600 select-none cursor-pointer'>T-SHIRTS</li></Link>
                            <Link href='/hoodie'>  <li className='text-white hover:text-gray-600 select-none cursor-pointer'>HOODIES</li></Link>
                            <Link href='/underDevelopment'> <li className='text-white hover:text-gray-600 select-none cursor-pointer'>SWEATSHIRTS</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
