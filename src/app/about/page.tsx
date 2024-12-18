"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Mr Kamran",
    role: "Executive Chef",
    image: "/team1.png",
  },
  {
    name: "Mr Jamshed",
    role: "Head of Operations",
    image: "/team3.png",
  },
  {
    name: "Aliza Rani",
    role: "Pastry Chef",
    image: "/team2.png",
  },
];

const AboutUsPage = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-[#FF6868] mb-4 font-bold tracking-wider text-sm md:text-base uppercase">
          About Us
        </h1>
        <h2 className="font-bold text-4xl md:text-5xl text-black mb-4 leading-tight">
          Who We Are & Our Passion for Food
        </h2>
        <p className="text-[#555555] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          At Foodi, we are committed to bringing people together over delicious
          meals crafted with love, passion, and expertise. Join us on a culinary
          journey that celebrates taste, quality, and unforgettable moments.
        </p>
      </div>

      {/* Image and Introduction */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <Image
          src="/about1.png"
          alt="About Us Image"
          width={500}
          height={400}
          className="rounded-lg shadow-lg object-cover w-full md:w-1/2"
        />
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-[#39DB4A] mb-4">Our Story</h3>
          <p className="text-[#555555] text-lg leading-relaxed mb-4">
            Founded in 2015, Foodi began as a small family-owned restaurant with
            one goal: to serve delicious food with exceptional hospitality. Our
            recipes are inspired by traditional flavors while embracing modern
            cooking techniques to create unforgettable meals.
          </p>
          <p className="text-[#555555] text-lg leading-relaxed">
            Over the years, we have grown into a beloved dining destination,
            cherished for our attention to detail, fresh ingredients, and
            commitment to our customers.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-[#F9F9F9] py-12 px-6 md:px-12 lg:px-20 rounded-lg shadow-inner mb-16">
        <h3 className="text-3xl font-bold text-center mb-8 text-[#39DB4A]">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-2xl font-bold text-[#FF6868] mb-2">
              Quality Ingredients
            </h4>
            <p className="text-[#555555] leading-relaxed">
              We source the freshest and highest-quality ingredients for every
              dish we prepare.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-[#FF6868] mb-2">
              Exceptional Service
            </h4>
            <p className="text-[#555555] leading-relaxed">
              Our team strives to provide warm, welcoming, and attentive service
              to every guest.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-[#FF6868] mb-2">
              Community Focus
            </h4>
            <p className="text-[#555555] leading-relaxed">
              We believe in giving back to the community that supports us,
              fostering local connections.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-[#39DB4A] mb-6">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-[#5FE26C]">
                {member.name}
              </h4>
              <p className="text-[#555555]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <h3 className="text-3xl font-bold text-[#FF6868] mb-4">
          Join Us for an Unforgettable Experience
        </h3>
        <p className="text-[#555555] text-lg mb-6 max-w-2xl mx-auto">
          Whether it is a casual meal or a special celebration, Foodi is here to
          make your moments memorable. Reserve your table now and indulge in
          great food and hospitality.
        </p>
        <Button className="bg-[#39DB4A] hover:bg-[#34c43e] text-white px-6 py-3 font-bold rounded-md">
          Make a Reservation
        </Button>
      </div>
    </section>
  );
};

export default AboutUsPage;
