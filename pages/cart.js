import React from 'react'
import Image from 'next/image'
import Quantity from '@/Components/Quantity'
import FourProduct from '@/Components/FourProduct'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector
import { removeFromCart } from './State/action-creator/cartAction';
import Link from 'next/link'

function cart() {
    const cartItems = useSelector((state) => state.cart);
    const subtotal = useSelector((state) => state.cart.subtotal);
    const [subTotal, setsubTotal] = useState(0)
    const [cartItem, setCartItem] = useState([]);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (itemCode) => {
        dispatch(removeFromCart(itemCode));
    };

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCartItem(Object.values(storedCart));
        }
    }, [cartItems]);
    useEffect(() => {
        const storedSubTotal = JSON.parse(localStorage.getItem('subTotal'));
        if (storedSubTotal) {
            setsubTotal(storedSubTotal);
        }
        else {
            setsubTotal(0)
        }
    }, [subtotal])



    return (
        <div className='text-white min-h-screen bg-black'>
            <div className='bg-black pt-32 sm:pt-28 lg:pt-20 px-5 lg:px-20'>
                <div className='flex justify-between'>
                    <h1 className='text-white pt-2'>YOUR CART</h1>
                    <h1 className='text-white pt-2'>CONTINUE SHOPPING</h1>
                </div>
                {cartItem[0] ? cartItem.map((item) => (
                    <div key={item.itemCode} className='flex flex-col sm:flex-row justify-between items-center'>
                        <div className='mt-10 flex gap-5 justify-between sm:justify-start w-full'>
                            <div className='w-fit h-fit bg-black overflow-hidden rounded-xl'>
                                <Image className=' hover:scale-105 transition duration-500 cursor-pointer object-cover h-[25vh] ' src='/img2.jpeg' width={200} height={400} alt='Tshirt' />
                            </div>
                            <div className='flex flex-col items-start '>
                                <span className='text-white font-bold text-lg hover:underline underline-offset-4'>{item.name}</span>
                                <span className='text-lg text-gray-400 p-1'>&#8377; {item.price}</span>
                                <span className='text-lg'>SIZE: <span className='text-lg text-gray-400 p-1'>{item.size}</span></span>
                                <div className='flex justify-center items-center gap-2'>
                                    <Quantity update={true} item={item} ></Quantity>
                                    <button onClick={() => handleRemoveFromCart(item.itemCode)}><i className="fa-regular fa-trash-can"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full justify-end items-end' >
                            <span className='text-xl text-gray-200 p-1 whitespace-nowrap'>&#8377; {item.total}</span>
                        </div>
                    </div>
                )) :
                    <div className='flex gap-3 justify-center items-center'>
                        <p className='text-white py-5 text-center text-sm md:text-base'>ADD SOME ITEMS IN YOUR CART TO CHECKOUT.</p>
                        <Link className='text-blue-700' href='/product'>Continue Shopping</Link>
                    </div>}
                <hr className='mt-10 border border-gray-400' />
                <div className='flex flex-col items-center lg:items-end pt-5'>
                    <div className='flex gap-5 justify-center items-center'>
                        <span className='text-xl font-extrabold text-gray-400'>SUBTOTAL</span>
                        <span className='text-lg text-gray-400 p-1'>&#8377; {subTotal}</span>
                    </div>
                    <span>Tax included. Shipping calculated at checkout.</span>
                    <button className={`bg-white mt-5 p-2 w-full sm:w-[25vw] text-black rounded-xl font-medium ${subTotal ? "" : "cursor-not-allowed"}`}>CHECK OUT</button>
                </div>
            </div>
            <div className='pt-20 flex flex-col'>
                <FourProduct></FourProduct>
                <div className='flex justify-end w-full px-20'>
                    <a href='/product' className=" p-2.5 flex items-center mr-2 gap-3 group">
                        <span className='group-hover:underline text-white font-medium text-sm text-center group-hover:text-blue-700'>View All</span>
                        <svg className="w-5 h-5 text-white font-medium text-sm text-center group-hover:text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                        <span className="sr-only">Icon description</span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default cart