import { createSlice } from "@reduxjs/toolkit";

import { employees } from "../data/mock/mockEmployees";

export const employeeSlice = createSlice({
    name: "employees",
    initialState: {
        employees: JSON.parse(sessionStorage.getItem('employees')) || employees
    },
    reducers: {
        setEmployees: (state, action) => {
            state.employees = action.payload;
        }
    }
})

export const { setEmployees } = employeeSlice.actions;

export const employeeReducer = employeeSlice.reducer;