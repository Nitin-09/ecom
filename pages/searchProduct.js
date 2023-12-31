import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "@/State/reducer/productReducer";
import { useSelector, useDispatch } from "react-redux";

// Assuming your imports are here

function SearchProduct() {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products.data);
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    // Check if productsData and productsData.products are defined
    if (productsData && productsData.products) {
      // Filter products based on the search input
      const filtered = productsData.products.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchInput, productsData]);

  const sizeChart = ['S', 'M', 'L', 'XL'];
  const availabilityChart = ['In Stock', 'Out Of Stock'];

  return (
    <div className='text-white min-h-screen bg-black w-full'>
      <div className='bg-black pt-32 sm:pt-28 lg:pt-24 px-5 md:px-20'>
        <div className='w-full mb-5 md:my-4'>
          <div className='border-white border-2 pl-2 h-12 flex justify-center md:w-[70%]'>
            <input
              type='text'
              placeholder='Search....'
              className='w-[85%] md:w-[95%] outline-none bg-black text-white'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className='w-[15%] md:w-[5%] bg-white text-blue-700 text-xl hover:bg-blue-700 hover:text-white'>
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </div>
        </div>
      </div>

      {searchInput === '' ? ( // Show a message if the search input is empty
        <div className='text-center text-gray-200'>Search for something to proceed.</div>
      ) : (
        filteredProducts.length > 0 && (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:px-20 px-5'>
            {filteredProducts.map((item) => (
              <Link key={item._id} href={`product/${item.slug}`}>
                <div className='flex flex-col justify-start group'>
                  <div className='w-full bg-black overflow-hidden rounded-xl'>
                    <Image
                      className='hover:scale-105 transition duration-500 cursor-pointer object-cover'
                      src={item.img}
                      width={700}
                      height={700}
                      alt='Tshirt'
                    />
                  </div>
                  <span className='text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit'>
                    {item.title}
                  </span>
                  <span className='text-sm text-gray-200 p-1'>&#8377; {item.price}</span>
                </div>
              </Link>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default SearchProduct;
