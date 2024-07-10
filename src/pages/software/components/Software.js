// src/components/Software.js

import React, { useState } from "react";
import imageSrc from "../image.jpg";
import sampleImage1 from "../image4.jpeg";
import sampleImage2 from "../image5.jpeg";
import sampleImage3 from "../image6.jpeg";

const Software = () => {
  const services = [
    {
      title: "Strategic IT Consulting",
      description:
        "At ELITE, we understand the importance of aligning technology with your overarching business strategy. Our seasoned consultants work closely with you to craft bespoke IT strategies and comprehensive technology roadmaps that drive innovation and propel your organization forward.",
    },
    {
      title: "End-to-End Development",
      description:
        "From conceptualization to deployment, our expert team handles every aspect of the software development lifecycle. Leveraging the latest technologies and industry best practices, we deliver robust, scalable solutions that meet your project requirements and exceed your expectations.",
    },
    {
      title: "Seamless Integration",
      description:
        "Integration is key to maximizing the value of your software investments. Our seamless integration services ensure that your new solutions seamlessly integrate with your existing systems, minimizing disruption and maximizing efficiency.",
    },
    {
      title: "Scalable Solutions",
      description:
        "As your business evolves, so too should your software solutions. Our scalable approach to development ensures that your applications can grow and adapt alongside your organization, providing long-term value and flexibility.",
    },
    {
      title: "Tailored to Your Needs",
      description:
        "We understand that every business is unique. That's why we take a personalized approach to every project, tailoring our services to meet your specific needs and objectives. Whether you're a small startup or a multinational corporation, ELITE has the expertise and experience to drive your digital transformation forward.",
    },
  ];

  const imageSections = [
    {
      imgSrc: sampleImage1,
      title: "Enterprise Software Development",
      description:
        "Utilize our proficiency for end-to-end application development, seamless integration, and efficient management of software solutions.",
      bgColor: "bg-red-100",
    },
    {
      imgSrc: sampleImage2,
      title: "Mobile App Development",
      description:
        "Craft digital products with a mobile-first approach, guaranteeing seamless user experiences across all devices for optimal engagement and satisfaction.",
      bgColor: "bg-green-100",
    },
    {
      imgSrc: sampleImage3,
      title: "Dedicated Development Team",
      description:
        "Leverage ELITE's dedicated developers for scalable delivery capacity. Our process builds, motivates, and manages software teams for client success.",
      bgColor: "bg-blue-100",
    },
  ];

  const [selectedSection, setSelectedSection] = useState(null);

  const handleClick = (index) => {
    setSelectedSection(selectedSection === index ? null : index);
  };

  return (
    <div>
      {/* Image and Heading Section */}
      <div className="relative w-full" style={{ height: "50vh" }}>
        <img
          src={imageSrc}
          alt="Software Development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-4xl  font-bold text-center leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 ">
            SOFTWARE
            <br />
            DEVELOPMENT
          </h1>
          <div className="bg-red-600 w-1/2 h-1 mt-4"></div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          OUR CORE CUSTOM SOFTWARE DEVELOPMENT SERVICES
        </h2>

        <p className="text-lg bg-blue-100 text-center text-gray-700 p-6 rounded-lg shadow-md transition-transform transform  mb-8">
          From IT strategy consulting and comprehensive technology roadmaps to
          the end-to-end development of scalable solutions, ELITE delivers a
          full-cycle software development service that adapts seamlessly to your
          project requirements and business needs.
        </p>

        <p className="text-lg bg-blue-100 text-gray-700 p-6 rounded-lg shadow-md transition-transform transform mb-16">
          Welcome to ELITE, where we specialize in delivering cutting-edge
          custom software development services tailored to your unique business
          objectives. Our comprehensive suite of services spans from strategic
          IT consulting to the seamless execution of scalable solutions,
          ensuring your digital journey is both efficient and effective.
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-300">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
              } service-card`}
              style={{ gridRowStart: index + 1 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-900">{service.description}</p>
              {/* Arrow pointing to the service */}
              <div
                className={`absolute ${
                  index % 2 === 0 ? "right-0" : "left-0"
                } top-1/2 transform ${
                  index % 2 === 0 ? "translate-x-full" : "-translate-x-full"
                } -translate-y-1/2`}
              >
                <div
                  className={`w-0 h-0 border-t-8 border-b-8 ${
                    index % 2 === 0
                      ? "border-l-8 border-l-black"
                      : "border-r-8 border-r-black"
                  } border-transparent`}
                ></div>
              </div>
            </div>
          ))}
          {/* Vertical line */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-black"></div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to unlock your digital potential?
          </h2>
          <p className="text-lg text-gray-700">
            Get in touch with us today to learn more about how ELITE can help
            you achieve your business goals through custom software development.
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {imageSections.map((section, index) => (
            <div
              key={index}
              className={`relative rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer ${section.bgColor}`}
              onClick={() => handleClick(index)}
            >
              <img
                src={section.imgSrc}
                alt={section.title}
                className="w-full h-64 object-cover"
              />
              <div
                className={`p-6 absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center transition-opacity duration-300 ${
                  selectedSection === index ? "opacity-100" : "opacity-0"
                } md:opacity-0 md:hover:opacity-100`}
              >
                <h3 className="text-2xl font-semibold text-orange-300 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-200 text-center">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Software;
