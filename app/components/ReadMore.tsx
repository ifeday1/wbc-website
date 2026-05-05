'use client';

import { useState } from 'react';

interface ReadMoreProps {
  text: string;
  maxLength: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldTruncate = text.length > maxLength;
  const displayText = isExpanded || !shouldTruncate ? text : text.substring(0, maxLength) + '...';

  return (
    <div className="p-4">
      <p className="text-gray-700 leading-relaxed">{displayText}</p>
      {shouldTruncate && (
        <button
          onClick={toggleReadMore}
          className="text-blue-600 hover:text-blue-800 font-medium mt-2"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;