import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/SuperHero";
import About from "./components/About";
import Footer from "./components/Footer";
import "./style/landingpage.css";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <SuperHero />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="footer">
        <Footer />
      </div>
      {/* end section*/}
    </div>
  );
}

export default App;
