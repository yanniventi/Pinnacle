import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Error from "./404";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Transition from "./Transition";

const Layout = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Transition key={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Transition>
    </AnimatePresence>
  );
};

export default Layout;
