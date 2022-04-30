import React from "react"
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";
import Products from "./components/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <Footer/>
      </div>
  )
}

export default App;
