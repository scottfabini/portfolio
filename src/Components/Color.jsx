import React from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  Color.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    onRate: PropTypes.func.isRequired,
  };

  return (
    <section>
      <h1>{title}</h1>
      {/*
      Coming back to this after a while away...
      onRemove is a (custom?) hook (?) into the state of `colors` in App.js state?
      No, this is a pre-hooks version. We need to have the state-modifying
      functions (onRate, onRemove) passed all of the way down from App.yml to here.
      Doesn't seem like a good approach. But it works.
      I suspect Hooks will make it easier? */}
      <button type="button" onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        // Note that `rating` is being passed back UP the component tree via function properties
        // to onRate()
        onRate={(newRating) => onRate(id, newRating)}
      />
    </section>
  );
}
