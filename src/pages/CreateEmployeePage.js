import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Router } from "../router/Routes";

import styled from "styled-components";

import { States } from "../data/States";
import { Departments } from "../data/Departments";

import DateTimePicker from "react-datetime-picker";

import { useSelector, useDispatch } from "react-redux";
import { setEmployees } from "../redux/reducers";

import LogoImage from "../logo.png";

import { Colors } from "../utils/style/Colors";

import { Helmet } from "react-helmet-async";

import Moment from 'moment';

import Modal from "@matthieumelin/mm-react-modal";

export default function CreateEmployeePage() {
  const defaultNewEmployee = {
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

    const allIsFilled = Object.values(newEmployee).every(
      (value) => value !== ""
    );

    if (allIsFilled) {
      const newEmployeeData = {
        firstName: newEmployee.firstName,
        lastName: newEmployee.lastName,
        startDate: Moment(newEmployee.startDate).format('YYYY/MM/DD'),
        department: newEmployee.department,
        dateOfBirth: Moment(newEmployee.dateOfBirth).format('YYYY/MM/DD'),
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
      <Helmet>
        <title>HRNet - Create employee</title>
      </Helmet>

      <Main>
        <Logo src={LogoImage} alt="Logo de Wealth Health" />
        <Title>HRnet</Title>
        <Container>
          <ViewEmployees to={Router.CurrentEmployees}>
            View Current Employees
          </ViewEmployees>
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
              <FormDateTime
                format="y-MM-dd"
                disableClock={true}
                value={newEmployee.dateOfBirth}
                onChange={(value) => {
                  setNewEmployee({
                    ...newEmployee,
                    dateOfBirth: value,
                  });
                }}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="start-date">Start Date</FormLabel>
              <FormDateTime
                format="y-MM-dd"
                disableClock={true}
                maxDate={new Date()}
                value={newEmployee.startDate}
                onChange={(value) =>
                  setNewEmployee({
                    ...newEmployee,
                    startDate: value,
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
          message={"Employee Created!"}
          isOpen={modalIsOpen}
          onConfirm={() => setModalIsOpen(!modalIsOpen)}
        />
      </Main>
    </StyledCreateEmployeePage>
  );
}

const StyledCreateEmployeePage = styled.div`
  width: 100vw;
  background: lightgray;
`;
const Main = styled.main``;
const Logo = styled.img`
  display: block;
  padding: 30px 0 0 0;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const Title = styled.h1`
  margin: 0;
  padding: 20px 0 0 0;
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
const ViewEmployees = styled(Link)`
  color: inherit;
  display: block;
  background-color: ${Colors.primary};
  color: #fff;
  margin: 10px 0 0 0;
  padding: 5px 10px;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    background-color: ${Colors.secondary};
    transition: 0.5s;
  }
`;
const SubTitle = styled.h2``;
const Form = styled.form``;
const FormGroup = styled.div`
  margin: 20px 0;
  &:first-child {
    margin: 0;
  }
`;
const FormLabel = styled.label`
  display: block;
  margin: 0 0 10px 0;
  font-weight: 500;
`;
const FormDateTime = styled(DateTimePicker)`
  background-color: white;
  width: 100%;
`;
const FormInput = styled.input`
  width: 100%;
  padding: 5px;
  outline: none;
  font-family: inherit;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;
const FormFieldSet = styled.fieldset`
  margin: 20px 0;
`;
const FormFieldSetLegend = styled.legend``;
const FormSelect = styled.select`
  padding: 6px 5px;
  font-family: inherit;
  outline: none;
  width: 100%;
`;
const FormSelectOption = styled.option``;
const Button = styled.button`
  background-color: ${Colors.primary};
  border: none;
  border-radius: 2px;
  color: white;
  font-family: inherit;
  padding: 5px 20px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: ${Colors.secondary};
    transition: 0.5s;
  }
`;
