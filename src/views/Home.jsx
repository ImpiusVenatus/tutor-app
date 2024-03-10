import Categories from "../components/Home/Categories";
import Featured from "../components/Home/Featured";
import HeroSection from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Stats from "../components/Home/Stats";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Stats />
      <Categories />
      <Testimonial />
      <Featured />
    </div>
  );
};

export default Home;
