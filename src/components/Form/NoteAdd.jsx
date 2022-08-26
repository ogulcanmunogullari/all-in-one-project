import React, { useState } from "react";

function NoteAdd({ note, setNote }) {
  return (
    <div className="flex justify-center mt-5">
      <textarea
        className="w-full md:w-3/4"
        rows={3}
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note"
        title="Only alphanumeric characters allowed"
      />
    </div>
  );
}

export default NoteAdd;
