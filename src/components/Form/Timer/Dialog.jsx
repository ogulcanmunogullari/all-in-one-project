import React, { useState } from "react";

function Dialog({ setDialogShow, dialogShow }) {
  const [time, setTime] = useState({ m: 0, s: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };
  let updatedMinute = time.m,
    updatedSecond = time.s;
  const run = () => {
    if (updatedSecond === 0) {
      updatedMinute--;
      updatedSecond = 59;
      return setTime({ m: updatedMinute, s: updatedSecond });
    }
    updatedSecond--;
    setTime({ m: updatedMinute, s: updatedSecond });
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ m: 0, s: 0 });
  };
  const resume = () => start();

  if (dialogShow === true) {
    window.addEventListener("keyup", (e) => {
      e.code === "Escape" && setDialogShow(false);
    });
  }
  return (
    <dialog
      open={dialogShow}
      className="fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="mt-[45vh] mx-[30vw]  bg-white">
        <div>
          {time.m < 10 ? "0" + time.m : time.m}:
          {time.s < 10 ? "0" + time.s : time.s}
        </div>
        {status === 0 && (
          <div>
            <div>
              <div onClick={() => setTime({ m: time.m + 1, s: time.s })}>+</div>
              <div onClick={() => setTime({ m: time.m - 1, s: time.s })}>-</div>
            </div>
            <div onClick={() => start()}>Start</div>
          </div>
        )}
        {status === 1 && <div onClick={() => stop()}>Stop</div>}
        {status === 2 && (
          <div>
            <div onClick={() => resume()}>Resume</div>
            <div onClick={() => reset()}>Reset</div>
          </div>
        )}

        <button onClick={() => setDialogShow(false)}>Close</button>
      </div>
    </dialog>
  );
}

export default Dialog;
