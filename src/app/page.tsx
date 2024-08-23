import Header from "@/components/header"
import Hero from "@/components/hero";
import ProductFeatures from "@/components/productFeatures";
import ReviewSlider from "@/components/reviewsSlider";
import Info from "@/components/info";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductFeatures />
      <ReviewSlider />
      <Info />
      <h2>2+2=?</h2>
    </div>
  )
}

export default Home