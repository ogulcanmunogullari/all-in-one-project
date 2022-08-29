import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

function Todos({ device }) {
  const TODOS = useSelector((state) => state.todoSlicer.todos);
  return (
    <div className={`bg-orange-500 ${device && "p-5"}`}>
      <h1 className="flex justify-center text-lg bg-yellow-100">TODOS</h1>
      {TODOS.map((todo) => {
        return (
          <Todo
            device={device}
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
