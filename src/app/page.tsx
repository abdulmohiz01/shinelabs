import Header from "@/components/header"
import Hero from "@/components/hero";
import ProductFeatures from "@/components/productFeatures";
import ReviewSlider from "@/components/reviewsSlider";
import Info from "@/components/info";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductFeatures />
      <ReviewSlider />
      <Info />
      <Footer />
    </div>
  )
}

export default Home