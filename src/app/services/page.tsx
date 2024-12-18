"use client";

import React from "react";
import { Button } from "@/components/ui/moving-border";
import { FaGift } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BiTimer } from "react-icons/bi";
import { LuSalad } from "react-icons/lu";

// Example service data
const services = [
  {
    title: "CATERING",
    description: "Delight your guests with our flavors and presentation",
    icon: (
      <LuSalad className="text-[#5FE26C] text-4xl w-[64px] h-[64px] bg-white" />
    ),
  },
  {
    title: "FAST DELIVERY",
    description: "We deliver your order promptly to your door",
    icon: (
      <BiTimer className="text-[#5FE26C] text-4xl w-[64px] h-[64px] bg-white" />
    ),
  },
  {
    title: "ONLINE ORDERING",
    description: "Explore menu & order with ease using our Online Ordering",
    icon: (
      <RiShoppingCart2Line className="text-[#5FE26C] text-4xl w-[64px] h-[64px] bg-white" />
    ),
  },
  {
    title: "GIFT CARDS",
    description: "Give the gift of exceptional dining with Foodi Gift Cards",
    icon: (
      <FaGift className="text-[#5FE26C] text-4xl w-[64px] h-[64px] bg-white" />
    ),
  },
];

const Services = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-20">
      {/* Left Section */}
      <div className="flex-1 max-w-lg text-center md:text-left mx-auto">
        <h1 className="text-[#FF6868] mb-4 font-bold tracking-wider text-sm md:text-base">
          OUR STORY & SERVICES
        </h1>
        <h2 className="font-bold text-4xl md:text-5xl text-black mb-6 tracking-wide leading-tight">
          Our Culinary Journey <br /> And Services
        </h2>
        <h3 className="text-[#555555] text-base md:text-xl font-medium mb-8 leading-relaxed">
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </h3>
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <Button
            borderRadius="1rem" // Customize the border radius
            containerClassName="hover:shadow-lg" // Additional outer container styles
            borderClassName="bg-[#39DB4A]" // Border color and gradient
            className="uppercase flex items-center gap-2 tracking-wider text-white hover:bg-[#2EB93D]" // Inner button styles
            duration={3000} // Optional: Animation duration for the moving border
            size="lg" // Pass additional props if needed
          >
            <span>Order Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Right Section - Service Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-[0px_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0px_15px_25px_rgba(0,0,0,0.15)] transition-shadow duration-300"
          >
            <div className="flex items-center justify-center rounded-full bg-green-100 mb-4 w-16 h-16">
              {service.icon}
            </div>
            <h2 className="text-lg md:text-xl font-bold mb-2 text-center text-[#5FE26C]">
              {service.title}
            </h2>
            <p className="text-[#90BD95] text-center w-full max-w-[200px] line-clamp-3 text-sm md:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
