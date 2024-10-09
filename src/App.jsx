import React from 'react';
import Header from './components/Header';
import LoyaltyCard from './components/LoyaltyCard';
import CategoryIcon from './components/CategoryIcon';
import LoveAllRecommendedBrands from './components/LoveAllRecommendedBrands';
import PopularNow from './components/PopularNow';
import TrendingOffers from './components/TrendingOffers';
import Enquiry from './components/Enquiry';
import { FiStar, FiShoppingBag, FiShoppingCart, FiCoffee, FiFilm, FiMap, FiMoreHorizontal } from 'react-icons/fi';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <div className="bg-gradient-to-b from-[#71012D] to-[#971132] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg
            id="wave"
            style={{ transform: 'rotate(180deg)', transition: '0.3s' }}
            viewBox="0 0 1440 490"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(113, 1, 45, 1)" offset="0%"></stop>
                <stop stopColor="rgba(151, 17, 50, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: 'translate(0, 0px)', opacity: 1 }}
              fill="url(#sw-gradient-0)"
              d="M0,49L80,89.8C160,131,320,212,480,212.3C640,212,800,131,960,81.7C1120,33,1280,16,1440,73.5C1600,131,1760,261,1920,269.5C2080,278,2240,163,2400,171.5C2560,180,2720,310,2880,351.2C3040,392,3200,343,3360,285.8C3520,229,3680,163,3840,122.5C4000,82,4160,65,4320,73.5C4480,82,4640,114,4800,163.3C4960,212,5120,278,5280,302.2C5440,327,5600,310,5760,302.2C5920,294,6080,294,6240,269.5C6400,245,6560,196,6720,147C6880,98,7040,49,7200,57.2C7360,65,7520,131,7680,155.2C7840,180,8000,163,8160,155.2C8320,147,8480,147,8640,196C8800,245,8960,343,9120,343C9280,343,9440,245,9600,212.3C9760,180,9920,212,10080,212.3C10240,212,10400,180,10560,147C10720,114,10880,82,11040,89.8C11200,98,11360,147,11440,171.5L11520,196L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"
            ></path>
          </svg>
        </div>
        <Header />
        <main className="container mx-auto px-4 py-8 relative z-10">
          <section className="mb-12 flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-1/2 text-white mb-8 lg:mb-0">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 font-poppins">WHAT IS A SOCIAL LOYALTY CARD?</h1>
              <p className="mb-4 text-sm sm:text-base">
                The Atria LoveAll Social Loyalty Card is designed to reward your loyalty and spread the love!
                <br />
                Redeem your points for exclusive rewards, discounts, and special experiences, our way of
                thanking you for being part of the Atria community.
              </p>
              <div className="flex space-x-4">
                <button className="bg-[#20B2AA] text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base hover:bg-[#3CCBC5] transition-colors duration-300">
                  Volunteer
                </button>
                <button className="bg-[#20B2AA] text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base hover:bg-[#3CCBC5] transition-colors duration-300">
                  Donate
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <LoyaltyCard />
            </div>
          </section>
        </main>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-auto">
            <path fill="#FFFFFF" fillOpacity="1" d="M0,96L80,106.7C160,117,320,139,480,133.3C640,128,800,96,960,90.7C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <div className="bg-white flex-grow">
        <div className="container mx-auto px-4 py-2">
          <div className="category-section mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
              <CategoryIcon Icon={FiStar} label="New" />
              <CategoryIcon Icon={FiCoffee} label="Food" />
              <CategoryIcon Icon={FiShoppingBag} label="Shopping" />
              <CategoryIcon Icon={FiShoppingBag} label="Fashion" />
              <CategoryIcon Icon={FiShoppingCart} label="Restaurants" />
              <CategoryIcon Icon={FiFilm} label="Entertainment" />
              <CategoryIcon Icon={FiMap} label="Travel" />
              <CategoryIcon Icon={FiMoreHorizontal} label="More" />
            </div>
          </div>
          <LoveAllRecommendedBrands />
          <PopularNow />
          <TrendingOffers />
          <Enquiry />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;