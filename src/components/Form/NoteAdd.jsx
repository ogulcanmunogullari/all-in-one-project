import React from "react"
import TextField from "@mui/material/TextField"

function NoteAdd({ note, setNote, theme }) {
  return (
    <section className="flex justify-center mt-5">
      <TextField
        rows={3}
        multiline
        fullWidth
        label="Add a note"
        color="info"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{
          width: "100%",
          background: theme ? "white" : "rgb(226 232 240)",
          borderRadius: 5,
        }}
      />
    </section>
  )
}

export default NoteAdd
