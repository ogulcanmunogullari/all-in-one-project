import React from "react"
import DeleteTodo from "./DeleteTodo"
import CheckTodo from "./CheckTodo"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { checkSelectedTodo } from "../../../store/Slicers/todoSlicer"
import { useDispatch } from "react-redux"

function Todo({ id, title, completed, theme }) {
  const dispatch = useDispatch()
  const checkHandle = (id) => {
    dispatch(checkSelectedTodo(id))
  }
  return (
    <div
      className={`flex justify-between items-center ${
        completed
          ? `${
              theme
                ? "bg-slate-400 text-neutral-50"
                : "bg-slate-700 text-slate-300"
            }`
          : `${theme ? "bg-slate-50" : "bg-slate-300"}`
      } last:mb-0 mb-2 -z-10`}>
      <ListItem disablePadding>
        <ListItemButton onClick={() => checkHandle(id)} style={{ width: 1 }}>
          <ListItemIcon>
            <CheckTodo id={id} completed={completed} />
          </ListItemIcon>
          <ListItemText
            primary={title}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              textDecorationLine: completed ? "line-through" : "none",
            }}
          />

          <DeleteTodo id={id} />
        </ListItemButton>
      </ListItem>
    </div>
  )
}

export default Todo
