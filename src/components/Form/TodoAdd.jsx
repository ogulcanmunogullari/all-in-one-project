import React, { memo } from "react";

function TodoAdd({ todo, setTodo }) {
  return (
    <section className="flex justify-center">
      <input
        className="w-full md:w-3/4"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a todo / Note title"
        pattern="[\w\d\sşŞıİğĞöÖüÜçÇ]+"
        title="Only alphanumeric characters allowed and short texts"
      />
    </section>
  );
}

export default TodoAdd;
