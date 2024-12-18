"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LuSendHorizontal } from "react-icons/lu";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservation Data:", formData);
    alert("Your reservation has been submitted!");
  };

  return (
    <section className="py-12 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-[#FF6868] mb-4 font-bold tracking-wider text-sm md:text-base uppercase">
          Make a Reservation
        </h1>
        <h2 className="font-bold text-4xl md:text-5xl text-black mb-4">
          Book Your Table Now
        </h2>
        <p className="text-[#555555] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Enjoy exceptional dining by reserving your table ahead of time. Simply
          fill out the form below, and we’ll confirm your reservation promptly.
        </p>
      </div>

      {/* Reservation Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block text-[#555555] font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5FE26C]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[#555555] font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5FE26C]"
          />
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date */}
          <div>
            <label className="block text-[#555555] font-semibold mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5FE26C]"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-[#555555] font-semibold mb-2">
              Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5FE26C]"
            />
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-[#555555] font-semibold mb-2">
            Number of Guests
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5FE26C]"
          >
            <option value="">Select number of guests</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6+">6+ Guests</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <Button
           // Border color and gradient
            className="uppercase flex items-center gap-2 tracking-wider text-white hover:bg-[#2EB93D]" // Inner button styles
             // Optional: Animation duration for the moving border
            size="lg" // Pass additional props if needed
          >
            <span>Reserve Table</span>
            <LuSendHorizontal />
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ReservationPage;
