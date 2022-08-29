import { configureStore } from "@reduxjs/toolkit";
import todos from "./Slicers/todoSlicer.js";
import notes from "./Slicers/noteSlicer.js";

const store = configureStore({
  reducer: {
    todoSlicer: todos,
    noteSlicer: notes,
  },
});

export default store;
