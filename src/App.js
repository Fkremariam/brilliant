import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/ForContact.jsx";
import Products from "./pages/Products";
import Services from "./pages/Services";
import REID from "./pages/DropdwomLists/RFID.jsx"
import AudioViusal from "./pages/DropdwomLists/AudioViusal.jsx"
import CCTV from "./pages/DropdwomLists/CCTVSS.jsx"
import NetworkingInstalleation from "./pages/DropdwomLists/NetworkingInstalleation"
import Footer from "..//src/footer/footer.js";
import CloudServices from "./pages/DropdwomLists/CloudServices"
import DataCenterSetup from "./pages/DropdwomLists/DataCenterSetup"
import FireAlarmSystem from "./pages/DropdwomLists/FireAlarmSystem"
import SecuritySolutions from "./pages/DropdwomLists/SecuritySolutions"
import SmartClassRoom from "./pages/DropdwomLists/SmartClassRoom"
import NetworkMangement from "./pages/DropdwomLists/networkMangement";
import NetworkSupport from "./pages/DropdwomLists/networkSupport";




function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/networkMangement" element={<NetworkMangement />}></Route>
<Route path="/networkSupport" element={<NetworkSupport />}></Route>

          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/contactus" element={<Contact/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/REID" element={<REID/>}></Route>
          <Route path="/CCTVSS" element={<CCTV/>}></Route>
          <Route path="/networkSupport" element={<networkSupport/>}></Route>
          <Route path="/CloudServices" element={<CloudServices/>}></Route>
          <Route path="/DataCenterSetup" element={<DataCenterSetup/>}></Route>
          <Route path="/FireAlarmSystem" element={<FireAlarmSystem/>}></Route>
          
          <Route path="/SecuritySolutions" element={<SecuritySolutions/>}></Route>
          <Route path="/SmartClassRoom" element={<SmartClassRoom/>}></Route>
          <Route path="/AudioViusal" element={<AudioViusal/>}></Route>
          <Route path="/NetworkingInstalleation" element={<NetworkingInstalleation/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
       
    </>
  );
}

export default App;