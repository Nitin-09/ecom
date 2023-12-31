import React from 'react'
import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react"
import Link from 'next/link'

function Drawer(props) {
    const session = useSession();
    console.log(session.status)
    return (
        <div id='drawer' className={`fixed top-0 z-20 w-full h-screen ${props.isDrawerVisible?"":"hidden"}`}>
            <div className='relative  flex h-full'>
                <div onClick={()=>{props.setisDrawerVisible(!props.isDrawerVisible)}} className='w-[50%] md:w-[60%] lg:w-[70%] backdrop-blur-2xl'></div>
                <div className='w-[50%] md:w-[40%] lg:w-[30%] bg-white px-5 lg:px-10 pt-32 flex flex-col gap-4 md:gap-10 select-none'>
                    <div className=' '>
                        <ul>
                            <li className='text-xl font-extrabold cursor-pointer'>NEW DROPS</li>
                            <Link href='/tshirt'><li className='text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>T-SHIRTS</li></Link>
                            <Link href='/hoodie'><li className='text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>HOODIES</li></Link>
                            <Link href='/underDevelopment'><li className='text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>SWEATSHIRTS</li></Link>
                            <Link href='/underDevelopment'><li className='text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>SHIRTS</li></Link>
                            <Link href='/underDevelopment'><li className='text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>JEANS</li></Link>
                        </ul>
                    </div>
                    <div className=''>
                        <ul>
                            <Link href='/underDevelopment'><li className='text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>SIZE CHART</li></Link>
                            <Link href='/underDevelopment'><li className='text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>FAQ</li></Link>
                        </ul>
                    </div>
                    <div className=''>
                        <ul>
                            <Link href='/about'><li className='text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>ABOUT</li></Link>
                            <Link href='/underDevelopment'><li className='text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>CAREERS</li></Link>
                            <Link href='/contact'><li className='text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>CONTACT</li></Link>
                        </ul>
                    </div>
                    <div className=''>
                        <ul>
                            {
                                session.status === 'authenticated' ? <button className='text-xl font-bold' onClick={() => signOut()}>LOG OUT</button> : <Link href='/login'><li className='text-xl font-bold'>MEMBER LOGIN</li></Link>
                            }
                        </ul>
                    </div>
                    <div className=''>
                        <ul className='flex flex-col md:flex-row md:justify-between'>
                            <Link href='https://www.instagram.com/whizz.in_?utm_source=ig_web_button_share_sheet&igsh=MmVlMjlkMTBhMg=='><li className='text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>INSTAGRAM</li></Link>
                            <Link href='/'><li className='text-gray-400 hover:text-black cursor-not-allowed hover:underline underline-offset-4'>LINKEDIN</li></Link>
                            <Link href='/'><li className='text-gray-400 hover:text-black cursor-not-allowed hover:underline underline-offset-4'>YOUTUBE</li></Link>
                        </ul>
                        <hr className='border-[1px] border-black mt-2' />
                        <ul className='flex flex-col md:flex-row md:justify-between mt-2'>
                            <Link href='/underDevelopment'><li className='text-xs text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>COOKIES</li></Link>
                            <Link href='/underDevelopment'><li className='text-xs text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>PRIVACY POLICY</li></Link>
                            <Link href='/underDevelopment'><li className='text-xs text-gray-400 hover:text-black cursor-pointer hover:underline underline-offset-4'>REFUND/RETURN</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer