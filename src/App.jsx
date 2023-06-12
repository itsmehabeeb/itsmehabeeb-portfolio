import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ToTop from "./components/ToTop";

function App() {
  return (
    <div className="App" style={{ fontFamily: "Poppins" }}>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
      <ToTop />
    </div>
  );
}

export default App;
