import React from "react"
import TextField from "@mui/material/TextField"

function TodoAdd({ todo, setTodo, setTodoVal, todoVal, theme }) {
  if (todo) {
    const regex = /([a-z\d\sşŞıİğĞöÖüÜçÇ+])/gi
    const test = todo.match(regex)
    setTodoVal(test?.length === todo?.length)
  }

  return (
    <section className="flex justify-center">
      <TextField
        error={!todoVal}
        fullWidth
        label="Add a todo / Note title"
        color="info"
        helperText={
          !todoVal && "Only alphanumeric characters allowed and short texts"
        }
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={{
          background: theme ? "white" : "rgb(226 232 240)",
          borderRadius: 5,
        }}
      />
    </section>
  )
}

export default TodoAdd
