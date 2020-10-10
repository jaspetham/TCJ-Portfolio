import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Banner from "./Banner";
import About from "./About";
import Service from "./Service";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Banner />
        <About/>
        <Service/>
      </div>
    </div>
  );
}

export default App;
