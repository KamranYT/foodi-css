import Image from "next/image";
import { Button } from "@/components/ui/button";

// components
import CategoryGrid from "@/components/Categories";
import SpecialDish from "@/components/Special";
import TestimonialSection from "@/components/reviews";
import Services from "./services/page";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none font-bold mt-10">
            <h1 className="h1 mb-6 text-black xl:text-6xl text-2xl ">
              Dive into Delights Of Delectable{" "}
              <span className="text-[#39DB4A]">Food</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-[#4A4A4A] font-medium text-2xl">
              Where Each Plate Weaves a Story of Culinary Mastery, Artful
              Creation, and Passionate Craftsmanship.
            </p>
            {/* Button */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
               // Border color and gradient
                className="h-16 uppercase flex items-center gap-2 tracking-wider text-white hover:bg-[#2EB93D]" // Inner button styles
                 // Optional: Animation duration for the moving border
                size="lg" // Pass additional props if needed
              >
                <span>Order Now</span>
                
              </Button>
            </div>
          </div>

          {/* Photo Section */}
          <div>
            <Image
              src="/girl.jpg"
              alt="Person with food"
              width={500}
              height={0}
              className="rounded-lg xl:w-full"
            />
          </div>
        </div>
      </div>

      {/* Components */}
      <CategoryGrid />
      <SpecialDish />
      <TestimonialSection />
      <Services />
    </section>
  );
};

export default Home;
