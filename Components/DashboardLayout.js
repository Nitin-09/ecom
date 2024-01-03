import React,{useEffect} from "react";
import Link from "next/link";

function DashboardLayout(props) {
  useEffect(() => {
    console.log(props.activeKey)
  }, [props.activeKey])
  return (
    <div className="md:w-[15%] w-full bg-black">
      <div className=" px-2 py-4 fixed md:h-screen h-14 md:w-[15%]">
        <ul className="flex md:flex-col justify-center items-end md:items-center gap-3 sm:gap-5 w-full">
          <Link href='/dashboard/addProduct'><li onClick={()=>props.setactiveKey("Add Product")} className={`cursor-pointer text-xs sm:text-sm text-center ${props.activeKey==='Add Product'?"text-blue-600":"text-white"}`}>
            Add Product
          </li></Link>
          <Link href='/dashboard/allProducts'><li onClick={()=>props.setactiveKey("All Products")} className={`cursor-pointer text-xs sm:text-sm text-center ${props.activeKey==='All Products'?"text-blue-600":"text-white"}`}>
            All Products
          </li></Link>
          <Link href='/dashboard/allOrders'><li onClick={()=>props.setactiveKey("All Orders")} className={`cursor-pointer text-xs sm:text-sm text-center ${props.activeKey==='All Orders'?"text-blue-600":"text-white"}`}>
            All Orders
          </li></Link>
        </ul>
      </div>
    </div>
  );
}

export default DashboardLayout;
