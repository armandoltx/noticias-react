import React from 'react';

const Header = ({titulo}) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-3">
        <a className="brand-logo center">{titulo}</a>
      </div>
      
    </nav>
  );
};

export default Header;