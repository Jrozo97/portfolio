
import { Header } from "./components/common/header/Header";
import { Banner } from "./pages/Banner/Banner";
function App() {
  return (
    <div className="App">
        <Header />
        <section className="container-global">
          <Banner/>
          <hr className="solid"></hr>

        </section>

    </div>
  );
}

export default App;
