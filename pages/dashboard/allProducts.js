import React, { useEffect } from "react";
import { fetchProducts } from "@/State/reducer/productReducer";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import DashboardLayout from "@/Components/DashboardLayout";
// ... (your existing imports)

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleUpdate = (productId) => {
    // Add logic for updating the product
    console.log(`Update product with ID: ${productId}`);
  };

  const handleDelete = (productId) => {
    // Add logic for deleting the product
    console.log(`Delete product with ID: ${productId}`);
  };

  return (
    <div className="w-full pt-24 sm:pt-32 lg:pt-24 flex flex-col md:flex-row min-h-screen">
      <DashboardLayout></DashboardLayout>
      <div className="pt-24 sm:pt-32 md:pt-2 w-full md:w-[80%]">
        <div className="py-2 mx-auto px-4">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            All Products
          </h2>
          <div>
            {products?.products?.map((item) => {
              return (
                <div key={item.id} className="flex flex-col rounded-lg sm:flex-row items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Image
                      width={200}
                      height={200}
                      className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                      src={item.img[0]}
                      alt=""
                    ></Image>
                    <div className="flex w-full flex-col px-4 py-4">
                      <span className="font-semibold ">{item.title}</span>
                      <span className="float-right">{item.size}</span>
                      <p className="text-lg font-bold">&#8377; {item.price}</p>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <button
                      onClick={() => handleUpdate(item.id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
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

export default Products;
