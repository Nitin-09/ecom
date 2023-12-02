import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
export default function Home() {
  const session=useSession();
  console.log(session)
  return (
    <div>
      <Head>
        <title>Tshirt</title>
        <meta name='description' content=''></meta>
        <link rel='icon' href='/avicon.ico'></link>
      </Head>
      <div className='bg-black lg:min-h-screen pt-32 sm:pt-28 lg:pt-20 px-10 w-full'>
        <h1 className='text-white pt-2'>T-SHIRTS</h1>
        <div className='flex flex-col lg:flex-row gap-7 justify-center'>
          <div className='w-full'>
            <Image src='/img1.jpeg' width={900} height={600} alt='Tshirt' />
          </div>
          <div className='w-full'>
            <Image src='/img2.jpeg' width={900} height={600} alt='Tshirt' />
          </div>
        </div>
        <div className='flex justify-end w-full'>
          <a href='/product' className=" p-2.5 flex items-center mr-2 gap-3 group">
            <span className='group-hover:underline text-white font-medium text-sm text-center group-hover:text-blue-700'>View All</span>
            <svg className="w-5 h-5 text-white font-medium text-xs sm:text-sm text-center group-hover:text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
            <span className="sr-only">Icon description</span>
          </a>
        </div>
      </div>
    </div>
  )
}
