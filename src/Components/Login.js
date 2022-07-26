import React, { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useLoginContext } from "../Contexts/LoginContext";

const Login = () => {
  const { Login, user } = useLoginContext();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await Login(email, password);
      navigate("/home");
    } catch (err) {
      alert(err.message);
    }
  };

  if (user) return <Navigate to="/home" />;

  return (
    <>
      <div className="FORM">
        <h1>Login</h1>
        <form onSubmit={HandleLogin} className="Login">
          <input
            type={"email"}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={"password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p className="center mt-2">
          Not a member? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
