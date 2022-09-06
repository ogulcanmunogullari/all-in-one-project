import React from "react"
import { useSelector } from "react-redux"
import Todo from "./Todo"
import List from "@mui/material/List"

function Todos({ device }) {
  const TODOS = useSelector((state) => state.todoSlicer.todos)
  const theme = useSelector((state) => state.themeSlicer.theme)
  return (
    <div
      className={`
      ${device ? "p-5 -my-5" : "px-2"}
      ${theme ? "bg-slate-200" : "bg-slate-500"}
      `}>
      <List>
        {TODOS.map((todo) => {
          return (
            <Todo
              theme={theme}
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          )
        })}
      </List>
    </div>
  )
}

export default Todos
