import CategoryGrid from "@/components/Categories";
import Hero from "@/components/Hero";
import TestimonialSection from "@/components/reviews";


const Home = () => {
  return (
    <section className="h-full">

      {/* Components */}
      <Hero />
      <CategoryGrid />
      <TestimonialSection />
      
    </section>
  );
};

export default Home;
