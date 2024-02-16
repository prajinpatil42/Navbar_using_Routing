import React from "react";
import Navbar from "./Navbar";
import Pricing from "./Pages/Pricing";
import { About } from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { Route,Routes } from "react-router-dom";
const App = () => {
  // let Componenet;

  // switch (window.location.pathname) {
  //   case "/":
  //     Componenet = <Home />;
  //     break;

  //   case "/pricing":
  //     Componenet = <Pricing />;
  //     break;

  //   case "/about":
  //     Componenet = <About />;
  //     break;
  // }
  return (
    <>
      {/* <Navbar />;<div className="container">{Componenet}</div> */}
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>


        </Routes>

      </div>
    </>
  );
};

export default App;
