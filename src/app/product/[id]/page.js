'use client'
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

const ProductDetail = () => {
    // const router = useRouter();
    const { id } = useParams();  // Get product ID from the URL
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (id) {
        // Fetch the product details when the component mounts
        axios.get(`/api/product/${id}`)
          .then(response => {
            setProduct(response.data);
          })
          .catch(err => {
            setError('Failed to load product details.');
          });
      }
    }, [id]);
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!product) {
      return <p>Loading...</p>;
    }
  
    return (
      <div className="p-6 bg-white shadow-md">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>
            <p className="text-xl text-green-600 mb-6">${parseFloat(product.price).toFixed(2)}</p>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Сагсанд нэмэх
              </button>
              <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400">
                Худалдан авах
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetail;
