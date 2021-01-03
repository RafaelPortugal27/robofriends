import React from 'react';
import PropTypes from 'prop-types';

const Scroll = ({ children }) => (
  <div style={{ overflow: 'scroll', border: '5px solid black' }}>
    {children}
  </div>
);

Scroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Scroll;
