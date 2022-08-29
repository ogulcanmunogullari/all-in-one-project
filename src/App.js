import Form from "./components/Form/Form";
import AppSection from "./components/AppSection/AppSection";

function App() {
  return (
    <div className="bg-slate-400 ">
      <main className="container min-h-[100vh] mx-auto flex  flex-wrap flex-col sm:flex-row">
        <section className="flex flex-col md:basis-2/5 ">
          <Form />
        </section>
        <section className="flex flex-row justify-center md:basis-3/5  ">
          <AppSection />
        </section>
      </main>
    </div>
  );
}

export default App;
