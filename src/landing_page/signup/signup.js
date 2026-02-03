import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Signup() {
     //values
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     //errors
     const [nameError, setNameError] = useState("");
     const [emailError, setEmailError] = useState("");
     const [passwordError, setPasswordError] = useState("");
     //message
     const [message, setMessage] = useState("");
     const [messageType, setMessageType] = useState(""); // "success" | "error"

     const navigate = useNavigate();

     function handleSubmit() {
          //form validation
          let isValid = true;

          if (!name) {
               setNameError("This field is mandatory");
               isValid = false;
          } else {
               setNameError("");
          }

          if (!email) {
               setEmailError("This field is mandatory");
               isValid = false;
          } else {
               setEmailError("");
          }

          if (!password) {
               setPasswordError("This field is mandatory");
               isValid = false;
          } else {
               setPasswordError("");
          }

          axios.post("http://localhost:3002/signup", {
               name,
               email,
               password,
          })
               .then((res) => {
                    setMessage(res.data.message);
                    setMessageType("success")

                    setTimeout(() => {
                         navigate("/login");
                    }, 1500);
               })
               .catch((err) => {
                    setMessage(err.response?.data?.message || "Server error");
                    setMessageType("error");
               });

     }

     return (
          <div className='row d-flex mt-5'>
               <div className='col d-flex justify-content-center ' style={{ alignItems: "center" }}>
                    <img src="./media/email.svg" alt="email" />
               </div>

               <div className='col-6 mt-5'>
                    <h2>What's your e-mail?</h2>
                    <input placeholder="Enter your name" className="p-2 mt-4 d-flex gap-3 " onChange={(e) => setName(e.target.value)} />
                    {nameError && <p style={{ color: "red" }}>{nameError}</p>}
                    <input placeholder="Enter your email" className="p-2 mt-4 d-flex gap-3 " onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                    <input placeholder="Create password" className="p-2 mt-4 d-flex gap-3 " onChange={(e) => setPassword(e.target.value)} />
                    {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

                    {message && (
                         <p style={{ color: messageType === "error" ? "red" : "green" }}>
                              {message}
                         </p>
                    )}

                    <button className="mt-3 btn btn-primary " onClick={handleSubmit}>Submit</button>
                    <p style={{ marginTop: "10px" }}>
                         Already have an account?{" "}
                         <span
                              onClick={() => navigate("/login")}
                              style={{ color:"rgb(0,102,204)", cursor: "pointer" }}
                         >
                              Login
                         </span>
                    </p>


               </div>

          </div>
     );
}

export default Signup;