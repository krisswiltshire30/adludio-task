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
              If you are a member, please <a className='link' href='root'>login</a>.
              </p>
            <button className="google-button">
              <img src={require("./components/images/google.png")} alt="Google Logo" />
              Sign in with Google
            </button>
          </div>
          <img className='logo' src={require("./components/images/asset3.png")} alt="adludio-logo" />
          <form>
            <p className='reg'>Register</p>
            <input type='text' className='form-input1' id="name" placeholder='Full name' />
            <input type='text' className='form-input2' id="email" placeholder='Email' />
            <input type='password' className='form-input3' id="password" placeholder='Password' />
            <button type='submit' className='button'>REGISTER</button>
          </form>
        </div>
      </div >
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));