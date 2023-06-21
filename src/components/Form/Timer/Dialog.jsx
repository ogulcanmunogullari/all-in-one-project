import { useState } from "react"
import Button from "@mui/material/Button"
import Sound from "../../../alert-sound/trumpet.mp3"
import { useSelector } from "react-redux"

function Dialog() {
  const [time, setTime] = useState({ m: 0, s: 0 })
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)
  const theme = useSelector((state) => state.themeSlicer.theme)

  function playSound() {
    const audio = new Audio(Sound)
    audio.play()
  }
  let updatedMinute = time.m,
    updatedSecond = time.s
  function start() {
    run()
    setStatus(1)
    setInterv(setInterval(run, 1000))
    changeIcon("timer")
  }
  function stop() {
    clearInterval(interv)
    setStatus(2)
  }
  function reset() {
    clearInterval(interv)
    setStatus(0)
    setTime({ m: 0, s: 0 })
    document.title = "All in one App"
    changeIcon("todo")
  }
  function resume() {
    start()
  }
  if (time.m <= 0 && time.s <= 0 && status === 1) {
    reset()
    document.title = "Time's Up"
    setTimeout(() => {
      document.title = "All in one App"
      changeIcon("todo")
    }, 5000)
    playSound()
  }
  function changeIcon(selection) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    if (selection === "timer") {
      link.href = "timer.png";
    } else {
      link.href = "todo.png";
    }
  }
  function changeTitle(updatedMinute, updatedSecond) {
    document.title = (updatedMinute < 10 ? "0" + updatedMinute : updatedMinute) + " : " + (updatedSecond < 10 ? "0" + updatedSecond : updatedSecond);
  }
  function run() {
    if (updatedSecond === 0) {
      updatedMinute--
      updatedSecond = 59
      changeTitle(updatedMinute, updatedSecond)
      return setTime({ m: updatedMinute, s: updatedSecond })
    }
    updatedSecond--
    changeTitle(updatedMinute, updatedSecond)
    setTime({ m: updatedMinute, s: updatedSecond })
  }

  return (
    <div
      className={`${theme ? "bg-slate-200" : "bg-slate-500"
        } p-4 sm:p-5 flex w-full  gap-5 flex-col`}>
      <div className="flex  justify-center">
        <span
          className={`${theme ? "text-slate-800" : "text-slate-300"
            } text-6xl sm:text-7xl font-semibold`}>
          {time.m < 10 ? "0" + time.m : time.m}
        </span>
        <span
          className={`${theme ? "text-slate-800" : "text-slate-300"
            } text-5xl sm:text-7xl  font-semibold  sm:-mt-2`}>
          :
        </span>
        <span
          className={`${theme ? "text-slate-800" : "text-slate-300"
            } text-6xl sm:text-7xl font-semibold`}>
          {time.s < 10 ? "0" + time.s : time.s}
        </span>
      </div>

      {status === 0 && (
        <div className="flex flex-wrap gap-2 sm:gap-5 w-full">
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
            variant="contained"
            disabled={time.m < 1}>
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
        <div className="flex  gap-5 w-full">
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
        <div className="flex gap-5 w-full flex-wrap">
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
