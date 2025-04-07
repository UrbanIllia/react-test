import Form from "./Form.jsx";
import initialTasks from "./task.json";
import Filter from "./Filter.jsx";
import TaskList from "./TaskList.jsx";
import css from "./App1.module.css";
import { useState } from "react";

const App1 = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");
  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };
  const visibleTask = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={css.container}>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTask} onDelete={deleteTask} />
    </div>
  );
};

export default App1;
