import React from "react";
import Home from "./Routing/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Routing/About";
import Contact from "./Routing/Contact";
// import Userlist from "./List/Userlist";
// import Fruitlist from "./List/Fruitlist";


// import Functional_compo from './Componets/Functional_compo';
// import Class_compo from './Componets/Class_compo';
// import Usercard from './Props-and-state/Usercard';
// import Home from './Routing/Home';
// import Header from "./Routing/Header";
// import NavList from "./Routing/NavList";

function App() {
  return (
    <div className="App">
      {/* <Functional_compo  name="yug"/> */}
      {/* <Class_compo/> */}
      {/* <Usercard  name="yug" age={22} location="india"/> */}
      {/* <Usercard  name="het" age={20} location="india"/> */}
     {/* <Home/> */}
      {/* <Header/> */}
      {/* <NavList /> */}
     {/* <Fruitlist/> */}
     {/* <Userlist/> */}
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
