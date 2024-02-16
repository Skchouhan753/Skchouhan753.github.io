import styles from "./App.module.css";

import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { AllRoutes } from "./AllRoutes/AllRoutes";
import { Statisticss } from "./components/Statistics/Statisticss";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <AllRoutes />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Statisticss />
      <Contact />
    </div>
  );
}

export default App;
