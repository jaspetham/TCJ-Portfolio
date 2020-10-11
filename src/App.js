import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from "./components/Service";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Banner />
        <About/>
        <Service/>
        <Resume/>
        <Portfolio/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
