import React from 'react'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'

const Contact = () => {
  return (
    <div className='h-screen items-center bg-cover h-5% w-100  bg-no-repeat' style={{ backgroundImage: "url('/contact.jpeg')" }}>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-5xl font-bold  mb-4 text-black">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto text-black text-xl font-semibold">
              Enter your Name and E-mai address and we will connect you with the right person.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-black text-xl font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-xl text-black font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-xl text-black  font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-5 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-[#477468] border-0 py-2 px-8 focus:outline-none hover:bg-[#3a9c75] rounded text-lg">
                  Send
                </button>
              </div>
              <div>
                <a className="text-orange-700 text-xl font-semibold ">nasreenan47@gmail.com</a>
                <br />
                <div className="inline-flex">
                  <a className="text-gray-500">
                    <FaLinkedin className='text-3xl text-blue-600' />
                  </a>
                  <br />
                  <FaGithub className='text-3xl text-yellow-400 ml-3' />
                  <br />
                  <IoMail className='text-3xl text-red-800 ml-3' />
                  <br />
                  <FaDiscord className='text-3xl text-purple-800 ml-3' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact