import React from 'react';
import './LoginPage.css'; // You can define your styles in a separate CSS file

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1 className="app-title">Ecobridge</h1>
      <div className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-button">Login</button>
      </div>
      <button className="signup-button">Sign Up</button>
    </div>
  );
};

export default LoginPage;
