import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import { useSelector, useDispatch } from 'react-redux';
function checkout() {

    const cartItems = useSelector((state) => state.cart);
    const subtotal = useSelector((state) => state.cart.subtotal);
    const [subTotal, setsubTotal] = useState(0)
    const [cartItem, setCartItem] = useState([]);


    const handlePayNow = async (e) => {
        e.preventDefault()
        let oid = Math.floor(Math.random() * Date.now());
        const data = { cartItems, subtotal, oid, email: "email" }
        try {
            const a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            let txnRes = await a.json()
            let TXN_TOKEN = txnRes.txnToken
            var config = {
                "root": "",
                "flow": "DEFAULT",
                "data": {
                    "orderId": oid,
                    "token": TXN_TOKEN,
                    "tokenType": "TXN_TOKEN",
                    "amount": subtotal
                },
                "handler": {
                    "notifyMerchant": function (eventName, data) {
                        // console.log("notifyMerchant handler function called");
                        // console.log("eventName => ", eventName);
                        // console.log("data => ", data);
                    }
                }
            };
            window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                window.Paytm.CheckoutJS.invoke();
            }).catch(function onError(error) {
                // console.log("error => ", error);
            });
        }
        catch (error) {
            // console.log(error.message)

        }
    }
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
        <div className='text-white min-h-screen bg-black  w-full'>
            <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" /></Head>
            <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} crossorigin="anonymous"></Script>
            <div className='bg-black pt-32 sm:pt-28 lg:pt-20 px-5 md:px-20 flex justify-between'>
                <form className='w-1/2 grid grid-cols-3 gap-4' action="">
                    <div className='flex justify-between items-center py-3 col-span-3'>
                        <h1 className='text-2xl'>Contact</h1>
                        <h4 className='text-sm text-gray-400 '>Already have an account <Link className='underline' href="/login">Login</Link></h4>
                    </div>
                    <div className='flex flex-col justify-center items-start group col-span-3'>
                        <label className='text-lg font-bold group-focus-within:text-blue-400 cursor-pointer' htmlFor="email">Email</label>
                        <input className='w-full rounded-lg p-2 outline-none text-white border-white border-2 bg-black' type="email" id='email' name='email' />
                    </div>
                    <div className='py-3 col-span-3'>
                        <h1 className='text-2xl'>Delivery</h1>
                    </div>
                    <div className='flex flex-col justify-center items-start group col-span-3'>
                        <label className='text-lg font-bold group-focus-within:text-blue-400 cursor-pointer' htmlFor="name">Name</label>
                        <input className='w-full rounded-lg p-2 outline-none text-white border-white border-2 bg-black' type="text" id='name' name='name' />
                    </div>
                    <div className='flex flex-col justify-center items-start group col-span-3'>
                        <label className='text-lg font-bold group-focus-within:text-blue-400 cursor-pointer' htmlFor="address">Address</label>
                        <input className='w-full rounded-lg p-2 outline-none text-white border-white border-2 bg-black' type="text" id='address' name='address' />
                    </div>
                    <div className='flex flex-col justify-center items-start group'>
                        <label className='text-lg font-bold group-focus-within:text-blue-400 cursor-pointer' htmlFor="city">City</label>
                        <input className='w-full rounded-lg p-2 outline-none text-white border-white border-2 bg-black' type="text" id='city' name='city' />
                    </div>
                    <div className='flex flex-col justify-center items-start group'>
                        <label className='text-lg font-bold group-focus-within:text-blue-400 cursor-pointer' htmlFor="state">State</label>
                        <input className='w-full rounded-lg p-2 outline-none text-white border-white border-2 bg-black' type="text" id='state' name='state' />
                    </div>
                    <div className='flex flex-col justify-center items-start group'>
                        <label className='text-lg font-bold group-focus-within:text-blue-400 cursor-pointer' htmlFor="pincode">Pincode</label>
                        <input className='w-full rounded-lg p-2 outline-none text-white border-white border-2 bg-black' type="number" id='pincode' name='pincode' />
                    </div>
                    <div className='flex flex-col justify-center items-start group col-span-3'>
                        <label className='text-lg font-bold group-focus-within:text-blue-400 cursor-pointer' htmlFor="cnumber">Phone Number</label>
                        <input className='w-full rounded-lg p-2 outline-none text-white border-white border-2 bg-black' type="number" id='cnumber' name='cnumber' />
                    </div>
                    <div className='flex gap-4 justify-start items-center group col-span-3'>
                        <input className='' type="checkbox" id='save' name='save' />
                        <label className='text-lg font-bold group-focus-within:text-blue-400 cursor-pointer' htmlFor="save">Save this address for next time.</label>
                    </div>
                    <button className='w-full'>
                        <input type="submit" value='Pay Now' onClick={(e) => handlePayNow(e)} className='bg-[#e66940] font-bold text-black p-2 rounded-md w-full cursor-pointer' />
                    </button>
                </form>
                <div className='h-screen my-20 border-white border-[1px]'></div>
                <div>
                    <div className="px-4 pt-8">
                        <p className="text-xl font-medium">Order Summary</p>
                        <p>Check your items. And select a suitable shipping method.</p>
                        <div className="mt-8 space-y-3 rounded-lg border px-2 py-4 sm:px-6">
                            {cartItem?.map((item)=>{
                                return <div className="flex flex-col rounded-lg sm:flex-row">
                                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <div className="flex w-full flex-col px-4 py-4">
                                    <span className="font-semibold">{item.name}</span>
                                    <span className="float-right">{item.size}</span>
                                    <p className="text-lg font-bold">{item.price}</p>
                                </div>
                            </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default checkout