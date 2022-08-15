import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "./router/Routes";

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
              element={React.lazy(() => import("./pages/CurrentEmployeesPage"))}
            />
            <Route
              path={Router.CreateEmployee}
              element={React.lazy(() => import("./pages/CreateEmployeePage"))}
            />
            <Route
              index
              element={React.lazy(() => import("./pages/CreateEmployeePage"))}
            />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}
