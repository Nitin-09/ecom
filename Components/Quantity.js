import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantityInCart } from '../pages/State/reducer/cartReducer';

function Quantity(props) {
    const dispatch = useDispatch()
   
    const quantity = useSelector((state) => state.cart.quantity)
    const handleQuantity = (i) => {
        if (quantity <= 1 && i == -1) {
            document.getElementById('dec')?.classList?.add('disabled')
        }
        else {
            dispatch(updateQuantityInCart(qty,i))
            if (props.update) {
                dispatch(addToCart({ 'itemCode': props.item.itemCode, 'qty': i, 'price': props.item.price, 'name': props.item.name, 'size': props.item.size }));
            }
        }
    }
    useEffect(() => {
    }, [quantity])
    return (

        <div className='w-fit h-fit flex justify-center gap-5 p-2 px-4 rounded-2xl mt-2 text-base border border-white select-none'>
            <span id='dec' className='cursor-pointer ' onClick={() => handleQuantity(-1)}>-</span>
            <span className=''>{quantity}</span>
            <span className='cursor-pointer' onClick={() => handleQuantity(1)}>+</span>
        </div>
    )
}

export default Quantity