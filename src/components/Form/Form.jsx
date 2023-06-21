import React, { useState } from "react"
import TodoAdd from "./TodoAdd"
import NoteAdd from "./NoteAdd"
import AddingButton from "./AddingButton"
import Todos from "../AppSection/Todos/Todos"
import Dialog from "./Timer/Dialog"
import { addTodo } from "../../store/Slicers/todoSlicer"
import { addNotes } from "../../store/Slicers/noteSlicer"
import { nanoid } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"

function Form() {
  const [note, setNote] = useState("")
  const [todo, setTodo] = useState("")
  const [todoVal, setTodoVal] = useState(true)
  const theme = useSelector((state) => state.themeSlicer.theme)
  const dispatch = useDispatch()
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  }
  const d = new Date()
  let day = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
  const formHandle = (e) => {
    e.preventDefault()
    if (note.length === 0 && todo.length > 0 && todoVal) {
      dispatch(
        addTodo({
          id: nanoid(10),
          title: todo,
          completed: false,
        }),
      )
      setTodo("")
    } else if (note.length > 0 && todo.length === 0 && !todoVal) {
      alert("Pls enter a title")
    } else if (note.length > 0 && todo.length > 0 && todoVal) {
      dispatch(
        addNotes({
          date: day,
          id: nanoid(10),
          isDisabled: true,
          note: note,
          title: todo,
          isOpened: false,
        }),
      )
      setTodo("")
      setNote("")
    } else {
      alert("Pls enter a title and a note")
    }
  }
  const windowWith = window.innerWidth
  return (
    <section className="flex flex-col">
      <form
        className={`p-5 flex flex-col justify-center sticky top-16 z-40 ${theme ? "bg-slate-200" : "bg-slate-500"
          }`}
        onSubmit={formHandle}>
        <TodoAdd
          todo={todo}
          setTodo={setTodo}
          setTodoVal={setTodoVal}
          todoVal={todoVal}
          theme={theme}
        />
        <NoteAdd note={note} setNote={setNote} theme={theme} />
        <AddingButton todo={todo} formHandle={formHandle} />
      </form>
      {windowWith >= 768 && (
        <>
          <section className="my-5">
            <Todos device={true} />
          </section>
          <div className="sticky bottom-0 mt-auto z-50 ">
            <Dialog />
          </div>
        </>
      )}
    </section>
  )
}

export default Form
