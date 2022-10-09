import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import Product from "./Product";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

const Main = () => {
  const location = useLocation();

  return (
    <main>
      <div className="container">
        <h1>Main Container</h1>

        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Main;
