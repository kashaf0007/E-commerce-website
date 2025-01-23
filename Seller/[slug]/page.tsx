'use Client'
import React from 'react';
import Image from 'next/image';



const Posts = {
  't-shirt': {
    title: 'Mountains',
    image: '/mountain.jpeg',
    content: `
Mount Karangetang is an awesome Jurassic Park-looking volcano that dominates the remote island of Siau in North Sulawesi, Indonesia.
You can not go anywhere on tiny Siau island without seeing this majestic volcano and its twin smoking craters.
 If you are lucky, you may even get to see it spouting molten lava and rock bombs at night, which it does pretty often.
 <br/>
 First of all, lets talk about safety. Karangetang is a highly active volcano — probably one of the most active volcanoes in the world.
The local guides are knowledgeable and any seismic activity is monitored by the Indonesian government, but there is still plenty of risk involved in climbing this mountain. It may erupt at any time.
    `,
  },
  'shoes': {
    title: 'Park in Thailand',
    image: '/sea.jpeg',
    content: `  `
  },
  'watches': {
    title: 'Faisal Mosque',
    image: '/mosque.jpeg',
    content: `
Abu Dhabi may not be as well known as Dubai when it comes to tourism hotspots, but there is at least one thing you should definitely see here and that is the Sheikh Zayed Grand Mosque.
Like the name implies, it is very big and grand, and it is visited by millions of tourists every year. It actually reminds me a bit of the Taj Mahal in India, and that is a good thing.
<br/>
<br/>
The Grand Mosque was built between 1996 and 2007, and it takes its name from Sheikh Zayed bin Sultan, the founder of the United Arab Emirates.
Located in Abu Dhabi, it is the biggest mosque in the UAE, and one of the biggest mosques in the world. Construction cost a whopping 2 billion dirhams ($545 million USD).
Artisans were brought in from many countries, including Germany, India, Iran, Italy, Malaysia, Morocco, New Zealand, Turkey, and the United Kingdom.
    `
  },}
  export default function Post({ params }: { params: { id: string } }) {
    const posts = Posts[params.id as keyof typeof Posts];
  
    if (!posts) return <div>Post not found</div>;
  
    return (
        <div>
        <div className="text-center mb-12 mt-7  ">
          <h2 className="text-5xl font-extrabold text-black">Explore Destinations</h2>
        </div>
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-slate-100 bg-opacity-90 ml-6">
                <div className="h-56 overflow-hidden ">
                  <Image
                    src={posts.image}
                    alt={posts.title}
                    height={"250"}
                    width={"200"}
                    className="w-full h-full object-cover transform "
                  />
                </div>
                <div className="p-9">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-500  mb-2">
                    {posts.title}
                  </h3>
                  <p className="text-black font-medium">{posts.content}</p>
                </div>
              </div>

          
        </div>
      </div>
  );
  }