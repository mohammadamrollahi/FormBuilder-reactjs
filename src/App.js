import React from "react";
import logo from "./logo.svg";
import Data from "./components/Data/Data";
import Form from "./components/Form/Form";
import "./App.css";
import styled from "styled-components";
import { Container,Row,Col } from "reactstrap";

function App() {
  return (
    <Container className="mycontainer"
    >

          <Data />

    </Container>
  );
}

export default App;
