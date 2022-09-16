import './ThankYou.css';
import iconComplete from '../img/icon-complete.svg';
import React from 'react';

class ThankYou extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.addEventListener('click', this.initForm);
  }

  initForm = () => {
    this.props.resetForm();
    this.props.setForm(true);
  };

  render() {
    return (
      <div className={`thankyou ${this.props.form ? 'hide' : ''}`}>
        <img src={iconComplete} className="icon-complete" alt="icon-check" />
        <span className="thank-you--title">THANK YOU!</span>
        <p className="thank-you--text">We've added your card details</p>
        <div className="btn btn-submit thank-you--btn">
          <input ref={this.inputRef} type="submit" value="Continue" />
        </div>
      </div>
    );
  }
}

export default ThankYou;
