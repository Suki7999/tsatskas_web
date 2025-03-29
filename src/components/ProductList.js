import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dialog } from '@headlessui/react';
import { useRouter } from 'next/navigation';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/product/list');
        const data = response.data;

        // Format products by converting price to a number and setting image paths
        const formattedProducts = data.map((product) => ({
          ...product,
          price: parseFloat(product.price), // Convert price to a number
          image: product.image.startsWith('http')
            ? product.image
            : `http://localhost:3034${product.image}`, // Correct image URL
        }));

        setProducts(formattedProducts);
      } catch (err) {
        setError(err.message); // Set error message if request fails
      }
    };

    fetchProducts(); // Call the function to fetch products
  }, []); // Empty array ensures this runs once after the component mounts

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="min-h-screen bg-white text-white p-6">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        Бүтээгдэхүүний жагсаалт
      </h2>

      {/* Adjusted grid layout */}
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            // onClick={() => openModal(product)}
            onClick={() => router.push('/product/' + product._id)}
            className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-zoom-in p-4"
          >
            <img
              className="w-full h-48 object-cover rounded-t-lg transition duration-300 transform hover:scale-110"
              src={product.image}
              alt={product.name}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-black">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{product.description}</p>
              <p className="text-lg text-gray-950 mt-4">{product.price.toFixed(0)}₮</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying product details */}
      {selectedProduct && (
        <Dialog open={isOpen} onClose={closeModal}>
          <div className="fixed inset-0 flex justify-center items-center">
            <Dialog.Panel className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full transform transition duration-300 scale-110">
              <Dialog.Title className="text-3xl font-extrabold text-white text-center">
                {selectedProduct.name}
              </Dialog.Title>
              <Dialog.Description className="mt-4 text-lg text-gray-400">
                {selectedProduct.description}
              </Dialog.Description>
              <div className="mt-6">
                <img
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                />
                <p className="text-2xl text-green-400 mt-4 text-center">
                  ${selectedProduct.price.toFixed(2)}
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={closeModal}
                  className="py-3 px-8 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-md hover:from-red-500 hover:to-pink-500 focus:outline-none"
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default ProductList;
