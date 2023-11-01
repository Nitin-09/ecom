import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function FourProduct(props) {
    return (
        <div className='w-full px-5 lg:px-20 mt-10 pb-2'>
            <h1 className='text-2xl text-white'>{props.heading}</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
                <Link href='/product/product1'>
                    <div className='flex flex-col justify-start group'>
                        <div className='w-full bg-black overflow-hidden rounded-xl'>
                            <Image className='hover:scale-105 transition duration-500 cursor-pointer object-cover' src='/img2.jpeg' width={700} height={700} alt='Tshirt' />
                        </div>
                        <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                        <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                    </div>
                </Link>
                <Link href='/product/product1'>
                    <div className='flex flex-col justify-start group'>
                        <div className='w-full bg-black overflow-hidden rounded-xl'>
                            <Image className='hover:scale-105 transition duration-500 cursor-pointer object-cover' src='/img2.jpeg' width={700} height={700} alt='Tshirt' />
                        </div>
                        <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                        <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                    </div>
                </Link>
                <Link href='/product/product1'>
                    <div className='flex flex-col justify-start group'>
                        <div className='w-full bg-black overflow-hidden rounded-xl'>
                            <Image className='hover:scale-105 transition duration-500 cursor-pointer object-cover' src='/img2.jpeg' width={700} height={700} alt='Tshirt' />
                        </div>
                        <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                        <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                    </div>
                </Link>
                <Link href='/product/product1'>
                    <div className='flex flex-col justify-start group'>
                        <div className='w-full bg-black overflow-hidden rounded-xl'>
                            <Image className='hover:scale-105 transition duration-500 cursor-pointer object-cover' src='/img2.jpeg' width={700} height={700} alt='Tshirt' />
                        </div>
                        <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                        <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default FourProduct