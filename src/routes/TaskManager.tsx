import { useState } from "react";

type Task = {
  id: number;
  description: string;
  completed: boolean;
};

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, description: "Update Resume", completed: false },
    { id: 2, description: "Apply to 3 jobs", completed: false },
    { id: 3, description: "Prepare for interview", completed: false },
  ]);

  const toggleTaskCompletion = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <>
      <h1>task manager</h1>
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
    </>
  );
};

export default TaskManager;
