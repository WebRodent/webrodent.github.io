import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-primary">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#E439F4]/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#E439F4] rounded-full animate-spin border-t-transparent"></div>
      </div>
      <p className="mt-4 text-white text-lg">Laster inn...</p>
    </div>
  );
};

export default LoadingSpinner; 