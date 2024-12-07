import React, { useState } from "react";
import "../app.css";
import { affirmations } from "../components/Affirmations";

type Task = {
  id: number;
  description: string;
  completed: boolean;
};

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, description: "Update Resume", completed: false },
    { id: 2, description: "Apply to 3 jobs", completed: false },
    { id: 3, description: "Prepare for interview", completed: false },
  ]);

  const [currentAffirmation, setCurrentAffirmation] = useState<string>(
    affirmations[0]
  );

  const toggleTaskCompletion = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const generateAffirmation = (): void => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentAffirmation(affirmations[randomIndex]);
  };

  return (
    <div className="app">
      <header>
        <h1>PathFinder</h1>
      </header>

      <section className="affirmation-section">
        <h2>Daily Affirmation</h2>
        <p className="affirmation">{currentAffirmation}</p>
        <button onClick={generateAffirmation}>New Affirmation</button>
      </section>

      <section className="tasks-section">
        <h2>Your Tasks</h2>
        <ul className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                {task.description}
              </label>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
