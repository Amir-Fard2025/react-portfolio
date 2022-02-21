import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

const getMainComponent = (page) => {
  if (page === "Portfolio") {
    return <Portfolio />;
  } else if (page === "Resume") {
    return <Resume />;
  } else if (page === "Contact") {
    return <Contact />;
  }
  return <AboutMe />;
};

function App() {
  const [currPage, setCurrentPage] = useState("AboutMe");

  return (
    <div className="flex flex-col">
      <Navbar setCurrentPage={setCurrentPage} />
      {getMainComponent(currPage)}
      <Footer />
    </div>
  );
}

export default App;
