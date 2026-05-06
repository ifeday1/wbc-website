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
    <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
      {prefix}{' '}
      <span className="text-blue-600">
        {currentText}
        <span className={`inline-block w-1 h-8 md:h-10 bg-blue-600 ml-1 align-middle transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
      </span>
    </h1>
  );
};

export default Typewriter;