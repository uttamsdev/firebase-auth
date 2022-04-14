import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Please login</h1>
      <form>
        <input type="email" placeholder="Your Email" /> <br />
        <input type="password" placeholder="password ..." /> <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
export default Login;
