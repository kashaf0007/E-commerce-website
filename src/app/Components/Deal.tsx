import React from 'react'

const Deal = () => {
  return (
    <div className='mb-[50px] mt-[50px] px-8 lg:px-20'>
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#477468]">
          Flash Deals
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#477468] inline-flex" />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center'>

        <div className="relative w-full lg:w-[90%] h-[25rem] p-6 mx-auto my-4 group">
          <div className="absolute inset-0 bg-cover bg-center  opacity-80 background1" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-extrabold text-black">Upto 60% Off!</h1>
                <h3 className="mb-5 text-black font-bold">
                  Sale upto 60% off!To make our custumers feel special. Limited time offer!
                </h3>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-3xl font-extrabold text-center p-6 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 rounded-b-xl shadow-lg group-hover:shadow-2xl scale-110 group-hover:scale-100">
            <p className="text-shadow-md">$999.99</p>
          </div>
        </div>


        <div className="relative w-full lg:w-[90%] h-[25rem] p-6 mx-auto my-4 group">
          <div className="absolute inset-0 bg-cover bg-center background2 opacity-70" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl font-bold text-black">30% off!</h1>
                <h3 className="mb-5 text-black font-bold">
                  Enjoy upto 30% off on your favorite things. The time to save here!
                </h3>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-3xl font-extrabold text-center p-6 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500 rounded-b-xl shadow-lg group-hover:shadow-2xl scale-110 group-hover:scale-100">
            <p className="text-shadow-md">$843.99</p>
          </div>
        </div>

      </div>
    </div>
  );
}


export default Deal
