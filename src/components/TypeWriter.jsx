import { useState, useEffect } from 'react';

export function TypeWriter({ text, speed = 50, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset text when the component mounts or dependencies change
    setDisplayedText('');
    setIsComplete(false);

    let timeoutId;
    let intervalId;

    timeoutId = setTimeout(() => {
      let index = 0;
      intervalId = setInterval(() => {
        setDisplayedText((prev) => {
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
  }, [text, speed, delay]);

  return (
    <span className="font-mono text-green-700 dark:text-green-500">
      {displayedText}
      {!isComplete && <span className="animate-pulse">▌</span>}
    </span>
  );
}
