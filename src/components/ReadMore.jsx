import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className=' text-center mx-7 md:mx-80'>
      {isTruncated ? (
        <div>
          <p>{text.slice(0, maxLength)}...</p>
          <button className=' text-blue' onClick={toggleTruncate}>
            Read More
          </button>
        </div>
      ) : (
        <div>
          <p>{text}</p>
          <button className=' text-blue' onClick={toggleTruncate}>
            Read Less
          </button>
        </div>
      )}
    </div>
  );
};

export default ReadMore;
