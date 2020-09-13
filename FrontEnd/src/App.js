import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Feedback from "./Components/Feedback";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from "./Components/Map";

function Home() {
  return (
    <>
      <Logo />
      <Form />
      <Map />
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
