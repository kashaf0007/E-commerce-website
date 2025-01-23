import React from 'react'

const About = () => {
  return (
    <div className='h-screen items-center bg-cover h-5% w-100  bg-no-repeat'style={{backgroundImage:"url('/about.jpeg')"}}>
   <section className="text-gray-600 body-font">

<div className="text-black body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col text-center w-full ">
      <h1 className="sm:text-3xl text-4xl font-extrabold title-font mb-2 text-blue-900">
      ABOUT ME
      </h1>
      <h3 className='text-black font-bold text-2xl'>Hi I am Kashaf Aman</h3>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-blue-900">
   
     I am a web developer passionate. My tools includes HTML, CSS, JAVASCRIPT, TYPESCRIPT and am keen on learning new technologies.
      I am student of Intermediate in Medical Science and also the student of Governor House IT Initiative. Now bring into the field of web development
      I am passionate about learning new technologies and constantly improving my skills.
      </p>
    </div>
  </div>
</div>

<div className="flex flex-col  text-center w-full">
      <h1 className="  text-4xl font-bold  title-font mb-4 text-gray-900 ml-6">ABOUT SHOPPING</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-black">We believe that shopping should be enjoyeable and rewarding experiance. We pick every item on our site, ensuring quality of the product.Our friendly and knowledgeable team is always here to assist you .YOour happiness is our top priority.</p>
    </div>
        
      
</section>
       </div>
  )
}

export default About