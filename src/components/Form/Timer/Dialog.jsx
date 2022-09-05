import React, { useState } from "react"
import Button from "@mui/material/Button"
import { useSelector } from "react-redux"

function Dialog() {
  const [time, setTime] = useState({ m: 0, s: 0 })
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)
  const theme = useSelector((state) => state.themeSlicer.theme)
  const start = () => {
    run()
    setStatus(1)
    setInterv(setInterval(run, 1000))
  }
  let updatedMinute = time.m,
    updatedSecond = time.s
  const run = () => {
    if (updatedSecond === 0) {
      updatedMinute--
      updatedSecond = 59
      return setTime({ m: updatedMinute, s: updatedSecond })
    }
    updatedSecond--
    setTime({ m: updatedMinute, s: updatedSecond })
  }
  const stop = () => {
    clearInterval(interv)
    setStatus(2)
  }

  const reset = () => {
    clearInterval(interv)
    setStatus(0)
    setTime({ m: 0, s: 0 })
  }
  const resume = () => start()

  return (
    <div
      className={`${
        theme ? "bg-slate-200" : "bg-slate-500"
      } p-5 w-full flex flex-col gap-5`}>
      <div className="flex flex-row justify-center">
        <span
          className={`${
            theme ? "text-slate-800" : "text-slate-300"
          } text-7xl font-semibold`}>
          {time.m < 10 ? "0" + time.m : time.m}
        </span>
        <span
          className={`${
            theme ? "text-slate-800" : "text-slate-300"
          } text-7xl  font-semibold -mt-2`}>
          :
        </span>
        <span
          className={`${
            theme ? "text-slate-800" : "text-slate-300"
          } text-7xl font-semibold`}>
          {time.s < 10 ? "0" + time.s : time.s}
        </span>
      </div>

      {status === 0 && (
        <div className="flex gap-5 w-full">
          <Button
            color="success"
            style={{ width: "100%" }}
            onClick={() => setTime({ m: time.m + 1, s: time.s })}
            variant="contained">
            <span className="text-lg font-semibold">+</span>
          </Button>
          <Button
            color="error"
            style={{ width: "100%" }}
            onClick={() => setTime({ m: time.m - 1, s: time.s })}
            variant="contained">
            <span className="text-lg font-semibold">-</span>
          </Button>
          <Button
            style={{ width: "100%" }}
            onClick={() => start()}
            variant="contained"
            disabled={!time.m > 0}>
            Start
          </Button>
        </div>
      )}

      {status === 1 && (
        <div className="flex gap-5 w-full">
          <Button
            color="error"
            style={{ width: "100%" }}
            onClick={() => stop()}
            variant="contained">
            Stop
          </Button>
        </div>
      )}
      {status === 2 && (
        <div className="flex gap-5 w-full">
          <Button
            style={{ width: "100%" }}
            onClick={() => resume()}
            variant="contained">
            Resume
          </Button>
          <Button
            color="warning"
            style={{ width: "100%" }}
            onClick={() => reset()}
            variant="contained">
            Reset
          </Button>
        </div>
      )}
    </div>
  )
}

export default Dialog
