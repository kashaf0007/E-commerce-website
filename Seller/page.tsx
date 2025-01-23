'use Client'
import Link from 'next/link';
import Image from 'next/image';

export default function Seller() {
  const posts = [
    {
      id: 't-shirt',
      title: 'T-SHIRT',
      description: 'Mount Karangetang island of Siau in North Sulawesi..',
      image: '/t-shirt4.jpeg',
    },
    {
      id: 'shoes',
      title: 'SHOES',
      description: 'Khao Sok National Park In Thailand.',
      image: '/perfume.jpeg',
    },
    {
      id: 'watches',
      title: 'WATCHES',
      description: 'Sheikh Zayed Grand Mosque in Abu Dhabi,UAE.',
      image: '/watch.jpeg',
    },
];
return (
    <div>
      <div className="text-center mb-12 mt-7  ">
        <h2 className="text-3xl font-bold text-black">seller</h2>
      </div>
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {posts.map((posts ,) => (
          <Link href={`/Posts/${posts.id}`} key={posts.id}>
            <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-slate-100 bg-opacity-90 ml-6">
              <div className="h-72 overflow-hidden ">
                <Image
                  src={posts.image}
                  alt={posts.title}
                  height={"200"}
                  width={"150"}
                  className="w-full h-full object-cover transform "
                />
              </div>
              <div className="p-9">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-500  mb-2">
                  {posts.title}
                </h3>
                <p className="text-black font-medium">{posts.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>


    )}