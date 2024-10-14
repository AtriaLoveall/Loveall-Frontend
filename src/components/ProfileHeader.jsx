import React from 'react';
import Header from './Header';
import { FiEdit2 } from 'react-icons/fi';

export default function ProfileHeader() {
  return (
    <div className="relative bg-gradient-to-b from-[#71012D] to-[#971132] text-white overflow-hidden min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 2xl:mb-8 text-center transition-all duration-300">
          Your Profile
        </h1>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center max-w-4xl mx-auto 2xl:max-w-6xl">
          <div className="relative mb-4 sm:mb-0 sm:mr-6 md:mr-8">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="User avatar"
              className="rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 2xl:w-40 2xl:h-40 object-cover border-4 border-white transition-all duration-300"
            />
            <button 
              className="absolute bottom-0 right-0 bg-white p-1.5 sm:p-2 rounded-full shadow-lg" 
              aria-label="Edit profile picture"
            >
              <FiEdit2 className="text-[#71012D]" size={16} />
            </button>
          </div>
          <div className="text-center sm:text-left flex-grow">
            <h2 className="text-xl sm:text-2xl md:text-3xl 2xl:text-2xl font-bold mt-2 sm:mt-0 flex items-center flex-wrap justify-center sm:justify-start transition-all duration-300">
              Karthik Krishnamoorthi
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-5 2xl:h-5 ml-2 text-blue-500 transition-all duration-300">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </h2>
            <p className="text-base sm:text-lg 2xl:text-base mt-2 space-y-1 sm:space-y-0 transition-all duration-300">
              <span className="block sm:inline">9999-888-888</span>
              <span className="hidden sm:inline mx-2">|</span>
              <span className="block sm:inline">itskartik@atria.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-auto">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,96L80,106.7C160,117,320,139,480,133.3C640,128,800,96,960,90.7C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}