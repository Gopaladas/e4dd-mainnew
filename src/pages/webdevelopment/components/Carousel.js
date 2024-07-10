import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import img from "../image1.png";
import img2 from "../image2.png";
import img3 from "../image3.png";
import img11 from "../image1.jpg";
import img12 from "../image2.jpeg";
import img13 from "../image3.jpeg";
import img4 from "../image4.jpeg";
import img5 from "../image5.jpeg";
import img6 from "../image6.jpeg";
import "../index.css"; // Ensure this file is imported for custom CSS

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Carousel = () => {
  const slides = [img, img2, img3];

  const services = [
    {
      image: img11,
      title: " Corporate Websites",
      description:
        " We design corporate websites for corporate companies to produce highly satisfactory results. We design websites that drive more leads into your company. We have an experienced team who are ready to shape your needs.",
      bgColor: "bg-gray-500",
      borderColor: "border-red-500",
    },
    {
      image: img12,
      title: " Business Websites",
      description:
        "A website can be the best way to find prospective clients. It will make them trust you more. We design websites for Institutions, Hospitals, Construction companies, Interior Designers, Architects, Consultants, and Start-ups, etc.",
      bgColor: "bg-green-500",
      borderColor: "border-green-500",
    },
    {
      image: img13,
      title: "E-Commerce",
      description:
        " We design eCommerce websites which come with features like add to cart, shopping cart, wishlist, payment gateway, and SSL certificates. A fully responsive online store which will generate more sales.",
      bgColor: "bg-blue-500",
      borderColor: "border-blue-500",
    },
    {
      image: img4,
      title: " Portfolio Websites",
      description:
        " We design portfolio websites for businesses, celebrities, public figures, contactors, freelancers, writers, entrepreneurs, models, photographers, and filmmakers etc. Our conceptualization and execution process is very unique and creative.",
      bgColor: "bg-yellow-500",
      borderColor: "border-yellow-500",
    },
    {
      image: img5,
      title: "Landing Pages",
      description:
        " Landing pages is a single web page and a great tool to generate leads, sell online or enhance your mailing list, We assure you for a creative and attractive landing page that is well-optimized for your business. Unlike other shoddy copy paste landing page designing firms.",
      bgColor: "bg-purple-500",
      borderColor: "border-purple-500",
    },
    {
      image: img6,
      title: " Custom Websites",
      description:
        " We develop custom websites through learning and understanding your business purposes, and that builds your brand icon on the web environment. We apply an efficient process of strategy, user participation, design execution, and programming to form a strong online business appearance.​",
      bgColor: "bg-pink-300",
      borderColor: "border-pink-300",
    },
  ];

  return (
    <div>
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={600}
          className="absolute w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full bg-cover bg-center bg-gray-200"
                style={{ backgroundImage: `url(${slide})` }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white text-center leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-pink-900">
                    Web Development
                    <br />& Digital Marketing
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-[-200px] md:bottom-[-250px] left-1/2 transform -translate-x-1/2 w-full bg-gray-300 p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-black leading-none">
            <span className="text-orange-500">#No.1</span> Web Designing
            Services
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-black leading-none mt-2 md:mt-4">
            A <span className="text-orange-500">Design Agency</span> for the
            Digital Age
          </h2>
          <p className="text-xs md:text-sm lg:text-base mt-2 md:mt-4">
            We provide comprehensive website design services with all the latest
            trends and technologies. We provide a variety of resources that can
            support your business whether you are planning to design a website
            for your start-up or looking to build a company website from
            scratch, then we are the right choice for you.
          </p>
        </div>
      </div>
      <div className="w-full h-[15vh] md:h-[25vh] bg-gradient-to-r from-gray-200 to-gray-400 flex items-center justify-center mt-[200px] md:mt-[250px]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black">
          Our Website Design Services
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4 md:p-8">
        {services.map((service, index) => (
          <div key={index} className="group perspective">
            <div
              className={`relative w-full h-60 md:h-80 bg-gray-200 shadow-md transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180 rounded-lg border-4 ${service.borderColor}`}
            >
              <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div
                className={`absolute inset-0 w-full h-full flex flex-col items-start justify-start p-4 text-white ${service.bgColor} backface-hidden rotate-y-180 rounded-lg`}
              >
                <h3 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-orange-500">
                  {service.title}
                </h3>
                <p className="text-sm md:text-lg lg:text-xl mt-2 text-black">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
