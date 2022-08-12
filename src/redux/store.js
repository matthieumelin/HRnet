import { configureStore } from "@reduxjs/toolkit";

import { employeeReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});
