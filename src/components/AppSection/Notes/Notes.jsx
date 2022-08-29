import { useState } from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import NoteFooter from "./NoteFooter";
import NoteTitle from "./NoteTitle";

function Notes({ device }) {
  const NOTES = useSelector((state) => state.noteSlicer.notes);
  const [cargo, setCargo] = useState("");

  return (
    <div className={`bg-orange-500 mb-2 ${device && "p-5"}`}>
      <h1 className={`flex justify-center bg-yellow-100 text-lg`}>NOTES</h1>
      {NOTES.map((note) => {
        return (
          <div key={note.id} className={` bg-yellow-100 last:mb-0 mb-5`}>
            <NoteTitle opened={note.isOpened} id={note.id} title={note.title} />
            {note.isOpened && (
              <Note
                setCargo={setCargo}
                note={note.note}
                isDisabled={note.isDisabled}
              />
            )}
            {note.isOpened && <NoteFooter cargo={cargo} note={note} />}
          </div>
        );
      })}
    </div>
  );
}

export default Notes;
