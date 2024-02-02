import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/ForContact.jsx";
import Design from "./pages/Design";
import Development from "./pages/Developments";
import Marketing from "./pages/Marketing";
import Products from "./pages/Products";
import Services from "./pages/Services";

import Footer from "..//src/footer/footer.js";



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/contactus" element={<Contact/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/marketing" element={<Marketing/>}></Route>
          <Route path="/development" element={<Development/>}></Route>
          <Route path="/design" element={<Design/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
       
    </>
  );
}

export default App;