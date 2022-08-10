import React from "react";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "./router/Routes";
// pages
import CreateEmployeePage from "./pages/CreateEmployeePage";
import CurrentEmployeesPage from "./pages/CurrentEmployeesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Router.CurrentEmployees} element={<CurrentEmployeesPage />} />
        <Route path={Router.CreateEmployee} element={<CreateEmployeePage />} />
        <Route index element={<CreateEmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}
