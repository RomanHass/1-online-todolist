import React from "react";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";

function App() {
  // BLL
  const todolistTitle_1 = "What to learn";
  const todolistTitle_2 = "What to buy";

  const tasks_1: Array<TaskType> = [
    { id: 1, title: "HTML", isDone: true },    
    { id: 2, title: "CSS", isDone: true },    
    { id: 3, title: "JS/TS", isDone: false },    
  ];

  const tasks_2: Array<TaskType> = [
    { id: 1, title: "Cola", isDone: true },    
    { id: 2, title: "Whiskey", isDone: true },    
    { id: 3, title: "Ice", isDone: false },    
  ];

  // UI
  return (
    <div className="App">
      <Todolist title={todolistTitle_1} tasks={tasks_1} />
      <Todolist title={todolistTitle_2} tasks={tasks_2} />
    </div>
    
  );
}

export default App;
