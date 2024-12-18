import React from "react";
import Image from "next/image";

// Category Item Component
type CategoryProps = {
  title: string;
  description: string;
  imageSrc: string;
  imgWidth: number; // Use numbers for width
  imgHeight: number; // Use numbers for height
};

const CategoryItem = ({
  title,
  description,
  imageSrc,
  imgWidth,
  imgHeight,
}: CategoryProps) => {
  return (
    <div className="w-[326px] h-[326px] flex flex-col items-center justify-center bg-white shadow-md rounded-3xl">
      {/* Circle Container */}
      <div className="w-[153px] h-[153px] flex items-center justify-center rounded-full bg-[#C1F1C6]">
        {/* Image with width and height */}
        <Image
          src={imageSrc}
          alt={title}
          width={imgWidth}
          height={imgHeight}
          className="object-contain"
        />
      </div>
      {/* Title and Description */}
      <h3 className="mt-4 text-lg font-semibold tracking-wider pt-2 text-center text-[#1E1E1E]">
        {title}
      </h3>
      <p className="text-gray-500 text-sm text-center">{description}</p>
    </div>
  );
};

// Main Category Grid Component
const CategoryGrid = () => {
  const categories = [
    {
      title: "Main Dish",
      description: "(86 dishes)",
      imageSrc: "/category1.png",
      imgWidth: 139, // Numeric width
      imgHeight: 102, // Numeric height
    },
    {
      title: "Breakfast",
      description: "(12 break fast)",
      imageSrc: "/category2.png",
      imgWidth: 110,
      imgHeight: 72,
    },
    {
      title: "Dessert",
      description: "(48 dessert)",
      imageSrc: "/category3.png",
      imgWidth: 111,
      imgHeight: 98,
    },
    {
      title: "Browse All",
      description: "(255 Items)",
      imageSrc: "/category4.png",
      imgWidth: 77,
      imgHeight: 92,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Heading and Subheading */}
      <div className="mb-8 text-center">
        <p className="text-red-500 text-sm tracking-wider font-semibold">
          CUSTOMER FAVORITES
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-wide text-black">
          Popular Categories
        </h2>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            title={category.title}
            description={category.description}
            imageSrc={category.imageSrc}
            imgWidth={category.imgWidth}
            imgHeight={category.imgHeight}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
