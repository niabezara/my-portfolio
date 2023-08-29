import GlobalStyle from "./globalStyles";
import HomePage from "./routes/HomePage";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Projects from "./routes/Projects";
import { Element } from "react-scroll";
import NavBar from "./components/NavBar";
import menuItems from "./data/source";
import { useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <NavBar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />

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
