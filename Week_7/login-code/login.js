import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './App.css';

class Login extends Component {

  constructor(props) {
    super(props);

    // Handlers for the login form
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    userName: '',
    password: '',
    // passwordConfirm: ''
  };

  // Replace the URL with your own web API URL
  url = "http://localhost:8080/api/useraccounts/login";

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    this.input.focus();
  }

  handleSubmit(e) {

    const credentials = {
      "userName": this.state.userName,
      "password": this.state.password,
    };

    // Remove old/existing access token
    localStorage.removeItem('access_token');

    // POST to login route at web API
    fetch(this.url, {
      method: 'POST',
      mode: 'cors',
      headers: { 
        // Currently in excess of what is needed; probably need only the first three
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, HEAD, OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin,Content-Type,Accept,Authorization,Expires,Pragma,x-custom-header"
      },
      body: JSON.stringify(credentials)
    })
    .then(response => {
      if (response.ok) {
        response.json()
        .then((data) => {
          localStorage.setItem('access_token', data.token);
          return this.props.history.push("/token");
        });
      } else if (response.status >= 400 && response.status < 500) {
        // Error caused by the requestor          
        throw Error(`HTTP ${response.status}, ${response.statusText}`);
      } else {
        throw Error(`HTTP ${response.status}, ${response.statusText}`);
      }
    })
    .catch(error => {
      // Handles an error thrown above, as well as network general errors
      console.log("Caught an error:", error.message);
    });
  }

  render() {
    document.title = 'Login';

    // Determine the button state
    const isDisabled =
       this.state.userName.length === 0
    || this.state.password.length === 0
    // || this.state.passwordConfirm.length === 0
    // || this.state.password !== this.state.passwordConfirm;

    return (
      <div>
        <h4>Login</h4>
        {/* <form onSubmit={this.handleSubmit}> */}
        <div className="form-horizontal">
          <p>Input your username and password, and click/tap the Login button</p>
          <hr />
          <div className="form-group">
            <label htmlFor="userName" className='control-label col-md-2'>Username</label>
            <div className="col-md-6">
              <input name="userName" className="form-control" ref={(i) => { this.input = i; }} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className='control-label col-md-2'>Password</label>
            <div className="col-md-6">
              <input type="password" name="password" className="form-control" onChange={this.handleChange} />
            </div>
          </div>
          {/* <div className="form-group">
            <label htmlFor="passwordConfirm" className='control-label col-md-2'>Confirm password</label>
            <div className="col-md-6">
              <input type="password" name="passwordConfirm" className="form-control" onChange={this.handleChange} />
            </div>
          </div> */}
          <div className="form-group">
            <div className="col-md-offset-2 col-md-6">
              <button disabled={isDisabled} onClick={this.handleSubmit} className="btn btn-primary">Login</button>&nbsp;&nbsp;
              <Link className='btn btn-default' to='/'>Cancel</Link>
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    );
  }
}

export default withRouter(Login);
