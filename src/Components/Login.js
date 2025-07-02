import React, { useState } from "react";
import "./login.css";
import { toast, ToastContainer } from "react-toastify";

import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://arogyadarshi-backend.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const resdata = await response.json();

      if (response.ok) {
        toast.success(
          <div>
            Login successful! <br />
            Name: {resdata.user.name} <br />
            Email: {resdata.user.email}
          </div>,

          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );

        document.cookie = `token=${resdata.token}; path=/; max-age=3600;`;
        localStorage.setItem("token", resdata.token);
        props.setlogedin(true);

        // Delay navigation to let toast show
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("Network error. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="signup-container">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnHover
        draggable
        closeOnClick
        pauseOnFocusLoss={false}
      />
      <h2>Enter your details</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submitbtn">
          Login
        </button>
        <p>
          Not registered? Click to <a href="/signup">Signup </a>
        </p>
      </form>
    </div>
  );
}
