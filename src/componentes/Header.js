import React from 'react';
import PropTypes from 'prop-types';
const Header = ({titulo}) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-3">
        <a href="#!" className="brand-logo center">{titulo}</a>
      </div>
      
    </nav>
  );
};

Header.propTypes = {
  titulo: propTypes.string.isRequired
}

export default Header;