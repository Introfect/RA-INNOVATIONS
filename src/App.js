import React from "react"
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      </div>
  )
}

export default App;
