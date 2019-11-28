import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './components/style.css';

class App extends Component {
  render() {
    return (
      <div className='bg'>
        <div className='main-box'>
          <div className='header'>
            <h4>REDEFINING MOBILE<br />
              ADVERTISING</h4>
            <p className='para'>Please use this form to register.<br />
              If you are a member, please login.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));