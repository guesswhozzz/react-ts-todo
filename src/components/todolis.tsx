import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
};

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((e) => {
        const classes = ["todo"];
        if (e.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={e.id}>
            <label htmlFor="">
              <input type="checkbox" checked={e.completed} />
              <span>{e.title}</span>
              <i className="material-icons red-text">delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
