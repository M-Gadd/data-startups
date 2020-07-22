import React from "react";
import MainFooter from "./pages/Footer";
import { Container, Card } from "reactstrap";
import MainHeader from "./pages/Header";
import StartupData from "./StartupData";

function App() {
  return (
    <div className="mx-4" style={{ backgroundColor: "#E3ECF0" }}>
      <h3 className="ml-2" style={{ color: "#616A6D" }}>
        Mobility
      </h3>
      <Card className="ml-2 mr-4 pb-3">
        <MainHeader />

        <StartupData />

        <hr className="mt-5" />
        <MainFooter />
      </Card>
    </div>
  );
}

export default App;
