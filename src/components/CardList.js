import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const CardList = ({ robots }) => (
  <div>
    {robots.map((user, i) => (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    ))}
  </div>
);

CardList.propTypes = {
  robots: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
