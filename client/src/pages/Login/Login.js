import {BrowserRouter as Router, Switch, Link } from "react-router-dom"

import "./styles.css";

const Login = () => {
  return (
    <main className="loginpage">
      <h3 className="loginpage__header">Welcome Back!</h3>
      <form className="loginpage__window">
        <div className="loginpage__window__username">
          <label className="loginpage__window__username__label">EMAIL OR USERNAME</label>
          <input className="loginpage__window__username__input"></input>
        </div>
        <div className="loginpage__window__password">
          <label className="loginpage__window__password__label">PASSWORD</label>
          <input className="loginpage__window__password__input" type="password"></input>
        </div>
        <Link className="loginpage__window__submit" to="/home">Login</Link>
      </form>
    </main>
  );
};
export default Login;
