import React from 'react';
import { Link } from 'react-router-dom';

import './styles/NavBar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar_text" to="/TytusDS/">
            <span className="font-weight-light">TytusDS</span>
          </Link>
        </div>
      </nav>
    )
  }
}

export default Navbar;