import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "./router/Routes";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { HelmetProvider } from "react-helmet-async";

import CurrentEmployeesPage from "./pages/CurrentEmployeesPage";
import CreateEmployeePage from "./pages/CreateEmployeePage";

export default function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path={Router.CurrentEmployees}
              element={<CurrentEmployeesPage />}
            />
            <Route
              path={Router.CreateEmployee}
              element={<CreateEmployeePage />}
            />
            <Route index element={<CreateEmployeePage />} />
            <Route path="*" element={<CreateEmployeePage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}
