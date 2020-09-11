import React from "react"
import About from '../components/About'
import Resume from "../components/Resume";
import Home from "../components/Home";
import Footer from "../components/Footer"

const Index = () => {
  return (
    <>
      <div className="static">
        <Home />
      </div>
      <div className="panels">
        <About/>
        <Resume />
        <Footer />
      </div>
    </>
  );
}

export default Index;