import React,{useEffect,useState} from "react";
import Link from "next/link";

function DashboardLayout() {
  const [activeKey, setactiveKey] = useState('Add Product')
  useEffect(() => {
    console.log(activeKey)
  }, [activeKey])
  return (
    <div className="md:w-[15%] w-full bg-black">
      <div className="px-2 py-4 fixed lg:h-screen h-16 md:h-20 w-full md:w-[15%] bg-black">
        <ul className="flex md:flex-col justify-center items-end md:items-center gap-3 sm:gap-5 w-full h-full md:h-fit">
          <Link href='/dashboard/addProduct'><li onClick={()=>setactiveKey("Add Product")} className={`cursor-pointer text-xs sm:text-sm text-center ${activeKey==='Add Product'?"text-blue-600":"text-white"}`}>
            Add Product
          </li></Link>
          <Link href='/dashboard/allProducts'><li onClick={()=>setactiveKey("All Products")} className={`cursor-pointer text-xs sm:text-sm text-center ${activeKey==='All Products'?"text-blue-600":"text-white"}`}>
            All Products
          </li></Link>
          <Link href='/dashboard/allOrders'><li onClick={()=>setactiveKey("All Orders")} className={`cursor-pointer text-xs sm:text-sm text-center ${activeKey==='All Orders'?"text-blue-600":"text-white"}`}>
            All Orders
          </li></Link>
        </ul>
      </div>
    </div>
  );
}

export default DashboardLayout;
