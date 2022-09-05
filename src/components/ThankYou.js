import './ThankYou.css';
import React from 'react';

class ThankYou extends React.Component {
  render() {
    return (
      <div className={`Thankyou ${this.props.form ? 'hide' : ''}`}>
        THANK YOU!
        <p>We've added your card details</p>
        <div className="btn btn-submit">
            <input type="submit" value="Continue" />
        </div>
      </div>
    );
  }
}

export default ThankYou;
