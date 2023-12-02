import React from 'react'

function Drawer(props) {
    return (
        <div id='drawer' className={`fixed top-0 z-20 w-full h-screen ${props.isDrawerVisible?"":"hidden"}`}>
            <div className='relative  flex h-full'>
                <div className='w-[70%] backdrop-blur-2xl'></div>
                <div className='w-[30%] bg-white px-20 pt-32 flex flex-col gap-10'>
                    <div className=' '>
                        <ul>
                            <li className='text-xl font-extrabold'>NEW DROPS</li>
                            <li>T-SHIRTS</li>
                            <li>HOODIES</li>
                            <li>SWEATSHIRTS</li>
                            <li>SHIRTS</li>
                            <li>JEANS</li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul>
                            <li>SIZE CHART</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul>
                            <li>ABOUT</li>
                            <li>CAREERS</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul>
                            <li className='text-xl font-bold'>MEMBER LOGIN</li>
                        </ul>
                    </div>
                    <div className=''>
                        <ul className='flex justify-between'>
                            <li>INSTAGRAM</li>
                            <li>LINKEDIN</li>
                            <li>YOUTUBE</li>
                        </ul>
                        <hr className='border-[1px] border-black mt-2'/>
                        <ul className='flex justify-between mt-2'>
                            <li className='text-xs'>COOKIES</li>
                            <li className='text-xs'>PRIVACY POLICY</li>
                            <li className='text-xs'>REFUND/RETURN</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer