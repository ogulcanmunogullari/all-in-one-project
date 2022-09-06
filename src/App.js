import Form from "./components/Form/Form"
import AppSection from "./components/AppSection/AppSection"
import { useSelector } from "react-redux"
import Switch from "./components/Form/Switch.jsx"
import { Github } from "./Icons/Icons"

function App() {
  const theme = useSelector((state) => state.themeSlicer.theme)

  return (
    <div className={`${theme ? "bg-slate-50" : "bg-slate-800"} `}>
      <main className="min-h-[100vh] ">
        <section
          className={`sticky top-0 z-50 h-16 border-b shadow-md flex items-center w-full justify-between  
          ${
            theme
              ? "border-slate-300 shadow-slate-300/50"
              : "border-slate-500 shadow-slate-500/50"
          } 
          ${theme ? "text-slate-800" : "text-slate-100"}
          ${theme ? "bg-slate-100 " : "bg-slate-800"}
          `}>
          <div className="p-5">
            <a href="https://github.com/ogulcanmunogullari/all-in-one-project">
              <Github size={24} />
            </a>
          </div>
          <Switch />
        </section>
        <div className="flex flex-wrap flex-col sm:flex-row">
          <section className="sticky top-16 z-40 flex flex-col md:basis-2/5">
            <Form />
          </section>
          <section className="flex flex-row md:basis-3/5 ">
            <AppSection />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
