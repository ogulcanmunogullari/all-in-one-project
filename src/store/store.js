import { configureStore } from "@reduxjs/toolkit"
import todos from "./Slicers/todoSlicer.js"
import notes from "./Slicers/noteSlicer.js"
import theme from "./Slicers/themeSlicer.js"

const store = configureStore({
  reducer: {
    todoSlicer: todos,
    noteSlicer: notes,
    themeSlicer: theme,
  },
})

export default store
