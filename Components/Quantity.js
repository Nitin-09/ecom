import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../pages/State/action-creator/cartAction';

function Quantity(props) {
    const [Quantity, setQuantity] = useState(1);
    const handleQuantity = (i) => {
        if (Quantity == 1 && i == -1) {
            document.getElementById('dec')?.classList?.add('disabled')
        }
        else {
            setQuantity(prev => prev + i)
            if (props.update) {
                dispatch(addToCart(props.item.itemCode, i, props.item.price ,props.item.name, props.item.size));
            }
        }
    }
    const dispatch = useDispatch();
    useEffect(() => {
        if (props?.item?.qty) {
            setQuantity(props?.item?.qty)
        }
    }, []);
    return (

        <div className='w-fit h-fit flex justify-center gap-5 p-2 px-4 rounded-2xl mt-2 text-base border border-white select-none'>
            <span id='dec' className='cursor-pointer' onClick={() => handleQuantity(-1)}>-</span>
            <span className=''>{Quantity}</span>
            <span className='cursor-pointer' onClick={() => handleQuantity(1)}>+</span>
        </div>
    )
}

export default Quantity