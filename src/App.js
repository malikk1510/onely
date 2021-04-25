import React  from "react";
import PrimaryRoutes from "./routes/primary.routes";
import "./shared/style.css";
import Header from "./shared/Header/Header";
import Footer from "./shared/Header/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <PrimaryRoutes />
      <Footer/>
    </>
  );
}

export default App;
