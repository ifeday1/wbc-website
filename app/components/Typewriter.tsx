'use client';

import { useState, useEffect, useCallback } from 'react';

const phrases = [
  'Learn Together',
  'Worship Together',
  'Grow Together',
  'Serve Together',
  'Celebrate Together',
  'Belong Together',
  'Connect Together',
];

const Typewriter = ({ prefix = 'A Place to' }: { prefix?: string }) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const phrase = phrases[currentPhrase];

  const type = useCallback(() => {
    if (!isDeleting) {
      // Typing
      if (currentText.length < phrase.length) {
        setCurrentText(phrase.slice(0, currentText.length + 1));
      } else {
        // Pause after typing, then start deleting
        setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        setCurrentText(phrase.slice(0, currentText.length - 1));
      } else {
        // Move to next phrase
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }
    }
  }, [currentText, isDeleting, phrase]);

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 30 : currentText.length === phrase.length - 1 ? 100 : 80);
    return () => clearTimeout(timer);
  }, [type, currentText, isDeleting, phrase.length]);

  // Blinking cursor
  useEffect(() => {
    const cursorTimer = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <h2 className="heading-xl min-h-[2.2em]">
      {prefix}{' '}
      <span className="text-gold-500">
        {currentText}
        <span className={`inline-block w-0.5 h-9 md:h-12 bg-gold-500 ml-1 align-middle transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
      </span>
    </h2>
  );
};

export default Typewriter;