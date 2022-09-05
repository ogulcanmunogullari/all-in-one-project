//Import
import React, { useState, memo } from "react"
import Todos from "./Todos/Todos"
import Notes from "./Notes/Notes"
import Dialog from "../Form/Timer/Dialog"
//Icons
import { LeftIcon, RightIcon } from "../../Icons/Icons"

function AppSection() {
  const [mobileState, setMobileState] = useState(0)

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
                <Notes />
              </div>
            )}
            {mobileState === 0 && (
              <div className="my-5">
                <Todos />
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
