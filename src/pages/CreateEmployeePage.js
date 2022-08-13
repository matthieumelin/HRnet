import React, { useState } from "react";

// router
import { Link } from "react-router-dom";
import { Router } from "../router/Routes";

// modal
import Modal from "@matthieumelin/mm-react-modal";

// styled
import styled from "styled-components";

// data
import { States } from "../data/States";
import { Departments } from "../data/Departments";

import DateTimePicker from "react-datetime-picker";

import { useSelector, useDispatch } from "react-redux";
import { setEmployees } from "../redux/reducers";

export default function CreateEmployeePage() {
  const defaultNewEmployee = {
    id: 1,
    firstName: "",
    lastName: "",
    startDate: "",
    department: "Sales",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "US",
    zipCode: "",
  };

  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();

  const [newEmployee, setNewEmployee] = useState(defaultNewEmployee);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(newEmployee).length > 0) {
      const newEmployeeData = {
        id: employees.length+1,
        firstName: newEmployee.firstName,
        lastName: newEmployee.lastName,
        startDate: newEmployee.startDate,
        department: newEmployee.department,
        dateOfBirth: newEmployee.dateOfBirth,
        street: newEmployee.street,
        city: newEmployee.city,
        state: newEmployee.state,
        zipCode: newEmployee.zipCode,
      };
      const data = [...employees, newEmployeeData];
    
      dispatch(setEmployees(data));

      setModalIsOpen(!modalIsOpen);

      sessionStorage.setItem("employees", JSON.stringify(data));
    }
  };

  return (
    <StyledCreateEmployeePage>
      <Main>
        <MainTitle>HRnet</MainTitle>
        <Container>
          <Link to={Router.CurrentEmployees}>View Current Employees</Link>
          <SubTitle>Create Employee</SubTitle>
          <Form onSubmit={(event) => onSubmit(event)}>
            <FormGroup>
              <FormLabel htmlFor="first-name">First Name</FormLabel>
              <FormInput
                type="text"
                id="first-name"
                value={newEmployee.firstName}
                onChange={(event) =>
                  setNewEmployee({
                    ...newEmployee,
                    firstName: event.target.value,
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="last-name">Last Name</FormLabel>
              <FormInput
                type="text"
                id="last-name"
                value={newEmployee.lastName}
                onChange={(event) =>
                  setNewEmployee({
                    ...newEmployee,
                    lastName: event.target.value,
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="date-of-birth">Date of Birth</FormLabel>
              <DateTimePicker
                format="y-MM-dd"
                disableClock={true}
                value={newEmployee.dateOfBirth}
                onChange={(value) =>
                  setNewEmployee({
                    ...newEmployee,
                    dateOfBirth: new Date(value),
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="start-date">Start Date</FormLabel>
              <DateTimePicker
                format="y-MM-dd"
                disableClock={true}
                maxDate={new Date()}
                value={newEmployee.startDate}
                onChange={(value) =>
                  setNewEmployee({
                    ...newEmployee,
                    startDate: new Date(value),
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormFieldSet>
                <FormFieldSetLegend>Address</FormFieldSetLegend>
                <FormGroup>
                  <FormLabel htmlFor="street">Street</FormLabel>
                  <FormInput
                    type="text"
                    id="street"
                    value={newEmployee.street}
                    onChange={(event) =>
                      setNewEmployee({
                        ...newEmployee,
                        street: event.target.value,
                      })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="city">City</FormLabel>
                  <FormInput
                    type="text"
                    id="city"
                    value={newEmployee.city}
                    onChange={(event) =>
                      setNewEmployee({
                        ...newEmployee,
                        city: event.target.value,
                      })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="state">State</FormLabel>
                  <FormSelect
                    id="state"
                    value={newEmployee.state}
                    onChange={(event) =>
                      setNewEmployee({
                        ...newEmployee,
                        city: event.target.value,
                      })
                    }
                  >
                    {States.map((state, key) => {
                      return (
                        <FormSelectOption key={key}>
                          {state.name}
                        </FormSelectOption>
                      );
                    })}
                  </FormSelect>
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="zip-code">Zip Code</FormLabel>
                  <FormInput
                    type="number"
                    id="zip-code"
                    value={newEmployee.zipCode}
                    onChange={(event) =>
                      setNewEmployee({
                        ...newEmployee,
                        zipCode: event.target.value,
                      })
                    }
                  />
                </FormGroup>
              </FormFieldSet>
              <FormGroup>
                <FormLabel htmlFor="department">Department</FormLabel>
                <FormSelect
                  id="department"
                  value={newEmployee.department}
                  onChange={(event) =>
                    setNewEmployee({
                      ...newEmployee,
                      department: event.target.value,
                    })
                  }
                >
                  {Departments.map((department, key) => {
                    return (
                      <FormSelectOption key={key}>
                        {department}
                      </FormSelectOption>
                    );
                  })}
                </FormSelect>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <Button type="submit">Save</Button>
            </FormGroup>
          </Form>
        </Container>
        <Modal
          customCloseButton={{
            position: "absolute",
            right: -10,
            top: -10,
            width: 15,
            height: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
            borderRadius: 100,
          }}
          customMessage={{ textAlign: "center", width: "100%" }}
          customModal={{ position: "relative", height: 50, width: 400 }}
          message={"Employee Created!"}
          isOpen={modalIsOpen}
          onConfirm={() => setModalIsOpen(!modalIsOpen)}
        />
      </Main>
    </StyledCreateEmployeePage>
  );
}

const StyledCreateEmployeePage = styled.div``;
const Main = styled.main``;
const MainTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubTitle = styled.h2``;
const Form = styled.form``;
const FormGroup = styled.div``;
const FormLabel = styled.label`
  display: block;
  margin-top: 1rem;
  margin-bottom: 10px;
`;
const FormInput = styled.input``;
const FormFieldSet = styled.fieldset``;
const FormFieldSetLegend = styled.legend``;
const FormSelect = styled.select``;
const FormSelectOption = styled.option``;
const Button = styled.button``;
