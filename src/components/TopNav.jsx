import React from 'react';
import { Link } from 'gatsby';

import './TopNav.scss';

const TopNav = () => (
  <div className="TopNav">
    <div className="tabs">
      <div className="tab">
        <Link to="/About">
          <h2>About</h2>
        </Link>
      </div>
      <div className="tab">
        <Link to="/Projects">
          <h2>Projects</h2>
        </Link>
      </div>

      <div className="tab">
        <Link to="/Blog">
          <h2>Blog</h2>
        </Link>
      </div>
    </div>
  </div>
);

export default TopNav;
