import React, { memo } from "react";

function NoteAdd({ note, setNote }) {
  return (
    <section className="flex justify-center mt-5">
      <textarea
        className="w-full md:w-3/4 resize-none"
        rows={3}
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note"
        title="Only alphanumeric characters allowed"
      />
    </section>
  );
}

export default NoteAdd;
