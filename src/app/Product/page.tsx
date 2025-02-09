
import Image from "next/image";
import Link from "next/link";

interface Products {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default async function Product() {
  const fetchdata = await fetch("https://fakestoreapi.com/products");
  const res: Products[] = await fetchdata.json();

  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
      {res.map((val) => (
        <div
          key={val.id}
          className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
        >
          <Link href={`Product/${val.id}`}>
            <div className="relative w-full h-64 bg-gray-100">
              <Image
                className="object-contain p-4"
                src={val.image}
                alt={val.title}
                layout="fill"
              />
            </div>
            <div className="p-5 space-y-3">
              <h5 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                {val.title}
              </h5>
              <div className="flex items-center space-x-1">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  5.0
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  ${val.price}
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-5 py-2 transition-all duration-300">
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
