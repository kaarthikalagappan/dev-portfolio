import React from "react"
import About from '../components/About'
import Resume from "../components/Resume";
import Home from "../components/Home";
import Footer from "../components/Footer"
import {Helmet} from "react-helmet";
import favicon from "../../static/favicon.png"

const Index = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Kaarthik Alagappan</title>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </Helmet>
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