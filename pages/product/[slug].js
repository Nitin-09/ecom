import { useRouter } from 'next/router'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import FourProduct from '@/Components/FourProduct'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantityInCart } from '@/State/reducer/cartReducer';
import { fetchProductBySlug } from '@/State/reducer/productReducer'

export default function Page() {
    const router = useRouter()
    const { slug } = router.query
    const sizeChart = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    const dispatch = useDispatch();
    const [activeSize, seActiveSize] = useState("")
    const addToCartHandler = (itemCode, qty,img, price, name, size) => {
        if (activeSize != "") {
            dispatch(addToCart({ 'itemCode': itemCode, 'qty': qty, 'img':img,'price': price, 'name': name, 'size': size }));
            document.getElementById('cartAlert')?.classList?.remove('hidden')
        }
        else {
            document.getElementById('sizeAlert')?.classList?.remove('hidden')
        }
    };
    const selectedProduct = useSelector((state) => state.products.selectedProduct);

    const quantity = useSelector((state) => state.cart.quantity) || 1
    const handleQuantity = (i) => {
        if (quantity <= 1 && i == -1) {
            document.getElementById('dec')?.classList?.add('disabled')
        }
        else {
            dispatch(updateQuantityInCart({ "qty": quantity, "i": i }))
        }
    }
    useEffect(() => {
        if (slug) {
            dispatch(fetchProductBySlug({ query: slug }));
        }
    }, [slug]);
    useEffect(() => {
    }, [selectedProduct, quantity])

    return (
        <div className='text-white min-h-screen bg-black'>
            <div className='bg-black pt-36 sm:pt-32 lg:pt-28 px-5 lg:px-20 flex flex-col lg:flex-row'>
                <div id='div' className='basis-3/4 2xl:basis-5/6 flex lg:grid lg:grid-rows-2 gap-5 overflow-scroll lg:overflow-hidden'>
                    <Image className='rounded-xl lg:row-span-2 lg:col-span-2' src={selectedProduct?.product?.img} width={2000} height={1500} alt='Product'></Image>
                    {/* <Image className='rounded-xl' src='/img4.jpeg' width={1000} height={1000} alt=''></Image>
                    <Image className='rounded-xl' src='/img5.jpeg' width={1000} height={1000} alt=''></Image>
                    <Image className='rounded-xl' src='/img6.jpeg' width={1000} height={1000} alt=''></Image>
                    <Image className='rounded-xl' src='/img7.jpeg' width={1000} height={1000} alt=''></Image>
                    <Image className='rounded-xl' src='/img3.jpeg' width={1000} height={1000} alt=''></Image> */}

                </div>
                <div className='basis-2/5 relative'>
                    <div className='flex flex-col lg:px-10 sticky top-0'>
                        <div className='flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start w-full'>
                            <span className='text-xl font-bold'>{selectedProduct?.product?.title}</span>
                            <span className='text-sm text-gray-200 py-5'>&#8377; {selectedProduct?.product?.price}</span>
                        </div>
                        <div>
                            <div className='flex flex-wrap gap-5 '>
                                {sizeChart.map((item) => {
                                    if (selectedProduct?.product?.size?.split(',')?.indexOf(item) > 0)
                                        return <button key={item} onClick={() => { seActiveSize(item); document.getElementById('sizeAlert')?.classList?.add('hidden'), dispatch(updateQuantityInCart({ "qty": 1, "i": 0 })) }} className={`shadow-sm shadow-gray-800 ${activeSize === item ? 'border' : ""} border-white text-xs sm:text-base text-white rounded-lg w-fit h-fit p-5`}>{item}</button>
                                    else
                                        return <button key={item} className={`shadow-sm shadow-gray-800 ${activeSize === item ? 'border' : ""} border-white text-xs sm:text-base text-white bg-gray-900 rounded-lg w-fit h-fit p-5 cursor-not-allowed`}>{item}</button>
                                })}
                            </div>
                            <span id='sizeAlert' className='hidden text-red-500 pt-2'>Please select product size.</span>
                        </div>

                        <div className='pt-5'>
                            <span className='text-white'>Quantity</span>
                            <div className='w-fit h-fit flex justify-center gap-5 p-2 px-4 rounded-2xl mt-2 text-base border border-white select-none'>
                                <span id='dec' className='cursor-pointer ' onClick={() => handleQuantity(-1)}>-</span>
                                <span className=''>{quantity}</span>
                                <span className='cursor-pointer' onClick={() => handleQuantity(1)}>+</span>
                            </div>
                        </div>
                        <button onClick={() => addToCartHandler(selectedProduct?.product?._id, quantity,selectedProduct?.product?.img, selectedProduct?.product?.price, selectedProduct?.product?.title, activeSize)} className='bg-white mt-5 p-2 text-black rounded-xl font-medium'>ADD TO CART</button>
                        <button className='bg-black mt-5 p-2 text-white border border-white rounded-xl font-medium'>BUY NOW</button>

                        <div className='pt-10'>
                            <div className='flex justify-between'>
                                <h1>Description</h1>
                                <button onClick={() => document.getElementById('desc')?.classList?.toggle('hidden')}>+</button>
                            </div>
                            <hr className='border border-white' />
                            <p id='desc' className='hidden'>{selectedProduct?.product?.desc}</p>
                        </div>
                        <div className='pt-10'>
                            <div className='flex justify-between'>
                                <h1>Detail</h1>
                                <button onClick={() => document.getElementById('detail')?.classList?.toggle('hidden')}>+</button>
                            </div>
                            <hr className='border border-white' />
                            <ul id='detail' className='list-decimal hidden px-5'>
                                {selectedProduct?.product?.detail.split('\n').map((point, index) => {
                                    return <li key={index} className=''>{point}</li>
                                })}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <FourProduct heading="YOU MAY ALSO LIKE"></FourProduct>
        </div>
    )
}