import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function Todos() {
  const TODOS = useSelector((state) => state.todoSlicer.todos);
  return (
    <div className="bg-orange-500">
      <h1 className="flex justify-center">TODOS</h1>
      {TODOS.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
}

export default Todos;
