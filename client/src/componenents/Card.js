import React from 'react';
import PropTypes from 'prop-types';

// Card component for displaying a habit
const Card = ({ habitName, completedDays }) => {
  return (
    <div className="card">
      <h2 className="card-title">{habitName}</h2>
      <p className="card-completed">Completed Days: {completedDays}</p>
      {/* Category and frequency are hidden for now */}
    </div>
  );
};

Card.propTypes = {
  habitName: PropTypes.string.isRequired,
  completedDays: PropTypes.number.isRequired,
};

export default Card;
