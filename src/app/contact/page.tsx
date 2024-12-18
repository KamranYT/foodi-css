"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@/components/ui/moving-border";
import { LuSendHorizontal } from "react-icons/lu";

const ContactPage = () => {
  return (
    <section className="py-12 px-6 sm:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Contact Information */}
        <div>
          <h1 className="text-[#FF6868] mb-4 font-bold tracking-wider uppercase">
            Get in Touch
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#000000] dark:text-white">
            Contact Us
          </h2>
          <p className="text-[#555555] dark:text-gray-300 text-lg mb-8">
            Have any questions or feedback? Reach out to us using the form or
            through our contact details below.
          </p>
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#39DB4A] text-2xl" />
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                +92 (331) 300-7384
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#39DB4A] text-2xl" />
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                support@foodi.com
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#39DB4A] text-2xl" />
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                123 Food Street, Foodi City, FC 12345
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
            Send Us a Message
          </h3>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#39DB4A] outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#39DB4A] outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-gray-700 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#39DB4A] outline-none"
              ></textarea>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                borderRadius="1rem" // Customize the border radius
                containerClassName="hover:shadow-lg" // Additional outer container styles
                borderClassName="bg-[#39DB4A]" // Border color and gradient
                className="uppercase flex items-center gap-2 tracking-wider text-white hover:bg-[#2EB93D]" // Inner button styles
                duration={3000} // Optional: Animation duration for the moving border
                size="lg" // Pass additional props if needed
              >
                <span>Send Message</span>
                <LuSendHorizontal />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
