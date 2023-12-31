import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "@/State/reducer/productReducer";
import { useSelector, useDispatch } from "react-redux";

function FourProduct(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // Slice the products array to only include the first 4 items
  const limitedProducts = products?.products?.slice(0, 4);

  return (
    <div className="w-full px-5 lg:px-20 mt-10 pb-2">
      <h1 className="text-2xl text-white">{props.heading}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {limitedProducts?.map((item) => (
          <Link key={item._id} href={`/product/${item.slug}`}>
            <div className="flex flex-col justify-start group">
              <div className="w-full bg-black overflow-hidden rounded-xl">
                <Image
                  className="hover:scale-105 transition duration-500 cursor-pointer object-cover"
                  src={item.img}
                  width={700}
                  height={700}
                  alt="Tshirt"
                ></Image>
              </div>
              <span className="text-sm text-gray-200 p-1 group-hover:underline underline-offset-4 w-fit">
                {item.title}
              </span>
              <span className="text-sm text-gray-200 p-1">&#8377; {item.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FourProduct;
