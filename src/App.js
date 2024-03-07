import { Parallax } from "react-parallax";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SecondContainer from "./components/SecondContainer";
import Clients from "./components/Clients";
import Track from "./components/Track";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Animation from "./components/Animation";
import AnimateCursor from "./components/AnimateCursor";

function App() {
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowDown(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  const isMobileOrTablet = () => {
    return window.innerWidth <= 768;
  };

  return (
    <>
      {showDown ? (
        <Animation />
      ) : (
        <div>
          <Navbar />
          <Banner />
          <SecondContainer />
          <Clients />
          <Track />
          <Footer />
        </div>
      )}
      {!isMobileOrTablet() && <AnimateCursor />}
    </>
  );
}

export default App;
