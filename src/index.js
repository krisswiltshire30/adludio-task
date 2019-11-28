import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './components/style.css';

class App extends Component {
  render() {
    return (
      <div className='bg'>
        <div className='main-box'>
          <div className='header'>
            <h4>REDEFINING MOBILE<br />ADVERTISING</h4>
            <p className='para'>Please use this form to register. <br />
              If you are a member, please login.
              </p>
            <button className="google-button">
              <img src={require("./components/images/google.png")} alt="Google Logo" width="17" height="17" />
              Sign in with Google
            </button>
          </div>
          <img className='logo' src={require("./components/images/asset3.png")} alt="adludio-logo" />
          <form>
            <p className='reg'>Register</p>
            <input className='form-input1' id="name" placeholder='Full name' />
            <input className='form-input2' id="email" placeholder='Email' />
            <input className='form-input3' id="email" placeholder='Password' />
            <button type='submit' className='button'>REGISTER</button>
          </form>
        </div>
      </div >
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));