import React, { useState } from "react";
import TopLeyend from "./TopLeyend";
import TopMainScreen from "./TopMainScreen";
import Footer from "./Footer";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import WhatsappIcon from "./WhatsappIcon";



export default function Layout({ children, classHome, classQuienesSomos, classServicios, classCalidad, classContacto }) {
  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  

  return (
    <div>
      <TopLeyend />
      <TopMainScreen />
      <NavBar toggleNav={toggleNav} classHome={classHome} classQuienesSomos={classQuienesSomos} classServicios={classServicios} classCalidad={classCalidad} classContacto={classContacto} />
      <MobileNavBar open={open} />

      {children}

      <Footer />
      <WhatsappIcon />
    </div>
  );
}
