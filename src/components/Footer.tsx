import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Sakshi Khade</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              AI & Robotics Engineer | Building the future with data and intelligence
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="mb-3 sm:mb-4 p-2 sm:p-3 bg-maroon-600 hover:bg-maroon-700 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            <div className="flex items-center text-gray-400 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mx-1" />
              <span>by Sakshi Khade</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2024 Sakshi Khade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;