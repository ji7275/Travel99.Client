import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import News from "./pages/News.jsx";
import Packages from "./pages/Packages.jsx";
import Goa from "./pages/Goa.jsx";
import Kashmir from "./pages/Kashmir.jsx";
import Contact from "./pages/Contact.jsx";
import Rajasthan from "./pages/Rajasthan.jsx";
import Kerala from "./pages/Kerala.jsx";
import Himachal from "./pages/Himachal.jsx";
import Dubai from "./pages/Dubai.jsx";
import Bali from "./pages/Bali.jsx";
import Europe from "./pages/Europe";

import Switzerland from "./pages/Switzerland";

import Thailand from "./pages/Thailand.jsx";
import Honeymoon from "./pages/Honeymoon";
import Family from "./pages/Family.jsx";
import Adventure from "./pages/Adventure.jsx";
import Weekend from "./pages/Weekend.jsx";
//import Services from "./components/Services.jsx";

import ServiceDetails from "./pages/ServiceDetails.jsx";

import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/goa" element={<Goa />} />
        <Route path="/kashmir" element={<Kashmir />} />
        <Route path="/rajasthan" element={<Rajasthan />} />
        <Route path="/kerala" element={<Kerala />} />
        <Route path="/himachal" element={<Himachal />} />
        <Route path="/dubai" element={<Dubai />} />
        <Route path="/bali" element={<Bali />} />
        <Route path="/thailand" element={<Thailand />} />
        <Route path="/switzerland" element={<Switzerland />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/honeymoon" element={<Honeymoon />} />
        <Route path="/Family" element={<Family />} />

        <Route path="/Adventure" element={<Adventure />} />
        <Route path="/Weekend" element={<Weekend />} />

        <Route path="/services/:serviceName" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter } from "react-router-dom";

// import Header from "./components/Header.jsx";
// import Home from "./pages/Home.jsx";
// import Footer from "./components/Footer.jsx";

// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Home />
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
