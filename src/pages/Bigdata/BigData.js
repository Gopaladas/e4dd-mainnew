import React, { useState } from "react";
import "./BigData.css";

const BigData = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "./BigData/bd1.jpg",
    "./BigData/bd5.jpg",
    "./BigData/bd2.jpg",
  ]; // Replace with your image paths

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="p-0 m-0 max-w-full w-full h-full">
      <div className="relative">
        <div className="relative w-full h-96 overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt="Big Data"
            className="w-full h-96 object-cover"
          />
        </div>
        <button
          onClick={handlePreviousClick}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        >
          &lt;
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        >
          &gt;
        </button>
      </div>

      <div className="p-6 bg-gray-100 text-center">
        <h1 className="text-4xl font-extrabold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-serif">
            Big Data Consulting Services
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 font-serif font-semibold leading-relaxed">
          "As a competitive asset, data is key to differentiating your company
          from the rest of the pack. Our big data consulting and engineering
          services can help your company improve decision-making, accelerate
          innovation, enhance the customer experience, and drive operational
          efficiency."
        </p>
      </div>

      <div className="-mt-10 space-y-6 px-6">
        <section className="flex flex-col items-center mt-8 py-8">
          <h2 className="w-full text-4xl font-extrabold text-center mb-4 text-gray-900">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text font-serif">
              Why Choose
            </span>
            <span className="inline-block ml-2 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-serif">
              Our Big Data Consulting Services?
            </span>
          </h2>

          <div className="w-full flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
  <div
    className="carda relative overflow-hidden h-72 bg-cover bg-center shadow-lg rounded-lg flex-grow max-w-xs"
    style={{ backgroundImage: "url('./BigData/card1.jpg')" }}
  >
    <div className="card-content1 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100"></div>
    <div className="card-content1 absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 transform translate-y-full transition-transform transition-opacity duration-500 hover:opacity-100 hover:translate-y-0 p-6">
      <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-mono text-2xl shadow-md">Drive Strategic Decision-Making</h3>
      <p>In a data-driven world, strategic decision-making is paramount. Our big data consulting services empower your organization to harness the full potential of your data, enabling you to make informed decisions that drive growth and profitability.</p>
    </div>
  </div>
  <div
    className="carda relative overflow-hidden h-72 bg-cover bg-center shadow-lg rounded-lg flex-grow max-w-xs"
    style={{ backgroundImage: "url('./BigData/card2.jpg')" }}
  >
    <div className="card-content1 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100"></div>
    <div className="card-content1 absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 transform translate-y-full transition-transform transition-opacity duration-500 hover:opacity-100 hover:translate-y-0 p-6">
      <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-mono text-2xl shadow-md">Accelerate Innovation</h3>
      <p>Innovation is the lifeblood of any successful business. With our sophisticated analytics and advanced data engineering techniques, we help you unleash the power of innovation, enabling you to stay ahead of the curve and outpace the competition.</p>
    </div>
  </div>
  <div
    className="carda relative overflow-hidden h-72 bg-cover bg-center shadow-lg rounded-lg flex-grow max-w-xs"
    style={{ backgroundImage: "url('./BigData/card3.jpg')" }}
  >
    <div className="card-content1 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100"></div>
    <div className="card-content1 absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 transform translate-y-full transition-transform transition-opacity duration-500 hover:opacity-100 hover:translate-y-0 p-6">
      <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-mono text-2xl shadow-md">Enhance Customer Experience</h3>
      <p>Customer experience is at the heart of every successful business. Our big data solutions enable you to gain deep insights into customer behavior and preferences, allowing you to deliver personalized experiences that keep your customers coming back for more.</p>
    </div>
  </div>
  <div
    className="carda relative overflow-hidden h-72 bg-cover bg-center shadow-lg rounded-lg flex-grow max-w-xs"
    style={{ backgroundImage: "url('./BigData/card4.jpg')" }}
  >
    <div className="card-content1 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100"></div>
    <div className="card-content1 absolute bottom-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 transform translate-y-full transition-transform transition-opacity duration-500 hover:opacity-100 hover:translate-y-0 p-6">
      <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent font-mono text-2xl shadow-md">Drive Operational Efficiency</h3>
      <p>Operational efficiency is essential for maximizing productivity and minimizing costs. Our data engineering services help streamline your operations, automate repetitive tasks, and optimize processes, allowing you to achieve greater efficiency and agility.</p>
    </div>
  </div>
