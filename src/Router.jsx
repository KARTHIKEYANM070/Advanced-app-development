import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Navbarmain";
import About from "./Component/Nav/about";
import Services from "./Component/Nav/Services";
import { Contact } from "./Component/Nav/Contact";
import Lsig from "./Component/LOGIN/lOGIN.JSX";
import App from "./App";
import SignUp from "./Component/LOGIN/SignUp";
import Create from "./Component/PostJob/Create";
import Admin from "./Component/Admin/Admin";
import Dabout from "./Component/DAbout/Dabout";
import Mhome from "./Component/MAINHOME/Mhome";
function Router() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mhome/>} />
        <Route path="/search" element={<App/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Lsig/>} />
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/form" element={<Create/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/home" element={<Dabout/>}/>
      </Routes>
    </div>
  );
}

export default Router;