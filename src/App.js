import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from "./components/Service";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

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
      </div>
    </div>
  );
}

export default App;
