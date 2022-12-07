import { Header } from "./components/common/header/Header";
import { GeneralProvider } from "./context/GeneralContext";
import { About } from "./pages/About/About";
import { Banner } from "./pages/Banner/Banner";
import { Projects } from "./pages/Projects/Projects";
function App() {
  return (
    <GeneralProvider>
      <div className="App">
        <Header />
        <section className="container-global">
          <Banner />
          <hr className="solid"></hr>
          <About />
          <hr className="solid"></hr>
          <Projects />
          <hr className="solid"></hr>
        </section>
      </div>
    </GeneralProvider>
  );
}

export default App;
