import { Button } from "./Button";

export type TaskType = {
  id: number
  title: string
  isDone: boolean
};

type TodolistPropsType = {
  title: string
  tasks: Array<TaskType>
};

export const Todolist = (props: TodolistPropsType) => { 

  const tasksList: Array<JSX.Element> = props.tasks.map((task: TaskType) => {
    return (
      <li key={task.id}>
        <input type="checkbox" checked={task.isDone} /> 
        <span>{task.title}</span>
      </li>
    );
  });

  return (
    <div className="todolist">
      <h3>{props.title}</h3>
      <div>
        <input />
        <Button title="+" />
      </div>
      <ul>
        {tasksList}
      </ul>
      <div>
        <Button title="All" />
        <Button title="Active" />
        <Button title="Completed" />
      </div>
    </div>
  );
};