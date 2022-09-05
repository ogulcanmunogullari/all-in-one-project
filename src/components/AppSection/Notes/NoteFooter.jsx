import React from "react"
import { useDispatch } from "react-redux"
import {
  isDisabled,
  changeNotes,
  deleteNotes,
} from "../../../store/Slicers/noteSlicer"

function NoteFooter({ note, cargo, theme }) {
  const dispatch = useDispatch()
  const textAreaHandle = () => {
    dispatch(isDisabled(note.id))
    dispatch(changeNotes({ text: cargo, id: note.id }))
  }
  return (
    <div
      className={`flex justify-between pt-2 ${
        theme ? "bg-slate-100" : "bg-slate-300"
      }`}>
      <div>
        {note.isDisabled ? (
          <button
            className="border border-none  bg-yellow-500 px-5 mr-5"
            onClick={() => dispatch(isDisabled(note.id))}>
            Edit
          </button>
        ) : (
          <button
            className="border border-none  bg-yellow-500 px-5 mr-5"
            onClick={() => textAreaHandle()}>
            Save
          </button>
        )}
        <button
          className="border border-none  bg-red-500 px-5"
          onClick={() => dispatch(deleteNotes({ id: note.id }))}>
          Delete
        </button>
      </div>

      <span>{note.date}</span>
    </div>
  )
}

export default NoteFooter
