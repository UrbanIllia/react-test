import Form from "./Form.jsx";
import initialTasks from "./task.json";
import Filter from "./Filter.jsx";
import TaskList from "./TaskList.jsx";
import css from "./App1.module.css";
import { useState } from "react";

const App1 = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };
  const deleteTask = (taskId) => {
    console.log(taskId);
  };
  return (
    <div className={css.container}>
      <Form onAdd={addTask} />
      <Filter />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App1;
