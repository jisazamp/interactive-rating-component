import React, { useState } from 'react';
import RatingComponent from './components/RatingComponent';
import ThankYou from './components/ThankYou';

const App = () => {
  const [rating, setRating] = useState('0');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (r) => {
    setRating(r);
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return !submitted ? (
    <RatingComponent
      onHandleRating={handleRatingSubmit}
      onRatingChange={handleRatingChange}
    />
  ) : (
    <ThankYou rating={rating} />
  );
};

export default App;
