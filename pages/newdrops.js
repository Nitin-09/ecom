import React, { useEffect, useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { fetchProducts } from '@/State/reducer/productReducer';
import { useSelector, useDispatch } from 'react-redux';

function newDrops() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const sizeChart = ['S', 'M', 'L', 'XL'];
  const availabilityChart = ['In Stock', 'Out Of Stock'];

  // Filter products created within the last 4 months
  const currentDate = new Date();
  const fourMonthsAgo = new Date();
  fourMonthsAgo.setMonth(currentDate.getMonth() - 4);

  const recentProducts = products?.products?.filter((item) => {
    return new Date(item.createdAt) >= fourMonthsAgo;
  });

  return (
    <div className='text-white min-h-screen bg-black w-full'>
      <div className='bg-black pt-32 sm:pt-28 lg:pt-24 px-5 md:px-20'>
        <h1 className='text-white py-2'>Recent Products</h1>
        <div className='flex'>
          <div className='flex items-center'>
            <span className='text-white'>Filter:</span>
            <Dropdown id='size' data={sizeChart} />
            <Dropdown id='availability' data={availabilityChart} />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:px-20 px-5'>
        {recentProducts && recentProducts.length > 0 && (recentProducts.map((item) => (
          <Link key={item._id} href={`product/${item.slug}`}>
            <div className='flex flex-col justify-start group'>
              <div className='w-full bg-black overflow-hidden rounded-xl'>
                <Image
                  className='hover:scale-105 transition duration-500 cursor-pointer object-cover'
                  src={item.img[0]}
                  width={700}
                  height={700}
                  alt='Product'
                />
              </div>
              <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>
                {item.title}
              </span>
              <span className='text-sm text-gray-200 p-1'>&#8377; {item.price}</span>
            </div>
          </Link>
        )))}
      </div>
    </div>
  );
}

export default newDrops;
