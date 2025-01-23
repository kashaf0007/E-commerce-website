
import React from 'react'
const Hero = () => {
  return (
    <div
    className="hero h-[80vh] items-center bg-cover h-5% w-100  bg-no-repeat custom-img">
   <div className="  md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <section className="max-w-frame px-4 ">

        <h2 className= "mt-32 text-5xl lg:text-[50px] lg:leading-[50px] mb-5 lg:mb-8 pl-8 font-extrabold">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h2>
        
        <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px] font-semibold pl-8">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <div>
          <button className="w-56 ml-6 md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14  py-4 rounded-full ">
            Shop Now
          </button>
        </div>
        </section>
  </div>
   </div>
  )
}

export default Hero