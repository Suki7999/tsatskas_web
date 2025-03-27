'use client'
import { useParams, useRouter } from 'next/navigation';

const ProductDetail = () => {
  const {param} = useParams();

  // Бүтээгдэхүүний мэдээлэл (Жишээ)
  const product = {
    id: 'asd',
    name: `Product ${param}`,
    price: 49.99,
    description: "This is a detailed description of the product. It provides all the necessary details about the product's features and specifications.",
    image: 'https://m.media-amazon.com/images/I/7136c0aipmL._AC_UL640_QL65_.jpg',
  };

  return (
    <div className=" text-white min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        {/* Бүтээгдэхүүний дэлгэрэнгүй мэдээлэл */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Бүтээгдэхүүний зураг */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Бүтээгдэхүүний мэдээлэл */}
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="text-lg text-gray-400">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-300">{product.description}</p>

            {/* Товчнууд */}
            <div className="mt-6 space-x-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Add to Cart
              </button>
              <button className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
