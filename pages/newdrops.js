import React from 'react'
import Dropdown from '@/Components/Dropdown'
import Image from 'next/image'

function NewDrops() {
    const sizeChart = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    const availabilityChart = ['In Stock', 'Out Of Stock']
    return (
        <div className='text-white min-h-screen bg-black'>
            <div className='bg-black pt-20 px-10'>
                <h1 className='text-white pt-2'>T-SHIRTS</h1>
                <div className='flex'>
                    <div className='flex items-center'>
                        <span className='text-white'>Filter:</span>
                        <Dropdown id='size' data={sizeChart} />
                        <Dropdown id='availability' data={availabilityChart} />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 px-20'>
                <div className='flex flex-col justify-start group'>
                    <div className='w-fit h-fit bg-black overflow-hidden rounded-xl'>
                        <Image className=' hover:scale-105 transition duration-500 cursor-pointer object-cover h-[55vh] ' src='/img1.jpeg' width={500} height={500} alt='Tshirt' />
                    </div>
                    <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                    <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                </div>
                <div className='flex flex-col justify-start group'>
                    <div className='w-fit h-fit bg-black overflow-hidden rounded-xl'>
                        <Image className=' hover:scale-105 transition duration-500 cursor-pointer object-cover h-[55vh] ' src='/img1.jpeg' width={500} height={500} alt='Tshirt' />
                    </div>
                    <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                    <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                </div>
                <div className='flex flex-col justify-start group'>
                    <div className='w-fit h-fit bg-black overflow-hidden rounded-xl'>
                        <Image className=' hover:scale-105 transition duration-500 cursor-pointer object-cover h-[55vh] ' src='/img1.jpeg' width={500} height={500} alt='Tshirt' />
                    </div>
                    <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                    <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                </div>
                <div className='flex flex-col justify-start group'>
                    <div className='w-fit h-fit bg-black overflow-hidden rounded-xl'>
                        <Image className=' hover:scale-105 transition duration-500 cursor-pointer object-cover h-[55vh] ' src='/img1.jpeg' width={500} height={500} alt='Tshirt' />
                    </div>
                    <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                    <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                </div>
                <div className='flex flex-col justify-start group'>
                    <div className='w-fit h-fit bg-black overflow-hidden rounded-xl'>
                        <Image className=' hover:scale-105 transition duration-500 cursor-pointer object-cover h-[55vh] ' src='/img1.jpeg' width={500} height={500} alt='Tshirt' />
                    </div>
                    <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                    <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                </div>
                <div className='flex flex-col justify-start group'>
                    <div className='w-fit h-fit bg-black overflow-hidden rounded-xl'>
                        <Image className=' hover:scale-105 transition duration-500 cursor-pointer object-cover h-[55vh] ' src='/img1.jpeg' width={500} height={500} alt='Tshirt' />
                    </div>
                    <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                    <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                </div>
                <div className='flex flex-col justify-start group'>
                    <div className='w-fit h-fit bg-black overflow-hidden rounded-xl'>
                        <Image className=' hover:scale-105 transition duration-500 cursor-pointer object-cover h-[55vh] ' src='/img1.jpeg' width={500} height={500} alt='Tshirt' />
                    </div>
                    <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                    <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                </div>
                <div className='flex flex-col justify-start group'>
                    <div className='w-fit h-fit bg-black overflow-hidden rounded-xl'>
                        <Image className=' hover:scale-105 transition duration-500 cursor-pointer object-cover h-[55vh] ' src='/img1.jpeg' width={500} height={500} alt='Tshirt' />
                    </div>
                    <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                    <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                </div>
                <div className='flex flex-col justify-start group'>
                    <div className='w-fit h-fit bg-black overflow-hidden rounded-xl'>
                        <Image className=' hover:scale-105 transition duration-500 cursor-pointer object-cover h-[55vh] ' src='/img1.jpeg' width={500} height={500} alt='Tshirt' />
                    </div>
                    <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                    <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                </div>
                <div className='flex flex-col justify-start group'>
                    <div className='w-fit h-fit bg-black overflow-hidden rounded-xl'>
                        <Image className=' hover:scale-105 transition duration-500 cursor-pointer object-cover h-[55vh] ' src='/img1.jpeg' width={500} height={500} alt='Tshirt' />
                    </div>
                    <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>OLIVE STRIVE T-SHIRT</span>
                    <span className='text-sm text-gray-200 p-1'>&#8377; 4,995</span>
                </div>
            </div>
        </div>

    )
}

export default NewDrops