</div>
        </section>

        <section className="my-12 py-8 px-4 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 rounded-lg shadow-xl lg:flex lg:items-center">
          <h2 className="text-3xl font-semibold text-left text-gray-800 mb-6 lg:mb-0 animate-fade-in-up lg:w-1/2 lg:ml-4">
            <span className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Key Features of Our Big Data Solutions:
            </span>
          </h2>
          <div className="ml-5 mt-4 space-y-6 lg:mt-0 lg:ml-0 lg:flex lg:flex-col lg:space-y-6 lg:space-x-8">
            <div className="transform transition duration-500 hover:scale-105 animate-fade-in-up lg:mr-4 mb-4 lg:mb-0">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <strong className="block mb-2 text-blue-600">Volume:</strong>
                <p className="text-gray-700">
                  With the exponential growth of data, specialized processing
                  techniques are required to extract actionable insights from
                  vast datasets.
                </p>
              </div>
            </div>
            <div className="transform transition duration-500 hover:scale-105 animate-fade-in-up delay-200 lg:mr-4 mb-4 lg:mb-0">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <strong className="block mb-2 text-green-600">Variety:</strong>
                <p className="text-gray-700">
                  Our solutions support a wide range of data formats, from
                  traditional documents and databases to semi-structured and
                  unstructured data from various sources.
                </p>
              </div>
            </div>
            <div className="transform transition duration-500 hover:scale-105 animate-fade-in-up delay-400 lg:mr-2 lg:ml-0 -mb-6 lg:mb-0 lg:mt-0">
              <div className="p-4 bg-white rounded-lg shadow-md ml-0 lg:-ml-9">
                <strong className="block mb-2 text-purple-600">
                  Velocity:
                </strong>
                <p className="text-gray-700">
                  Whether through batch processing or real-time analysis, our
                  big data analytics deliver insights with speed and precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 rounded-lg shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-8 animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 font-serif">
              Our Comprehensive Big Data Services
            </span>
          </h2>

          <ul className="list-disc ml-8 mt-4 space-y-4">
            <li className="text-gray-900">
              <strong>Data Engineering:</strong> From robust data pipelines to
              efficient storage solutions, we offer end-to-end data engineering
              services to power company-wide transformations.
            </li>
            <li className="text-gray-900">
              <strong>Big Data Analytics:</strong> Our team integrates advanced
              analytics and data science into your solutions, creating
              personalized dashboards for managing business insights.
            </li>
            <li className="text-gray-900">
              <strong>Big Data Development:</strong> We develop tailored
              solutions focused on enriching, measuring, and visualizing
              insights obtained from billions of interactions, all while
              prioritizing regulatory compliance and security.
            </li>
            <li className="text-gray-900">
              <strong>Data Integration:</strong> We help unify and prepare your
              data for further analysis, ensuring that crucial information is
              combined into a comprehensive and flexible structure.
            </li>
            <li className="text-gray-900">
              <strong>IoT Data Analysis:</strong> Our experts specialize in
              analyzing data from IoT devices, helping you extract valuable
              insights and optimize your IoT solutions.
            </li>
            <li className="text-gray-900">
              <strong>Big Data-Powered Machine Learning:</strong> By combining
              AI, data mining, predictive analytics, and business intelligence,
              we enhance the efficiency of your machine learning software,
              driving innovation and growth.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BigData;
