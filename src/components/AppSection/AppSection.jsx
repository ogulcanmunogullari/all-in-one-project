//Import
import React, { useState, memo } from "react"
import Todos from "./Todos/Todos"
import Notes from "./Notes/Notes"
import Dialog from "../Form/Timer/Dialog"
import { useSelector } from "react-redux"
//Icons
import { LeftIcon, RightIcon } from "../../Icons/Icons"

function AppSection() {
  const [mobileState, setMobileState] = useState(0)
  const todo = useSelector((state) => state.todoSlicer.todos)
  const note = useSelector((state) => state.noteSlicer.notes)
  const theme = useSelector((state) => state.themeSlicer.theme)
  console.log(theme)

  const leftHandle = () => {
    if (mobileState === 0) {
      setMobileState(-1)
    } else if (mobileState === 1) {
      setMobileState(0)
    } else if (mobileState === -1) {
      setMobileState(1)
    }
  }
  const rightHandle = () => {
    if (mobileState === 0) {
      setMobileState(1)
    } else if (mobileState === 1) {
      setMobileState(-1)
    } else if (mobileState === -1) {
      setMobileState(0)
    }
  }
  const windowWith = window.innerWidth
  return (
    <div className="flex flex-col w-full">
      {windowWith < 768 ? (
        <div className="flex flex-row justify-between">
          <div
            className="flex flex-col justify-center px-2 text-purple-800"
            onClick={leftHandle}>
            <LeftIcon size={24} />
          </div>
          <div className="w-full">
            {mobileState === -1 && (
              <div className="my-5">
                {note.length > 0 ? (
                  <Notes />
                ) : (
                  <div
                    className={`flex justify-center items-center py-28 
                   ${
                     theme === true
                       ? "bg-slate-200"
                       : "bg-slate-500 text-slate-100"
                   }`}>
                    There is no notes.
                  </div>
                )}
              </div>
            )}
            {mobileState === 0 && (
              <div className="my-5">
                {todo.length > 0 ? (
                  <Todos />
                ) : (
                  <div
                    className={`flex justify-center items-center  py-28 ${
                      theme ? "bg-slate-200" : "bg-slate-500 text-slate-100"
                    }`}>
                    There is no todos.
                  </div>
                )}
              </div>
            )}
            {mobileState === 1 && (
              <div className="my-20 flex justify-center items-center">
                <Dialog />
              </div>
            )}
          </div>
          <div
            className="flex flex-col justify-center px-2 text-purple-800"
            onClick={rightHandle}>
            <RightIcon size={24} />
          </div>
        </div>
      ) : (
        <div className="ml-5 mr-16 sticky top-10 z-40">
          <div className="mb-5">
            <Notes device={true} />
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(AppSection)
