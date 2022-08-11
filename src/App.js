import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "./router/Routes";

import CreateEmployeePage from "./pages/CreateEmployeePage";
import CurrentEmployeesPage from "./pages/CurrentEmployeesPage";

import { initEmployees } from "./data/mock/mockEmployees";

export default function App() {
  const [employees, setEmployees] = useState(initEmployees);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Router.CurrentEmployees} element={<CurrentEmployeesPage employees={employees} />} />
        <Route path={Router.CreateEmployee} element={<CreateEmployeePage employees={employees} setEmployees={setEmployees} />} />
        <Route index element={<CreateEmployeePage employees={employees} setEmployees={setEmployees} />} />
      </Routes>
    </BrowserRouter>
  );
}
