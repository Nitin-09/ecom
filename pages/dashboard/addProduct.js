import React, { useEffect, useState } from "react";
import { addProduct } from "@/State/reducer/productReducer";
import { useSelector, useDispatch } from "react-redux";

function AddProducts() {
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    detail: "",
    img: "",
    category: "tshirt",
    size: "",
    price: "",
    availableQty: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    setImage(e.target.files)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
      var file = image[0];
      data.append("file", file);
      data.append("upload_preset", "Nitin980");
      data.append("cloud_name", "defonzszt");
      await fetch("https://api.cloudinary.com/v1_1/dt5cpgzfn/image/upload", {
        method: "post",
        body: data,
      })
        .then(async (res) => await res.json())
        .then((data) => {
          console.log(data);
          setFormData({ ...formData, img: data.url });
        })
        .catch((err) => console.log(err));
    }
    try {
      const newProduct = {
        ...formData,
      };
      console.log(formData);

      // Dispatch the action to add the new product
      dispatch(addProduct(newProduct));
    } catch (error) {
      console.error("Error adding product:", error);
    }

  useEffect(() => {
    console.log(formData);
    console.log(image);
  }, [formData, image]);
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
            <div class="py-2 mx-auto px-4">
              <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Add a new product
              </h2>
              <form onSubmit={handleSubmit}>
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
                      required=""
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
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      for="category"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={handleChange}
                      id="category"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                      required=""
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
                      required=""
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
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Your details here"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="img"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Upload Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      name="img"
                      id="img"
                      onChange={(e) => handleImageUpload(e)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                      multiple
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  onChange={handleImageUpload}
                  class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Add product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
