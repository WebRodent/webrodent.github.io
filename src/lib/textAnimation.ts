import { useEffect, useRef } from 'react';

export default function useTextAnimation(isMobile: boolean) {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!isMobile) {
      const text = "Welcome to the Web Rodent Nest";
      let i = 0;
      const intervalId = setInterval(() => {
        if (textRef.current) {
          if (i < text.length) {
            textRef.current.textContent = text.slice(0, i+1) + '_';
            i++;
          } else {
            textRef.current.textContent = text; // remove "_" character upon completion
            clearInterval(intervalId);
          }
        } else {
          clearInterval(intervalId);
        }
      }, 100); // adjust speed as needed

      return () => clearInterval(intervalId); // cleanup on unmount
    }
  }, [isMobile]);

  return textRef;
}