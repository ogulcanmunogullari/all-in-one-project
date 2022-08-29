import React, { useState } from "react";
import { Clock } from "../../../Icons/Icons";
import Dialog from "./Dialog";

function Timer() {
  const [dialogShow, setDialogShow] = useState(false);
  return (
    <section>
      <span
        onClick={() => setDialogShow(true)}
        className="px-5 py-10 rounded-full text-center bg-white border-8 border-black">
        <Clock size={64} />
      </span>
      <Dialog dialogShow={dialogShow} setDialogShow={setDialogShow} />
    </section>
  );
}

export default Timer;
