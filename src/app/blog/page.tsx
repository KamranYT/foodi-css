"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "The Secrets Behind Our Delicious Recipes",
    description:
      "Discover the passion and process that go into creating our signature dishes, from fresh ingredients to culinary artistry.",
    image: "/assets/blog/blog1.png",
    link: "/blogs/secrets-behind-recipes",
    date: "June 12, 2024",
  },
  {
    id: 2,
    title: "5 Health Benefits of Eating Fresh Salads",
    description:
      "Explore the nutritional benefits of fresh, green salads and why they're a staple at our restaurant.",
    image: "/assets/blog/blog2.png",
    link: "/blogs/health-benefits-salads",
    date: "June 5, 2024",
  },
  {
    id: 3,
    title: "How to Pair Wine with Your Favorite Meals",
    description:
      "Learn how to perfectly pair wine with different meals to enhance the flavor and dining experience.",
    image: "/assets/blog/blog3.png",
    link: "/blogs/wine-pairing-guide",
    date: "May 28, 2024",
  },
  {
    id: 4,
    title: "Behind the Scenes: A Day in Our Kitchen",
    description:
      "Take a sneak peek into the daily routine of our chefs and kitchen staff as they prepare for the day.",
    image: "/assets/blog/blog4.png",
    link: "/blogs/behind-the-scenes-kitchen",
    date: "May 21, 2024",
  },
];

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-[#FF6868] text-2xl font-semibold mb-4 uppercase tracking-wider">
          Our Blog
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-[#333] leading-snug">
          Explore the Latest from Our Kitchen
        </h2>
        <p className="mt-4 text-lg text-[#555555] max-w-2xl mx-auto">
          Discover insights, recipes, and tips to enhance your dining
          experience. Stay updated with what is cooking at Foodi!
        </p>
      </header>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Blog Image */}
            <div className="w-full h-56 relative">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#39DB4A] mb-2">
                {blog.title}
              </h3>
              <p className="text-[#555555] mb-4 text-sm leading-relaxed line-clamp-3">
                {blog.description}
              </p>
              <p className="text-sm text-gray-400 mb-4">📅 {blog.date}</p>

              {/* Read More */}
              <Link
                href={blog.link}
                className="inline-block text-white bg-[#FF6868] hover:bg-[#e65757] py-2 px-4 rounded transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
