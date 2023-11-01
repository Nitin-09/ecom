import React from 'react'

const Footer = () => {
  return (
    <div className='w-full mt-auto'>
      <div className='flex flex-col sm:flex-row bg-black p-5 sm:px-10 justify-between w-full'>
        <ul className='flex sm:list-disc gap-6 md:gap-10 '>
          <li className='text-white font-thin text-sm select-none cursor-pointer hover:text-gray-400'>INSTAGRAM</li>
          <li className='text-white font-thin text-sm select-none cursor-pointer hover:text-gray-400'>YOUTUBE</li>
          <li className='text-white font-thin text-sm select-none cursor-pointer hover:text-gray-400'>LINKEDIN</li>
        </ul>
        <div className=''>
          <span className='text-white px-3'>@2023 Logo</span>
          <span className='text-white px-1'>&#8226;</span>
          <span className='text-white'>Developed by Nitin Gangwani using NEXT.JS</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
