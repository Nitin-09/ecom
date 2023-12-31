import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

function CartAlert() {
  const item = useSelector((state) => state.cart.recentItem);
  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <div id="cartAlert" className="absolute z-50 hidden">
      <div className="bg-white p-5 fixed right-0 sm:right-2 md:right-6 lg:right-14 top-0 border-[8px] border-black border-double ">
        <div className="flex flex-col">
          <div className="flex justify-end">
            <button
              onClick={() =>
                document.getElementById("cartAlert")?.classList?.add("hidden")
              }
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="flex gap-4 items-center py-2">
            <i className="fa-solid fa-check"></i>
            <span>Item added to your cart</span>
          </div>

          <div className="flex gap-5">
            <div className="w-fit h-fit bg-black overflow-hidden rounded-xl">
              <Image className="hover:scale-105 transition duration-500 cursor-pointer object-cover h-[20vh]"
                src={item.img}
                width={150}
                height={100}
                alt="Tshirt"></Image>
            </div>
            <div className="flex flex-col">
              <span className="font-bold ">{item.name}</span>
              <span></span>{" "}
              <span className="text-lg">
                SIZE:{" "}
                <span className="text-lg text-gray-400 p-1">{item.size}</span>
              </span>
            </div>
          </div>
          <Link
            href="/cart"
            onClick={() =>
              document.getElementById("cartAlert")?.classList?.add("hidden")
            }
            className="bg-black text-center mt-5 p-2 text-white border border-white rounded-xl font-medium"
          >
            VIEW MY CART
          </Link>
          <button className="bg-black mt-5 p-2 text-white border border-white rounded-xl font-medium">
            CHECK OUT
          </button>
          <button className="text-base p-4 font-semibold underline underline-offset-2">
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartAlert;
