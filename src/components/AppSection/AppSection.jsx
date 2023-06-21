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
  const leftIconReturn = (x) => {
    if (x.length > 0) {
      return x.map((item, index) => {
        return (
          index % 4 === 0 && (
            <LeftIcon size={24} key={index} onClick={leftHandle} />
          )
        )
      })
    } else {
      return <LeftIcon size={24} onClick={leftHandle} />
    }
  }
  const rightIconReturn = (x) => {
    if (x.length > 0) {
      return x.map((item, index) => {
        return (
          index % 4 === 0 && (
            <RightIcon size={24} key={index} onClick={leftHandle} />
          )
        )
      })
    } else {
      return <RightIcon size={24} onClick={rightHandle} />
    }
  }

  const windowWith = window.innerWidth
  return (
    <div className="flex flex-col w-full">
      {windowWith < 768 ? (
        <div className="flex flex-row justify-between">
          <div className="w-full">
            {mobileState === -1 && (
              <div className="flex my-5">
                <div
                  className={`flex flex-col justify-around px-2 ${theme ? "text-slate-600" : "text-slate-200"
                    }`}
                  onClick={leftHandle}>
                  {leftIconReturn(note)}
                </div>
                <div className="w-full">
                  {note.length > 0 ? (
                    <Notes />
                  ) : (
                    <div
                      className={`flex justify-center items-center py-28 
                   ${theme === true
                          ? "bg-slate-200"
                          : "bg-slate-500 text-slate-100"
                        }`}>
                      There is no notes.
                    </div>
                  )}
                </div>
                <div
                  className={`flex flex-col justify-around px-2 ${theme ? "text-slate-600" : "text-slate-200"
                    }`}
                  onClick={rightHandle}>
                  {rightIconReturn(note)}
                </div>
              </div>
            )}
            {mobileState === 0 && (
              <div className=" my-5 flex">
                <div
                  className={`flex flex-col justify-around my-5 px-2 ${theme ? "text-slate-600" : "text-slate-200"
                    }`}
                  onClick={leftHandle}>
                  {leftIconReturn(todo)}
                </div>
                <div className="w-full">
                  {todo.length > 0 ? (
                    <Todos />
                  ) : (
                    <div
                      className={`flex justify-center items-center  py-28 ${theme ? "bg-slate-200" : "bg-slate-500 text-slate-100"
                        }`}>
                      There is no todos.
                    </div>
                  )}
                </div>
                <div
                  className={`flex flex-col justify-around my-5 px-2 ${theme ? "text-slate-600" : "text-slate-200"
                    }`}
                  onClick={rightHandle}>
                  {rightIconReturn(todo)}
                </div>
              </div>
            )}
            {mobileState === 1 && (
              <div className="flex my-5">
                <div
                  className={`flex flex-col justify-around my-5 px-2 ${theme ? "text-slate-600" : "text-slate-200"
                    }`}
                  onClick={leftHandle}>
                  {leftIconReturn(false)}
                </div>
                <div className="flex justify-center flex-1 items-center">
                  <Dialog />
                </div>
                <div
                  className={`flex flex-col justify-around my-5 px-2 ${theme ? "text-slate-600" : "text-slate-200"
                    }`}
                  onClick={rightHandle}>
                  {rightIconReturn(false)}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="ml-5 mr-16 sticky top-16 z-40">
          <div className="mb-5">
            <Notes device={true} />
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(AppSection)
