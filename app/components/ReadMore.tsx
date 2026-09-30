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
          className="mt-3 inline-flex items-center gap-1 font-semibold text-blue-600 underline-offset-4 hover:text-fuchsia-600 hover:underline"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;