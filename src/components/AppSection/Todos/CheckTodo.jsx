import React, { useId } from "react";
import {} from "../../../Icons/Icons";
import { checkSelectedTodo } from "../../../store/Slicers/todoSlicer";
import { useDispatch } from "react-redux";
import { CheckedIcon, UnCheckedIcon } from "../../../Icons/Icons";

function CheckTodo({ id, completed }) {
  const CHECK_ID = useId();
  const dispatch = useDispatch();
  const checkHandle = (id) => {
    dispatch(checkSelectedTodo(id));
  };
  return (
    <span>
      <input
        type="checkbox"
        className="hidden"
        id={CHECK_ID}
        checked={completed}
        onChange={() => checkHandle(id)}
      />
      {completed ? (
        <label htmlFor={CHECK_ID}> {<CheckedIcon />} </label>
      ) : (
        <label htmlFor={CHECK_ID}> {<UnCheckedIcon />} </label>
      )}
    </span>
  );
}

export default CheckTodo;
