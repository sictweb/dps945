import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
// Notice the following...
import * as jwt_decode from 'jwt-decode';

class TokenView extends Component {

  // Class properties 
   state = {
      tokenRaw: '(no token)', 
      tokenDecoded: { userName: '', fullName: '', role: '' }, 
      tokenIssuedTimestamp: ''
   } 

   componentDidMount() {
      let raw = localStorage.getItem('access_token');
      
      if (raw) {
        let decoded = jwt_decode(raw);
        let timestamp = decoded.iat * 1000;

        this.setState({
          tokenRaw: raw,
          tokenDecoded: decoded,
          tokenIssuedTimestamp: timestamp
        });  
      }
   }

   render() {
      return (
         <div className="container">
            <header><h4>View token, fetched from local storage</h4></header>
            <div className="row">
               <dl className="dl-horizontal">
                  <dt>Raw string value</dt>
                  <dd>{this.state.tokenRaw}</dd>
                  <dt>Decoded payload</dt>
                  <dd>{ JSON.stringify(this.state.tokenDecoded) }</dd>
                  <dt>User name</dt>
                  <dd>{ this.state.tokenDecoded.email }</dd>
                  <dt>Issued date-and-time</dt>
                  <dd>{ this.state.tokenIssuedTimestamp }</dd>
               </dl>
            </div>
         </div>
      )
   }
}

export default withRouter(TokenView);
