import Header from "@/components/header"
import Hero from "@/components/hero";
import ProductFeatures from "@/components/productFeatures";
import ReviewSlider from "@/components/reviewsSlider";
import Info from "@/components/info";
import Footer from "@/components/footer";

// const Home = () => {
//   return (
//     <div>
//       {/* <Header />
//       <Hero />
//       <ProductFeatures />
//       <ReviewSlider />
//       <Info />
//       <Footer /> */}
      
//     </div>
//   )
// }

// export default Home


'use client'
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [view, setView] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  // Handle left and right navigation
  const handleLeft = () => {
    if (view > -1) setView(view - 1);
  };

  const handleRight = () => {
    if (view < 1) setView(view + 1);
  };

  // Calculate background position based on view
  const getBackgroundPosition = () => {
    if (view === -1) return 'left';
    if (view === 1) return 'right';
    return 'center';
  };

  // Handle touch start
  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // Handle touch move
  const handleTouchMove = (e: any) => {
    const touchEndX = e.touches[0].clientX;

    // Determine swipe direction
    if (touchStartX - touchEndX > 50) {
      handleRight(); // Swipe left to go to the right view
    }
    if (touchStartX - touchEndX < -50) {
      handleLeft(); // Swipe right to go to the left view
    }
  };

  // Adding event listeners for touch start and touch move
  useEffect(() => {
    const element = document.getElementById('swipe-container');

    if (element) {
      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchmove', handleTouchMove);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (element) {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [touchStartX]);

  return (
    <div id="swipe-container" className="relative h-screen w-screen overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `url('/test-1.jpg')`,
          backgroundPosition: getBackgroundPosition(),
        }}
      >
        {/* Example products positioned on different walls */}
        {view === -1 && (
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
            <button className="bg-white p-4 rounded shadow">Product on Left Wall</button>
          </div>
        )}
        {view === 0 && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="bg-white p-4 rounded shadow">Product on Center Wall</button>
          </div>
        )}
        {view === 1 && (
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
            <button className="bg-white p-4 rounded shadow">Product on Right Wall</button>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={handleLeft}
          disabled={view === -1}
          className="bg-black bg-opacity-50 text-white p-4 m-2 rounded-l"
        >
          ←
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={handleRight}
          disabled={view === 1}
          className="bg-black bg-opacity-50 text-white p-4 m-2 rounded-r"
        >
          →
        </button>
      </div>
    </div>
  );
}
