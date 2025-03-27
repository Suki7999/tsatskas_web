import React, { useState } from 'react';

// Бүтээгдэхүүний мэдээлэлт объект (Жишээ)
const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://m.media-amazon.com/images/I/71LMqzpQ-4L._AC_UL640_QL65_.jpg' },
  { id: 2, name: 'Product 2', price: 49.99, image: 'https://m.media-amazon.com/images/I/71LMqzpQ-4L._AC_UL640_QL65_.jpg' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'https://m.media-amazon.com/images/I/71LMqzpQ-4L._AC_UL640_QL65_.jpg' },
  { id: 4, name: 'Product 4', price: 39.99, image: 'https://m.media-amazon.com/images/I/71LMqzpQ-4L._AC_UL640_QL65_.jpg' },
  { id: 5, name: 'Product 5', price: 59.99, image: 'https://m.media-amazon.com/images/I/71LMqzpQ-4L._AC_UL640_QL65_.jpg' },
  { id: 6, name: 'Product 6', price: 24.99, image: 'https://m.media-amazon.com/images/I/71LMqzpQ-4L._AC_UL640_QL65_.jpg' },
  { id: 7, name: 'Product 7', price: 89.99, image: 'https://m.media-amazon.com/images/I/71LMqzpQ-4L._AC_UL640_QL65_.jpg' },
  { id: 8, name: 'Product 8', price: 39.99, image: 'https://m.media-amazon.com/images/I/71LMqzpQ-4L._AC_UL640_QL65_.jpg' },
  { id: 9, name: 'Product 9', price: 19.99, image: 'https://m.media-amazon.com/images/I/71LMqzpQ-4L._AC_UL640_QL65_.jpg' },
  { id: 10, name: 'Product 10', price: 29.99, image: 'https://m.media-amazon.com/images/I/71LMqzpQ-4L._AC_UL640_QL65_.jpg' },
  { id: 11, name: 'Product 11', price: 79.99, image: 'https://m.media-amazon.com/images/I/71LMqzpQ-4L._AC_UL640_QL65_.jpg' },
  { id: 12, name: 'Product 12', price: 99.99, image: 'https://m.media-amazon.com/images/I/7136c0aipmL._AC_UL640_QL65_.jpg' },
];

const PAGE_SIZE = 6; // Бүтээгдэхүүн хэдэн ширхэг нэг хуудасанд үзүүлэх

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Бүтээгдэхүүний хуудаслах хэсэг
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentProducts = products.slice(startIndex, startIndex + PAGE_SIZE);

  // Хуудас шилжүүлэх функц
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  return (
    <div className=" text-white min-h-screen">
      {/* Бүтээгдэхүүн жагсаалт */}
      <h2 className="text-3xl font-extrabold text-white text-center">Product list</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-gray-900 shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-100">{product.name}</h3>
              <p className="text-lg text-green-500">${product.price.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-gray-700 text-center">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Хуудас шилжүүлэх */}
      <div className="flex justify-center mt-6">
        <nav>
          <ul className="flex space-x-2">
            {/* Previous Page */}
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
              >
                Prev
              </button>
            </li>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <li key={pageNumber}>
                  <button
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === pageNumber
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    {pageNumber}
                  </button>
                </li>
              );
            })}

            {/* Next Page */}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProductList;
