"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaGift } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BiTimer } from "react-icons/bi";
import { LuSalad } from "react-icons/lu";

// Example service data
const services = [
  {
    title: "CATERING",
    description: "Delight your guests with our flavors and presentation",
    icon: <LuSalad className="text-[#5FE26C] text-4xl w-[64px] h-[64px] bg-white" />,
  },
  {
    title: "FAST DELIVERY",
    description: "We deliver your order promptly to your door",
    icon: <BiTimer className="text-[#5FE26C] text-4xl w-[64px] h-[64px] bg-white" />,
  },
  {
    title: "ONLINE ORDERING",
    description: "Explore menu & order with ease using our Online Ordering",
    icon: <RiShoppingCart2Line className="text-[#5FE26C] text-4xl w-[64px] h-[64px] bg-white" />,
  },
  {
    title: "GIFT CARDS",
    description: "Give the gift of exceptional dining with Foodi Gift Cards",
    icon: <FaGift className="text-[#5FE26C] text-4xl w-[64px] h-[64px] bg-white" />,
  },
];

const Services = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-center items-start gap-12 lg:gap-20">
      {/* Left Section */}
      <div className="flex-1 max-w-lg text-center md:text-left">
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
        <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center justify-center text-white gap-2 bg-[#39DB4A] hover:bg-[#34c43e] border-b-2 font-semibold"
        >
          <span>Explore</span>
        </Button>
      </div>

      {/* Right Section - Service Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl">
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




// "use client";

// import React from "react";

// const services = [
//   {
//     title: "Dine-In Service",
//     description:
//       "Enjoy a cozy ambiance and freshly prepared meals at our beautiful dine-in space.",
//     icon: "🍽️",
//   },
//   {
//     title: "Takeaway",
//     description:
//       "Order your favorite meals and pick them up at your convenience with our takeaway option.",
//     icon: "🥡",
//   },
//   {
//     title: "Delivery",
//     description:
//       "Get delicious food delivered straight to your doorstep, hot and fresh.",
//     icon: "🚚",
//   },
//   {
//     title: "Catering Services",
//     description:
//       "Planning a party or event? Let us handle the food with our premium catering services.",
//     icon: "🎉",
//   },
//   {
//     title: "Online Reservation",
//     description:
//       "Reserve your table ahead of time with our easy online reservation system.",
//     icon: "🗓️",
//   },
//   {
//     title: "Private Dining",
//     description:
//       "Enjoy exclusive dining experiences in our private spaces for family or business gatherings.",
//     icon: "🏠",
//   },
//   {
//     title: "Special Discounts",
//     description:
//       "Avail special discounts for students, corporate events, and large group bookings.",
//     icon: "💸",
//   },
//   {
//     title: "Gift Cards",
//     description:
//       "Surprise your loved ones with our customizable Foodi gift cards.",
//     icon: "🎁",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Page Header */}
//         <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
//           Our Services
//         </h1>
//         <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
//           Explore the wide range of services we offer to make your dining
//           experience extraordinary. From dine-in to catering, we’ve got you
//           covered.
//         </p>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="p-6 bg-white border rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-2"
//             >
//               <div className="text-5xl mb-4">{service.icon}</div>
//               <h2 className="text-xl font-semibold mb-2 text-gray-800">
//                 {service.title}
//               </h2>
//               <p className="text-gray-600 text-sm">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
