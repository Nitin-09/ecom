import { useRouter } from 'next/router'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import FourProduct from '@/Components/FourProduct'
import Quantity from '@/Components/Quantity'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../State/action-creator/cartAction';

export default function Page() {
    const router = useRouter()
    const { slug } = router.query
    const sizeChart = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    const [subTotal, setSubTotal] = useState(0);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const [activeSize, seActiveSize] = useState("")
    const addToCartHandler = () => {
        if (activeSize != "") {
            dispatch(addToCart(5, 1, 4995, "TREASURE T-SHIRT", "XXL"));
            document.getElementById('cartAlert')?.classList?.remove('hidden')
        }
        else {
            document.getElementById('sizeAlert')?.classList?.remove('hidden')
        }
    };

    return (
        <div className='text-white min-h-screen bg-black'>
            <div className='bg-black pt-36 sm:pt-32 lg:pt-24 px-5 lg:px-20 flex flex-col lg:flex-row'>
                <div id='div' className='basis-3/4 2xl:basis-5/6 flex lg:grid lg:grid-rows-2 gap-5 overflow-scroll lg:overflow-hidden'>
                    <Image className='rounded-xl lg:row-span-2 lg:col-span-2' src='/img2.jpeg' width={2000} height={1500}></Image>
                    <Image className='rounded-xl' src='/img4.jpeg' width={1000} height={1000}></Image>
                    <Image className='rounded-xl' src='/img5.jpeg' width={1000} height={1000}></Image>
                    <Image className='rounded-xl' src='/img6.jpeg' width={1000} height={1000}></Image>
                    <Image className='rounded-xl' src='/img7.jpeg' width={1000} height={1000}></Image>
                    <Image className='rounded-xl' src='/img3.jpeg' width={1000} height={1000}></Image>

                </div>
                <div className='basis-2/5 relative'>
                    <div className='flex flex-col lg:px-10 sticky top-0'>
                        <div className='flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start w-full'>
                            <span className='text-xl font-bold'>TREASURE T-SHIRT</span>
                            <span className='text-sm text-gray-200 py-5'>&#8377; 4,995</span>
                        </div>
                        <div>
                            <div className='flex flex-wrap gap-5 '>
                                {sizeChart.map((item) => {
                                    return <button key={item} onClick={() => { seActiveSize(item);document.getElementById('sizeAlert')?.classList?.add('hidden') }} className={`shadow-sm shadow-gray-800 ${activeSize===item?'border':""} border-white text-xs sm:text-base text-white rounded-lg w-fit h-fit p-5`}>{item}</button>
                                })}
                            </div>
                            <span id='sizeAlert' className='hidden text-red-500 pt-2'>Please select product size.</span>
                        </div>

                        <div className='pt-5'>
                            <span className='text-white'>Quantity</span>
                            <Quantity></Quantity>
                        </div>
                        <button onClick={() => addToCartHandler(slug, 1, 4995, "TREASURE T-SHIRT", "XXL")} className='bg-white mt-5 p-2 text-black rounded-xl font-medium'>ADD TO CART</button>
                        <button className='bg-black mt-5 p-2 text-white border border-white rounded-xl font-medium'>BUY NOW</button>

                        <div className='pt-10'>
                            <div className='flex justify-between'>
                                <h1>Description</h1>
                                <button onClick={() => document.getElementById('desc')?.classList?.toggle('hidden')}>+</button>
                            </div>
                            <hr className='border border-white' />
                            <p id='desc' className='hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic sequi suscipit animi porro culpa in. Asperiores possimus velit quam distinctio iusto rem saepe fugiat explicabo cumque molestiae, repellendus molestias.</p>
                        </div>
                        <div className='pt-10'>
                            <div className='flex justify-between'>
                                <h1>Detail</h1>
                                <button onClick={() => document.getElementById('detail')?.classList?.toggle('hidden')}>+</button>
                            </div>
                            <hr className='border border-white' />
                            <p id='detail' className='hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis hic sequi suscipit animi porro culpa in. Asperiores possimus velit quam distinctio iusto rem saepe fugiat explicabo cumque molestiae, repellendus molestias.</p>
                        </div>
                    </div>
                </div>
            </div>
            <FourProduct heading="YOU MAY ALSO LIKE"></FourProduct>
        </div>
    )
}