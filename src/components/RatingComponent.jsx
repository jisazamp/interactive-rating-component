import React from 'react';
import StarSvg from '../images/icon-star.svg';
import PropTypes from 'prop-types';

const RatingComponent = ({ onHandleRating, onRatingChange }) => {
  const numbers = ['1', '2', '3', '4', '5'];

  const handleInputClick = (e) => {
    onRatingChange(e.target.value);
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    onHandleRating(e);
  };

  return (
    <React.Fragment>
      <section className='card'>
        <form onSubmit={handleRatingSubmit}>
          {/* Start logo */}
          <span className='rating-component__start-container'>
            <img alt='Star logo' aria-label='Star Logo' src={StarSvg} />
          </span>

          {/* Section title */}
          <h2 className='section-title'>How did we do?</h2>

          {/* Paragraph content */}
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          {/* Inputs for the rating */}
          <fieldset>
            {numbers.map((e) => (
              <div key={e} className='form-group'>
                <input
                  onChange={handleInputClick}
                  className='radio-input'
                  name='rating'
                  type='radio'
                  value={e}
                  id={e}
                />
                <label htmlFor={e}>{e}</label>
              </div>
            ))}
          </fieldset>

          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

RatingComponent.propTypes = {
  onHandleRating: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default RatingComponent;
