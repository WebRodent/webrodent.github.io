// src/app/components/ArrowButton.tsx
'use client';

import React from 'react';

const ArrowButton: React.FC = () => {
  const handleClick = () => {
    const element = document.getElementById('services-section');
    if (element) {
      const headerOffset = 70; // Adjust this value to match your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="absolute bottom-4 cursor-pointer"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-white animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default ArrowButton;
