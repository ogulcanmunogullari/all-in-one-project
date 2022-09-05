import React from "react"
import { useDispatch } from "react-redux"
import { LineDownIcon, LineUpIcon } from "../../../Icons/Icons"
import { isOpened } from "../../../store/Slicers/noteSlicer"

function NoteTitle({ title, id, opened, theme }) {
  const dispatch = useDispatch()
  return (
    <div
      className={`flex justify-between py-2 ${
        theme ? "bg-slate-100" : "bg-slate-300"
      }`}>
      <h1 className="text-xl font-semibold">{title}</h1>
      <span onClick={() => dispatch(isOpened(id))}>
        {opened ? <LineUpIcon size={24} /> : <LineDownIcon size={24} />}
      </span>
    </div>
  )
}

export default NoteTitle
