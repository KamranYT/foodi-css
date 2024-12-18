"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Events Data
const events = [
  {
    title: "Private Dining",
    description:
      "Enjoy a personalized dining experience with our exquisite private dining services. Perfect for intimate gatherings.",
    image: "/assets/events/private.png",
  },
  {
    title: "Corporate Events",
    description:
      "Host your corporate events with us and impress your colleagues with great food and a stunning ambiance.",
    image: "/assets/events/carporate.png",
  },
  {
    title: "Weddings & Celebrations",
    description:
      "Make your special day unforgettable with our exceptional catering and elegant event space.",
    image: "/assets/events/wedding.png",
  },
  {
    title: "Birthday Parties",
    description:
      "Celebrate birthdays in style with delicious menus, custom cakes, and personalized decor.",
    image: "/assets/events/birthday.png",
  },
  {
    title: "Holiday Gatherings",
    description:
      "Plan festive gatherings with family and friends, complete with themed decorations and mouth-watering dishes.",
    image: "/assets/events/holiday.png",
  },
];

const EventsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FF6868] mb-4">
          Events & Celebrations
        </h1>
        <p className="text-lg text-[#555555]">
          Discover how we make your events unforgettable with exceptional food
          and service.
        </p>
      </header>

      {/* Events Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={event.image}
                alt={event.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6 text-center bg-white">
              <h2 className="text-2xl font-bold text-[#39DB4A] mb-2">
                {event.title}
              </h2>
              <p className="text-[#555555] mb-4">{event.description}</p>
              <div className="flex flex-col xl:flex-row items-center gap-8 justify-center">
                <Button
                  
                  className="uppercase flex items-center gap-2 tracking-wider text-white bg-[#2EB93D] hover:bg-[#39DB4A]" // Inner button styles
                  
                  size="lg" // Pass additional props if needed
                >
                  <span>Learn More</span>
                </Button>
              </div>
              {/* <Button
                variant="outline"
                size="lg"
                className="uppercase bg-[#39DB4A] text-white hover:bg-[#34c43e] focus:outline-none"
              >
                Learn More
              </Button> */}
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FF6868] mb-4">
          Ready to Plan Your Event?
        </h2>
        <p className="text-lg text-[#555555] mb-6">
          Contact us today to discuss your event details and let us create a
          memorable experience for you.
        </p>
        {/* <Button
          variant="default"
          size="lg"
          className="bg-[#FF6868] text-white hover:bg-[#e55e5e] px-8 py-3 rounded-lg"
        >
          Get in Touch
        </Button> */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-8">
          <Button
         
            className="uppercase flex items-center gap-2 tracking-wider text-white bg-[#FF6868] hover:bg-[#e55e5e] font-semibold" // Inner button styles
           
            size="lg" // Pass additional props if needed
          >
            <span>Get In Touch</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
