import React from "react"
import Button from "@mui/material/Button"

function AddingButton({ todo, formHandle }) {
  return (
    <section className="flex mt-5 ">
      <Button
        color="success"
        onClick={formHandle}
        variant="contained"
        disabled={!todo}
        style={{ width: "100%" }}>
        Add
      </Button>
    </section>
  )
}

export default AddingButton
