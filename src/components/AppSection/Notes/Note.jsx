import { useState, useRef, useEffect } from "react"

function Note({ note, isDisabled, setCargo, theme }) {
  const textRef = useRef()
  const [textArea, setTextArea] = useState(textRef.current)

  useEffect(() => {
    setCargo(textArea)
  }, [setCargo, textArea])

  return (
    <div className=" h-24">
      <textarea
        ref={textRef}
        disabled={isDisabled}
        className={`w-full h-full resize-none ${
          isDisabled
            ? `${theme ? "bg-slate-100" : "bg-slate-300"}`
            : `${theme ? "white" : "bg-slate-200"}`
        }`}
        defaultValue={note}
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}></textarea>
    </div>
  )
}

export default Note
