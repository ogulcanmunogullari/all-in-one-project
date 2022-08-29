import React, { useState } from "react";

function Dialog({ setDialogShow, dialogShow }) {
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
        <button onClick={() => setDialogShow(false)}>Close</button>
      </div>
    </dialog>
  );
}

export default Dialog;
