import React from "react"
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Teams from "./components/Team";


const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/teams" element={<Teams/>} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <Footer/>

      </div>
  )
}

export default App;
