import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/calmind-logo.png"; // Make sure this path is correct

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic auth logic (mock)
    if (form.username && form.password) {
      localStorage.setItem("username", form.username);
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-purple-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
        
        <img
          src={logo}
          alt="Calmind Logo"
          className="mx-auto h-24 w-24 rounded-full shadow-md mb-4"
        />

        <h1 className="text-3xl font-bold text-purple-700 mb-2">Welcome Back</h1>
        <p className="text-gray-600 mb-6">Log in to continue your calm journey 🌿</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
