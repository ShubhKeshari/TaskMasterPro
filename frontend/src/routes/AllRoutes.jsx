import React from "react";
import { Route, Routes } from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {Dashboard} from "../pages/Dashboard";
import {LoginPage} from "../pages/LoginPage";
import { Error } from "../pages/Error";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/*" element={<Error/>} />
    </Routes>
  );
}

export { AllRoutes };
