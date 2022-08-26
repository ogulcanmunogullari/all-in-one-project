import { configureStore } from "@reduxjs/toolkit";
import todos from "./Slicers/todoSlicer.js";

const store = configureStore({
  reducer: {
    todoSlicer: todos,
  },
});

export default store;
