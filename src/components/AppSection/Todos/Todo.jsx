import React from "react";
import DeleteTodo from "./DeleteTodo";
import CheckTodo from "./CheckTodo";

function Todo({ id, title, completed, device }) {
  return (
    <div
      className={`flex flex-row items-center justify-between ${
        completed ? "bg-yellow-400" : "bg-yellow-100"
      } last:mb-0 mb-2`}>
      <CheckTodo id={id} completed={completed} />
      <span
        className={`${completed && "line-through"} mr-auto text-ellipsis mx-2`}>
        {title}
      </span>
      <DeleteTodo id={id} />
    </div>
  );
}

export default Todo;
