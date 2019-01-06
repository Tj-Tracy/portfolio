import PropTypes from 'prop-types';
import React from 'react';

import './header.scss';

const Header = ({ siteTitle }) => (
  <div className="Heading">
    <h1 className="title">TJ Tracy</h1>
    <div className="lineBreak" />
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `TJ Tracy`,
};

export default Header;
