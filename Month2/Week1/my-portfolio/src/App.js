import React from "react";
import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={profile} alt="Sargam" className="profile-img" />

        <h1>Hii 👋 I'm Sargam</h1>
        <p>Welcome to my React App 🚀</p>

        <button className="btn">Contact Me</button>
      </div>
    </div>
  );
}

export default App;