import React, { useState } from "react";
import PropTypes from "prop-types";

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

export default function CreateEmployeePage() {
  const [newEmployee, setNewEmployee] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const createNewEmployee = (event) => {
    event.preventDefault();
  };

  return (
    <StyledCreateEmployeePage>
      <Main>
        <MainTitle>HRnet</MainTitle>
        <Container>
          <Link to={Router.CurrentEmployees}>View Current Employees</Link>
          <SubTitle>Create Employee</SubTitle>
          <Form>
            <FormGroup>
              <FormLabel htmlFor="first-name">First Name</FormLabel>
              <FormInput
                type="text"
                id="first-name"
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
              <FormInput
                type="text"
                id="date-of-birth"
                onChange={(event) =>
                  setNewEmployee({
                    ...newEmployee,
                    dateOfBirth: event.target.value,
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="start-date">Start Date</FormLabel>
              <FormInput
                type="text"
                id="start-date"
                onChange={(event) =>
                  setNewEmployee({
                    ...newEmployee,
                    startDate: event.target.value,
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
              <Button onClick={(event) => createNewEmployee(event)}>
                Save
              </Button>
            </FormGroup>
          </Form>
        </Container>
        <Modal
          customCloseButton={{
            position: "absolute",
            right: -10,
            top: -10,
            width: 20,
            height: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
            borderRadius: 100,
          }}
          customMessage={{ textAlign: "center", width: "100%" }}
          customContainer={{ position: "relative", height: 50, width: 400 }}
          message={"Employee Created!"}
          isOpen={modalIsOpen}
          onConfirm={() => setModalIsOpen(!modalIsOpen)}
        />
      </Main>
    </StyledCreateEmployeePage>
  );
}

CreateEmployeePage.propTypes = {
  createNewEmployee: PropTypes.func,
};

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
