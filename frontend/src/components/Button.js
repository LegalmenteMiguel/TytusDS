import React from 'react';

import './styles/Button.css';

class Button extends React.Component {
  render() {
    return (
      <div className="Button">
        <div className="Button_header"></div>

        <div className="Button_section-logo">
            <img className="Button_logo" src={this.props.logo} alt="Logo" />
        </div>

        <div className="Button_section-name">
          <h3>{this.props.name}</h3>
        </div>
      </div>
    );
  }
}

export default Button;