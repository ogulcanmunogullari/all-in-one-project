import Form from "./components/Form/Form"
import AppSection from "./components/AppSection/AppSection"
import { useSelector } from "react-redux"
import Switch from "./components/Form/Switch.jsx"

function App() {
  const theme = useSelector((state) => state.themeSlicer.theme)

  return (
    <div className={`${theme ? "bg-slate-100" : "bg-slate-800"} `}>
      <main className="min-h-[100vh] ">
        <section
          className={`sticky top-0 z-50 h-10 ${
            theme ? "bg-slate-100" : "bg-slate-800"
          } `}>
          <Switch />
        </section>
        <div className="flex flex-wrap flex-col sm:flex-row">
          <section className="sticky top-10 z-40 flex flex-col md:basis-2/5">
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
