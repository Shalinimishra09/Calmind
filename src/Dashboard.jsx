import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import logo from './assets/calmind-logo.png';

const data = [
  { name: "Jan", calories: 600 },
  { name: "Feb", calories: 700 },
  { name: "Mar", calories: 500 },
  { name: "Apr", calories: 750 },
  { name: "May", calories: 800 },
  { name: "Jun", calories: 950 },
  { name: "Jul", calories: 1200 },
  { name: "Aug", calories: 850 },
  { name: "Sep", calories: 800 },
  { name: "Oct", calories: 780 },
  { name: "Nov", calories: 760 },
  { name: "Dec", calories: 790 },
];

const habits = [
  { title: "Morning run", time: "7:00 am", location: "Park" },
  { title: "8 glasses a day", time: "10:00 pm", location: "Home" },
  { title: "Reading", time: "10:00 pm", duration: "1h" },
];

export default function Dashboard() {
  const username = localStorage.getItem("username") || "there";
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="bg-purple-100 p-4 shadow-md flex items-center justify-between">
        <img src={logo} alt="Calmind Logo" className="h-16 w-16 rounded-full shadow" />
        <p className="text-2xl font-bold text-purple-800">Calmind</p>
        <ul className="flex space-x-6 text-purple-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><a href="#meditation">Meditation</a></li>
          <li><a href="#habit-tracker">Habits</a></li>
          <li><a href="#calories">Calories</a></li>
          <li><a href="#about">About</a></li>
          <li><button onClick={handleLogout} className="bg-yellow-400 px-3 py-1 rounded text-white hover:bg-yellow-500">Logout</button></li>
        </ul>
      </nav>

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Hi, {username} 😉</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl shadow-md bg-yellow-50">
            <h2 className="text-lg font-semibold mb-2">Calories</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="calories" fill="#FDE68A" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="p-4 rounded-xl shadow-md bg-purple-50">
            <h2 className="text-lg font-semibold mb-2">Daily Progress</h2>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500" style={{ width: "85%" }}></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Keep working on your nutrition and sleep
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl shadow-md bg-yellow-100">
            <h2 className="text-lg font-semibold mb-4">Habit Tracker</h2>
            <ul className="space-y-2">
              {habits.map((habit, index) => (
                <li
                  key={index}
                  className="flex items-start justify-between p-3 bg-white rounded-xl shadow-sm"
                >
                  <div>
                    <p className="font-medium">{habit.title}</p>
                    <p className="text-sm text-gray-600">
                      {habit.time} • {habit.location || habit.duration}
                    </p>
                  </div>
                  <input type="checkbox" className="accent-purple-500 w-5 h-5" defaultChecked />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center bg-purple-100 p-6 rounded-xl shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              alt="Meditation"
              className="w-24 h-24 mb-3"
            />
            <h2 className="text-xl font-semibold">Meditation</h2>
            <p className="text-sm text-gray-700 mb-2 text-center">
              Good vibes, good life
              <br />Positive thinking | 1 min
            </p>
            <button className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600">
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
