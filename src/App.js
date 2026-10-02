import React, { useState, useEffect } from "react";
import SkillCard from "./Components/SkillCard";
import "./App.css";

function App() {
  const [skills, setSkills] = useState([
    {
      id: 1,
      title: "React JS",
      category: "Frontend",
    },
    {
      id: 2,
      title: "Cisco Networking",
      category: "Networking",
    },
    {
      id: 3,
      title: "MATLAB",
      category: "Engineering",
    },
  ]);

  const [newSkill, setNewSkill] = useState("");
  const [category, setCategory] = useState("Frontend");

  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", skills.length);
  }, [skills]);

  const addSkill = () => {
    if (newSkill.trim() === "") {
      alert("Please enter a skill!");
      return;
    }

    const skill = {
      id: Date.now(),
      title: newSkill,
      category: category,
    };

    setSkills([...skills, skill]);
    setNewSkill("");
  };

  return (
    <div className="container">
      <h1>🚀 SkillSprint</h1>

      <p className="subtitle">
        Learn • Track • Grow
      </p>

      <div className="counter">
        Skills Added: {skills.length}
      </div>

      <p className="quote">
        "Small progress every day leads to big results."
      </p>

      <div className="form-section">
        <input
          type="text"
          placeholder="Enter Skill Name"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Frontend</option>
          <option>Backend</option>
          <option>Networking</option>
          <option>Engineering</option>
          <option>Cyber Security</option>
        </select>

        <button onClick={addSkill}>
          Add Skill
        </button>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
}

export default App;