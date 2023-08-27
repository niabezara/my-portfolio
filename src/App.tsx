import GlobalStyle from "./globalStyles";
import HomePage from "./routes/HomePage";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Projects from "./routes/Projects";
import { Link, Element } from "react-scroll";
import NavBar from "./components/NavBar";
import menuItems from "./data/source";
// import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <main>
        {menuItems.map((menu) => (
          <Element key={menu.id} name={menu.title}>
            <div className="content">
              {menu.title === "home" && <HomePage />}
              {menu.title === "about" && <About />}
              {menu.title === "Portfolio" && <Projects />}
              {menu.title === "Contact" && <Contact />}
            </div>
          </Element>
        ))}
      </main>
    </>
  );
}

export default App;
