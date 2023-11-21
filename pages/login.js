import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { signIn } from "next-auth/react"

function login() {
    const [User, setUser] = useState({})
    const handleChange = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value })
    }
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const handleLogin=(e) => {
        e.preventDefault();
         signIn('credentials',{
            username:'nitingangwani982000@gmail.com',//User.email,
            password:'Nitin@098',//User.password,
            redirect:true,
            callbackUrl:"http://localhost:3000/"
         })
    }
    
    return (
        <div className='text-white min-h-screen bg-black  w-full'>
            <div className='bg-black pt-32 sm:pt-28 lg:pt-20 px-5 md:px-20'>
                <div className='flex  flex-col md:flex-row  justify-center items-center'>
                    <div className='basis-1/2'>
                        <Image src="/img9.jpeg" width='2000' height='300' alt="" />
                    </div>
                    <div className='basis-1/2 md:p-10 pb-5 md:pb-0 w-full'>
                        <form method='Post' action="" className='flex flex-col justify-center gap-10'>
                            <div>
                                <h1 className='text-2xl'>WELCOME BACK TO LOGO</h1>
                                <h4 className='text-sm text-gray-400 '>Enter your details below to Login</h4>
                            </div>
                            <div className='flex flex-col justify-center items-start group'>
                                <label className='text-lg font-bold group-focus-within:text-blue-400 cursor-pointer' htmlFor="email">Email</label>
                                <input className='w-full rounded-lg p-2 outline-none text-black' type="email" id='email' name='email' onChange={(e) => { handleChange(e) }} />
                            </div>
                            <div className='flex flex-col justify-center items-start group'>
                                <label className='text-lg font-bold group-focus-within:text-blue-400 cursor-pointer' htmlFor="password">Password</label>
                                <div className='w-full rounded-lg flex bg-white justify-center items-center'>
                                    <input className='w-[88%] xl:w-[95%] rounded-lg p-2 outline-none text-black' type={isPasswordVisible ? 'text' : 'password'} id='password' name='password' onChange={(e) => { handleChange(e) }} />
                                    <button onClick={(e) => { e.preventDefault(); setIsPasswordVisible(true) }} className={`${isPasswordVisible ? 'hidden' : 'block'} text-black w-[12%] xl:w-[5%]`}><i className=" fa-solid fa-eye"></i></button>
                                    <button onClick={(e) => { e.preventDefault(); setIsPasswordVisible(false) }} className={`${isPasswordVisible ? 'block' : 'hidden'} text-black  w-[12%] xl:w-[5%]`}><i className="fa-solid fa-eye-slash"></i></button>
                                </div>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <a href="" className='text-blue-500'>Forget Password</a>
                                <button className='w-full'>
                                    <input type="submit" value='Login' onClick={handleLogin} className='bg-[#e66940] font-bold text-black p-2 rounded-md w-full cursor-pointer' />
                                </button>
                                <h4 className='text-sm text-gray-400 '>Don't have an account ? <a href="/signup" className='text-blue-500 py-2'>Sign Up </a></h4>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login