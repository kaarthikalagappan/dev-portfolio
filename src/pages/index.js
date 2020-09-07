import React from "react"
import About from '../components/About'
import Resume from "../components/Resume";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer"

const Index = () => {
  return (
    <>
      <div class="static">
        <Home />
      </div>
      <div class="panels">
        <About/>
        <Resume />
        <Footer />
      </div>
    </>
  );
}

export default Index;