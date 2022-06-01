import React from 'react';
import PropTypes from 'prop-types';
import ThankYouSvg from '../images/illustration-thank-you.svg';

const ThankYou = ({ rating }) => {
  return (
    <section className='card'>
      <img alt='Smartphone illustration' src={ThankYouSvg} />

      <div id='userRating'>{`You selected ${rating} out of 5`}</div>
      <h2
        style={{ marginTop: '1em', marginBottom: '0.5em' }}
        className='section-title'
      >
        Thank you!
      </h2>
      <p style={{ textAlign: 'center', margin: 0 }}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch
      </p>
    </section>
  );
};

ThankYou.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default ThankYou;
