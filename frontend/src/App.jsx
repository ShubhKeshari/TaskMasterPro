import React from "react";
import { AllRoutes } from "./routes/AllRoutes";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";
  return (
    <>
      <Navbar />
      <AllRoutes />
      {!isLoginRoute && <Footer />}
    </>
  );
}

export default App;
