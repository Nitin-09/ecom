import React, { useEffect } from "react";
import { fetchProducts } from "@/State/reducer/productReducer";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

function products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="min-h-screen w-full">
      <div className="pt-32 sm:pt-28 lg:pt-20 flex">
        <div className="w-[20%] bg-black">
          <div className="h-screen pt-32 sm:pt-28 lg:pt-20 px-10">
            <ul className="flex text-white text-lg flex-col gap-4">
              <li>Products</li>
              <li>Orders</li>
              <li>Users</li>
              <li>Add Product</li>
            </ul>
          </div>
        </div>
        <div className="w-[80%] pt-32 sm:pt-28 lg:pt-20">
          <div>
            {products?.products?.map((item) => {
              return (
                <div className="flex flex-col rounded-lg sm:flex-row">
                  <Image
                    className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  ></Image>
                  <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-semibold ">{item.title}</span>
                    <span className="float-right">{item.size}</span>
                    <p className="text-lg font-bold">{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default products;
