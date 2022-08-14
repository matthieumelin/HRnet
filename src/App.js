import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "./router/Routes";

import CreateEmployeePage from "./pages/CreateEmployeePage";
import CurrentEmployeesPage from "./pages/CurrentEmployeesPage";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { HelmetProvider } from "react-helmet-async";

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
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}
