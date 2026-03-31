import React , { useState } from "react";
import { useEffect } from 'react';
import axios from "axios";

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");


  useEffect(()=>{
    axios
    .get("https://tradex-backend-rr34.onrender.com/profile",{
      withCredentials: true,
    })
    //if user already logged in redirect to dashboard
    .then(()=>{
      window.location.href = "https://tradex-dashboard-9v17.onrender.com"
    })
    .catch(()=>{
      console.log("User not Logged in");
    });
  },[]);

  function handleLogin() {
    axios
      .post("https://tradex-backend-rr34.onrender.com/login", { email, password },{ withCredentials: true })
      .then((res) => {
        setMessage(res.data.message);
        setMessageType("success");

          setTimeout(() => {
                window.location.href = "https://tradex-dashboard-9v17.onrender.com";
          },1000);
      })
      .catch((err) => {
        setMessage(err.response?.data?.message || "Server error");
        setMessageType("error");
      });
  }


    return(
    <div className="row d-flex mt-5">
      <div className="col-6 offset-3 mt-5">
        <h2>Login</h2>
        <input
          placeholder="Enter your email"
          className="p-2 mt-4 d-flex gap-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="p-2 mt-4 d-flex gap-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        {message && (
          <p style={{ color: messageType === "error" ? "red" : "green" }}>
            {message}
          </p>
        )}

        <button className="mt-3 btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;