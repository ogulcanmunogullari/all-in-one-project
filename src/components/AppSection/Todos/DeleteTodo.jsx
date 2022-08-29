import React from "react";
import { DeleteIcon } from "../../../Icons/Icons";
import { deleteSelectedTodo } from "../../../store/Slicers/todoSlicer";
import { useDispatch } from "react-redux";

function DeleteTodo({ id }) {
  const dispatch = useDispatch();
  const deleteHandle = (id) => {
    dispatch(deleteSelectedTodo(id));
  };
  return (
    <span className="text-red-700" onClick={() => deleteHandle(id)}>
      <DeleteIcon size={28} />
    </span>
  );
}

export default DeleteTodo;
