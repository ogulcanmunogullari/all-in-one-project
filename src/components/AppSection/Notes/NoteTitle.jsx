import React from "react";
import { useDispatch } from "react-redux";
import { LineDownIcon, LineUpIcon } from "../../../Icons/Icons";
import { isOpened } from "../../../store/Slicers/noteSlicer";

function NoteTitle({ title, id, opened }) {
  const dispatch = useDispatch();
  return (
    <div className="py-2 flex justify-between">
      <h1 className="text-lg">{title}</h1>
      <span onClick={() => dispatch(isOpened(id))}>
        {opened ? <LineUpIcon size={24} /> : <LineDownIcon size={24} />}
      </span>
    </div>
  );
}

export default NoteTitle;
