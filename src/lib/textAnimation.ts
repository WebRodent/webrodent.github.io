import { useEffect, useRef } from 'react';

export default function useTextAnimation(isMobile: boolean, text: string) {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const blinkIntervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isMobile) {
      let i = 0;
      const intervalId = setInterval(() => {
        if (textRef.current) {
          if (i < text.length) {
            textRef.current.textContent = text.slice(0, i+1) + '_';
            i++;
          } else {
            textRef.current.textContent = text + '_'; // keep "_" character upon completion
            clearInterval(intervalId);

            // Start blinking
            let blink = true;
            blinkIntervalId.current = setInterval(() => {
              textRef.current!.textContent = blink ? text + '_' : text;
              blink = !blink;
            }, 500); // adjust blink speed as needed
          }
        } else {
          clearInterval(intervalId);
        }
      }, 100); // adjust speed as needed

      return () => {
        clearInterval(intervalId); // cleanup on unmount
        if (blinkIntervalId.current) clearInterval(blinkIntervalId.current); // cleanup blinking interval
      }
    }
  }, [isMobile, text]);

  return textRef;
}