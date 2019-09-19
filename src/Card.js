import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.js';


const Creditcard=(props)=>
<div className="credit-card">
  <h1 className="credit-card-title"> {props.companyname}</h1>
  <div className="credit-card-chip"/>
  <div className="credit-card-content">
    <div className="credit-card-text">
      <h2 className="credit-card-number">
        {props.cardNumber}
      </h2>
      <h2 className="credit-card-valid-thru">
        {props.validThru}
      </h2>
      <h2 className="credit-card-holder-name">
        {props.cardholder}
      </h2>
    </div>
    <div className="credit-card-logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1024px-MasterCard_Logo.svg.png"/>
      <img src="https://cdn.imgbin.com/23/25/4/imgbin-logo-visa-electron-credit-card-debit-card-visa-Nswp746cPW6dc3bGh2fyAXmhQ.jpg"/>

    </div>
    </div>

  </div>

export default  Creditcard;
