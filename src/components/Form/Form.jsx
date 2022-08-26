import React, { useState } from "react";
import TodoAdd from "./TodoAdd";
import NoteAdd from "./NoteAdd";
import AddingButton from "./AddingButton";
import { addTodo } from "../../store/Slicers/todoSlicer";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

function Form() {
  const [note, setNote] = useState("");
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const formHandle = (e) => {
    e.preventDefault();
    if (note.length === 0 && todo.length > 0) {
      dispatch(
        addTodo({
          id: nanoid(),
          title: todo,
          completed: false,
        }),
      );
      setTodo("");
    } else if (note.length > 0 && todo.length === 0) {
      alert("Pls enter a title");
    } else if (note.length > 0 && todo.length > 0) {
      console.log("title: " + todo + "\nnote: " + note);
    } else {
      alert("Pls enter a title and a note");
    }
  };
  return (
    <form onSubmit={formHandle} className="px-10 my-10 md:px-0">
      <TodoAdd todo={todo} setTodo={setTodo} />
      <NoteAdd note={note} setNote={setNote} />
      <AddingButton />
    </form>
  );
}

export default Form;
