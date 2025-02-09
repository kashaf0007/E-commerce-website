
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";

export default async function slug({ params }: { params: { slug: string } }) {
  const data = await fetch(`https://fakestoreapi.com/products/${params.slug}`);
  const res = await data.json();
  console.log(res);
  return (
    <section className="text-gray-800 body-font overflow-hidden bg-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:w-3/5 mx-auto flex flex-wrap shadow-lg rounded-lg overflow-hidden">
          <Image
            alt="ecommerce"
            className="lg:w-2/5 w-full object-cover object-center"
            src={res.image}
            width={250}
            height={50}
          />
          <div className="lg:w-3/5 w-full bg-gray-100 p-6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{res.title}</h1>
            <div className="flex items-center space-x-1 mt-2 ">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <span className="text-gray-500 ml-2 text-sm">4 Reviews</span>
                <div className="flex mt-6 items-center  mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 mr-1 bg-black rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 mr-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 mr-1 bg-orange-800 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 mr-1 bg-pink-600 rounded-full w-6 h-6 focus:outline-none" />
          </div>
          
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <div className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <MdArrowDropDown />
              </div>
            </div>
          </div>
        
            <p className="leading-relaxed text-gray-700 mb-4 mt-8 text-sm">{res.description}</p>

            <div className="flex items-center justify-between">
              <span className="title-font font-bold text-2xl text-gray-900">${res.price}</span>
              <button className="bg-green-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-green-700 transition duration-300">
                Add to Cart
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}
