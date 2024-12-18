import React from "react";
import Image from "next/image";

// Reusable OfferCard Component
type OfferCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
};

const OfferCard = ({ imageSrc, title, description, price }: OfferCardProps) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition-transform duration-300">
      {/* Offer Image */}
      <div className="w-full h-48 relative mb-4">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      {/* Offer Details */}
      <h3 className="text-lg font-bold text-center text-[#1E1E1E] mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 text-center mb-4">{description}</p>
      <p className="text-lg font-semibold text-red-500">{price}</p>
    </div>
  );
};

// Offers Page Component
const work = () => {
  const offers = [
    {
      imageSrc: "/assets/offers/offer1.png",
      title: "Family Pizza Combo",
      description: "Large pizza + 2 sides + drink.",
      price: "$19.99",
    },
    {
      imageSrc: "/assets/offers/offer2.png",
      title: "Burger Feast",
      description: "Double cheeseburger + fries + drink.",
      price: "$9.99",
    },
    {
      imageSrc: "/assets/offers/offer3.png",
      title: "Dessert Delight",
      description: "2 chocolate brownies + 1 ice cream.",
      price: "$7.49",
    },
    {
      imageSrc: "/assets/offers/offer4.png",
      title: "Healthy Salad Box",
      description: "Fresh mixed salad + juice.",
      price: "$8.49",
    },
    {
      imageSrc: "/assets/offers/offer5.png",
      title: "Weekend Brunch Special",
      description: "Pancakes + eggs + coffee.",
      price: "$12.99",
    },
    {
      imageSrc: "/assets/offers/offer6.png",
      title: "Seafood Platter",
      description: "Grilled shrimp + rice + veggies.",
      price: "$14.99",
    },
    {
      imageSrc: "/assets/offers/offer7.png",
      title: "Coffee Lover’s Combo",
      description: "Coffee + pastry.",
      price: "$8.99",
    },
    {
      imageSrc: "/assets/offers/offer8.png",
      title: "Mocktail Madness",
      description: "Mocktails + appetizers.",
      price: "$11.99",
    },
    {
      imageSrc: "/assets/offers/offer9.png",
      title: "Mini Meals for Kids",
      description: "Pasta + nuggets + toy.",
      price: "$9.99",
    },
    {
      imageSrc: "/assets/offers/offer10.png",
      title: "Milkshake & Fries Combo",
      description: "Milkshake + fries.",
      price: "$7.99",
    },
    {
      imageSrc: "/assets/offers/offer11.png",
      title: "Happy Hour Discounts",
      description: "Off-peak discounts.",
      price: "Varies",
    },
    {
      imageSrc: "/assets/offers/offer12.png",
      title: "Membership Deals",
      description: "Free dessert for members.",
      price: "Varies",
    },
    {
      imageSrc: "/assets/offers/offer13.png",
      title: "Breakfast Bonanza",
      description: "Toast + omelet + coffee.",
      price: "$15.99",
    },
    {
      imageSrc: "/assets/offers/offer14.png",
      title: "Evening Snack Box",
      description: "Fries + nuggets.",
      price: "$10.99",
    },
    {
      imageSrc: "/assets/offers/offer15.png",
      title: "Plant-Based Delight",
      description: "Vegan meal combo.",
      price: "$22.99",
    },
    {
      imageSrc: "/assets/offers/offer16.png",
      title: "Holiday Platter",
      description: "Festive-themed dish.",
      price: "$39.99",
    },
    {
      imageSrc: "/assets/offers/offer17.png",
      title: "Low-Calorie Combo",
      description: "Salads + sugar-free dessert.",
      price: "$19.99",
    },
    {
      imageSrc: "/assets/offers/offer18.png",
      title: "Summer Smoothie Combo",
      description: "Smoothie + snacks.",
      price: "$14.99",
    },
    {
      imageSrc: "/assets/offers/offer19.png",
      title: "Lunch Box Special",
      description: "Packed meals for takeaway.",
      price: "$12.99",
    },
    {
      imageSrc: "/assets/offers/offer20.png",
      title: "Couple’s Delight",
      description: "Meal for two + wine.",
      price: "$49.99",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Page Heading */}
      <div className="mb-8 text-center">
        <p className="text-red-500 text-sm tracking-wider font-semibold">
          LIMITED TIME OFFERS
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-black">
          Exclusive Deals for You
        </h2>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            imageSrc={offer.imageSrc}
            title={offer.title}
            description={offer.description}
            price={offer.price}
          />
        ))}
      </div>
    </div>
  );
};

export default work;
