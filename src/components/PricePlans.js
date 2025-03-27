import React from 'react';

const PricePlans = () => {
  const plans = [
    {
      title: "Basic",
      price: "$9.99",
      features: [
        "1 GB Storage",
        "5 GB Bandwidth",
        "Basic Support",
        "1 Website"
      ],
      buttonText: "Get Started",
      buttonLink: "/signup/basic"
    },
    {
      title: "Standard",
      price: "$19.99",
      features: [
        "10 GB Storage",
        "50 GB Bandwidth",
        "Priority Support",
        "5 Websites"
      ],
      buttonText: "Get Started",
      buttonLink: "/signup/standard"
    },
    {
      title: "Premium",
      price: "$29.99",
      features: [
        "50 GB Storage",
        "Unlimited Bandwidth",
        "24/7 Support",
        "Unlimited Websites"
      ],
      buttonText: "Get Started",
      buttonLink: "/signup/premium"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white">Our Pricing Plans</h2>
        <p className="mt-4 text-lg text-gray-600">
          Choose the plan that fits your needs. Start your journey with us today!
        </p>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-2 border-gray-500"
            >
              <div className="px-6 py-8 flex-1">
                <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
                <p className="mt-4 text-3xl font-bold text-white">{plan.price}</p>
                
                <ul className="mt-6 space-y-4 text-left text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 110-16 8 8 0 010 16zm0-1a7 7 0 100-14 7 7 0 000 14z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-black">
                <a
                  href={plan.buttonLink}
                  className="w-full text-center text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-md"
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricePlans;
