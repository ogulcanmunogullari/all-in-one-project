import React, { useState, memo } from "react";
import TodoAdd from "./TodoAdd";
import NoteAdd from "./NoteAdd";
import AddingButton from "./AddingButton";
import Timer from "./Timer/Timer";
import Todos from "../AppSection/Todos/Todos";
import { addTodo } from "../../store/Slicers/todoSlicer";
import { addNotes } from "../../store/Slicers/noteSlicer";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

function Form() {
  const [note, setNote] = useState("");
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const d = new Date();
  let day = `${d.getDate()} ${d.getMonth()} ${d.getFullYear()}`;
  const formHandle = (e) => {
    e.preventDefault();
    if (note.length === 0 && todo.length > 0) {
      dispatch(
        addTodo({
          id: nanoid(10),
          title: todo,
          completed: false,
        }),
      );
      setTodo("");
    } else if (note.length > 0 && todo.length === 0) {
      alert("Pls enter a title");
    } else if (note.length > 0 && todo.length > 0) {
      dispatch(
        addNotes({
          date: day,
          id: nanoid(10),
          isDisabled: true,
          note: note,
          title: todo,
          isOpened: false,
        }),
      );
      setTodo("");
      setNote("");
    } else {
      alert("Pls enter a title and a note");
    }
  };
  const windowWith = window.innerWidth;
  return (
    <section className="px-5 md:px-0 flex flex-col h-full">
      <form className="mt-5 p-5 bg-yellow-800" onSubmit={formHandle}>
        <TodoAdd todo={todo} setTodo={setTodo} />
        <NoteAdd note={note} setNote={setNote} />
        <AddingButton />
      </form>
      {windowWith >= 768 && (
        <>
          <section className="my-5">
            <Todos device={true} />
          </section>
          <div className="sticky mt-auto bottom-10">
            <Timer device={true} />
          </div>
        </>
      )}
    </section>
  );
}

export default Form;
