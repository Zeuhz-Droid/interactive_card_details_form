import './ThankYou.css';
import React from 'react';

class ThankYou extends React.Component {
  render() {
    return (
      <div className={`Thankyou ${this.props.form ? 'hide' : ''}`}>Thanks</div>
    );
  }
}

export default ThankYou;
