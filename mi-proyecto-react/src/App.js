import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Container className="mt-3">
        <Switch>
          <Route path="/nosotros">
            <Nosotros/>
          </Route>{" "}
          <Route path="/servicios">
            {" "}
            <Servicios />
          </Route>{" "}
          <Route path="/contacto">
            {" "}
            <Contacto/>
          </Route>{" "}
          <Route path="/">
            {" "}
            <h1> Bienvenido a mi sitio web </h1>{" "}
          </Route>{" "}
        </Switch>{" "}
      </Container>{" "}
      <Footer/>
    </Router>
  );
}
export default App;
