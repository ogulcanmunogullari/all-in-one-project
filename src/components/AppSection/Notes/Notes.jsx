import { useState } from "react"
import { useSelector } from "react-redux"
import Note from "./Note"
import NoteFooter from "./NoteFooter"
import NoteTitle from "./NoteTitle"

function Notes({ device }) {
  const NOTES = useSelector((state) => state.noteSlicer.notes)
  const [cargo, setCargo] = useState("")
  const theme = useSelector((state) => state.themeSlicer.theme)
  return (
    <div>
      {NOTES.length > 0 && (
        <div
          className={`${theme ? "bg-slate-200" : "bg-slate-500"} mb-2 
          ${device ? "p-5" : "p-2"} `}>
          {NOTES.map((note) => {
            return (
              <div
                key={note.id}
                className={`flex flex-col gap-1 last:mb-0 mb-5`}>
                <NoteTitle
                  theme={theme}
                  opened={note.isOpened}
                  id={note.id}
                  title={note.title}
                />
                {note.isOpened && (
                  <Note
                    theme={theme}
                    setCargo={setCargo}
                    note={note.note}
                    isDisabled={note.isDisabled}
                  />
                )}
                {note.isOpened && (
                  <NoteFooter theme={theme} cargo={cargo} note={note} />
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Notes
