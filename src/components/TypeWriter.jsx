import { useState, useEffect } from 'react';

export function TypeWriter({ text, speed = 25, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();

    if (media.addEventListener) {
      media.addEventListener('change', updatePreference);
      return () => media.removeEventListener('change', updatePreference);
    }

    media.addListener(updatePreference);
    return () => media.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    // Reset text when the component mounts or dependencies change
    setDisplayedText('');
    setIsComplete(false);

    let timeoutId;
    let intervalId;

    if (reduceMotion) {
      setDisplayedText(text);
      setIsComplete(true);
      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    }

    timeoutId = setTimeout(() => {
      let index = 0;
      intervalId = setInterval(() => {
        setDisplayedText(() => {
          // Always use the original text and its substring to avoid race conditions
          const nextText = text.slice(0, index + 1);
          index++;
          
          if (index >= text.length) {
            clearInterval(intervalId);
            setIsComplete(true);
          }
          
          return nextText;
        });
      }, speed);
    }, delay);

    // Properly clear BOTH timers on unmount to prevent React Strict Mode duplicate bugs
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay, reduceMotion]);

  return (
    <span className="font-mono text-green-700 dark:text-green-500">
      {displayedText}
      {!isComplete && <span className="animate-pulse">▌</span>}
    </span>
  );
}
