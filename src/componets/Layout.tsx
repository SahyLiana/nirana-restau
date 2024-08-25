import { useEffect, useState } from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Home from "./Home";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Reserve from "./Reserve";

function Layout() {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isActive, setIsActive] = useState("Home");

  useEffect(() => {
    const scrollHandling = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
        setIsActive("Home");
      }
    };

    window.addEventListener("scroll", scrollHandling);
    return () => window.removeEventListener("scroll", scrollHandling);
  }, []);

  // console.log(isFixed);
  return (
    <div>
      <Navbar isFixed={isFixed} isActive={isActive} setIsActive={setIsActive} />
      <Home setIsActive={setIsActive} />
      <About setIsActive={setIsActive} />
      <Menu setIsActive={setIsActive} />
      <Reserve setIsActive={setIsActive} />
      <Gallery setIsActive={setIsActive} />
      <Blog setIsActive={setIsActive} />
      {/* <Contact setIsActive={setIsActive} /> */}
      <Contact />
    </div>
  );
}

export default Layout;
