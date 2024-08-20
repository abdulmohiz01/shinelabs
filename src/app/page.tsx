import Header from "@/components/header"
import Hero from "@/components/hero";
import ProductFeatures from "@/components/productFeatures";
import ReviewSlider from "@/components/reviewsSlider";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductFeatures />
      <ReviewSlider />
    </div>
  )
}

export default Home