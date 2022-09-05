import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: (localStorage.getItem("theme") === "true" ? true : false) ?? true,
  },
  reducers: {
    changeTheme: (state) => {
      state.theme = !state.theme
      localStorage.setItem("theme", state.theme)
    },
  },
})
export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
