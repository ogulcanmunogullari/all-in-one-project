import React from "react";

function AddingButton() {
  return (
    <div className="flex justify-center mt-5">
      <button
        type="submit"
        className="border border-red-900 bg-red-500 text-white
  active:border-yellow-500 active:bg-orange-400 w-full md:w-3/4">
        Add
      </button>
    </div>
  );
}

export default AddingButton;
