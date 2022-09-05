import React, { useId } from "react"
import { checkSelectedTodo } from "../../../store/Slicers/todoSlicer"
import { useDispatch } from "react-redux"
import { CheckedIcon, UnCheckedIcon } from "../../../Icons/Icons"

function CheckTodo({ id, completed }) {
  const CHECK_ID = useId()
  const dispatch = useDispatch()
  const checkHandle = (id) => {
    dispatch(checkSelectedTodo(id))
  }
  return (
    <span>
      <input
        type="checkbox"
        className="hidden "
        id={CHECK_ID}
        checked={completed}
        onChange={() => checkHandle(id)}
      />
      {completed ? (
        <label className="cursor-pointer z-50" htmlFor={CHECK_ID}>
          {" "}
          {<CheckedIcon />}{" "}
        </label>
      ) : (
        <label className="cursor-pointer z-50" htmlFor={CHECK_ID}>
          {" "}
          {<UnCheckedIcon />}{" "}
        </label>
      )}
    </span>
  )
}

export default CheckTodo
