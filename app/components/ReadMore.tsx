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
    <div>
      <p className="text-[1.05rem] leading-[1.8] text-stone-600">{displayText}</p>
      {shouldTruncate && (
        <button
          onClick={toggleReadMore}
          className="link-arrow mt-4"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;