import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: JSON.parse(localStorage.getItem("notes")) ?? [],
  },
  reducers: {
    addNotes: (state, action) => {
      state.notes.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteNotes: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    changeNotes: (state, action) => {
      if (action.payload.text) {
        state.notes.map((item) => {
          return item.id === action.payload.id
            ? (item.note = action.payload.text)
            : item;
        });
      }
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    isDisabled: (state, action) => {
      state.notes.map((note) =>
        note.id === action.payload
          ? (note.isDisabled = !note.isDisabled)
          : note,
      );
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    isOpened: (state, action) => {
      state.notes.map((note) =>
        note.id === action.payload ? (note.isOpened = !note.isOpened) : note,
      );
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
  },
});

export const { addNotes, deleteNotes, isDisabled, changeNotes, isOpened } =
  noteSlice.actions;
export default noteSlice.reducer;
