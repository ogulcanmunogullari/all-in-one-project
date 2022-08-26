import Form from "./components/Form/Form";
import AppSection from "./components/AppSection/AppSection";

function App() {
  return (
    <div className="container mx-auto flex  flex-wrap flex-col sm:flex-row ">
      <div className="flex flex-col md:basis-2/5 lg:basis-1/4 bg-slate-400">
        <Form />
      </div>
      <div className="flex flex-row justify-center md:basis-3/5 lg:basis-3/4 bg-green-400">
        <AppSection />
      </div>
    </div>
  );
}

export default App;
