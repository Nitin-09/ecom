import React, { useEffect, useState } from "react";
import { addProduct } from "@/State/reducer/productReducer";
import { useSelector, useDispatch } from "react-redux";
import { CldUploadWidget } from "next-cloudinary";
import { toast, ToastContainer } from "react-toastify";
import DashboardLayout from "@/Components/DashboardLayout";
import "react-toastify/dist/ReactToastify.css";

function AddProducts() {
  
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    detail: "",
    img: [], // Updated to an array
    category: "tshirt",
    size: "",
    price: "",
    availableQty: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const handleUploadSuccess = (result) => {
    // Log the URL to the console
    console.log("Image URL:", result.info.url);
    setFormData((prevData) => ({
      ...prevData,
      img: [...prevData.img, result.info.url],
    }));
  };

  const handleSubmitProductData = async (e) => {
    try {
      const newProduct = {
        ...formData,
      };

      const response = await dispatch(addProduct(newProduct));

      if (response && response.error) {
        // If there is an error in the response
        console.error("Error adding product:", response.error);
        toast.error("Error adding product. Please try again.");
      } else {
        // If the response is successful
        toast.success("Product added successfully!");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product. Please try again.");
    }
  };

  useEffect(() => {
  }, [formData]);
  return (
    <div className="w-full pt-24 sm:pt-32 lg:pt-24 flex flex-col md:flex-row min-h-screen">
      <DashboardLayout></DashboardLayout>
      <div className="pt-24 sm:pt-32 md:pt-2 w-full md:w-[80%]">
        <div class="py-2 mx-auto px-4">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <div>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required="true"
                  onChange={handleChange}
                />
              </div>
              <div class="w-full">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required="true"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={handleCategoryChange}
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="tshirt">T-SHIRT</option>
                  <option value="hoodies">HOODIES</option>
                </select>
              </div>
              <div>
                <label
                  for="size"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Size
                </label>
                <input
                  type="text"
                  name="size"
                  id="size"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write comma Seperated sizes XXL,S,M,L"
                  required="true"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="availableQty"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Available Quantity
                </label>
                <input
                  type="number"
                  name="availableQty"
                  id="availableQty"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="5"
                  required="true"
                  onChange={handleChange}
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="desc"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="desc"
                  name="desc"
                  rows="5"
                  required="true"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="detail"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Details
                </label>
                <textarea
                  id="detail"
                  name="detail"
                  rows="5"
                  required="true"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your details here"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <CldUploadWidget
                  uploadPreset="Nitin980"
                  onSuccess={handleUploadSuccess}
                >
                  {({ open }) => {
                    return (
                      <button
                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800"
                        onClick={() => open()}
                      >
                        Upload an Image
                      </button>
                    );
                  }}
                </CldUploadWidget>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmitProductData}
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Add product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
