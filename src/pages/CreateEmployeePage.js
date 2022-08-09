import React from "react";

// router
import { Link } from "react-router-dom";
import { Router } from "../router/Routes";

// styled
import styled from "styled-components";

// data
import { States } from "../data/States";
import { Departments } from "../data/Departments";

export default function CreateEmployeePage() {
  return (
    <StyledCreateEmployeePage>
      <Title>HRnet</Title>
      <Main>
        <Container>
          <Link to={Router.CurrentEmployees}>View Current Employees</Link>
          <SubTitle>Create Employee</SubTitle>
          <Form>
            <FormGroup>
              <FormLabel htmlFor="first-name">First Name</FormLabel>
              <FormInput type="text" id="first-name" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="last-name">Last Name</FormLabel>
              <FormInput type="text" id="last-name" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="date-of-birth">Date of Birth</FormLabel>
              <FormInput type="text" id="date-of-birth" />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="start-date">Start Date</FormLabel>
              <FormInput type="text" id="start-date" />
            </FormGroup>
            <FormGroup>
              <FormFieldSet>
                <FormFieldSetLegend>Address</FormFieldSetLegend>
                <FormGroup>
                  <FormLabel htmlFor="street">Street</FormLabel>
                  <FormInput type="text" id="street" />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="city">City</FormLabel>
                  <FormInput type="text" id="city" />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="state">State</FormLabel>
                  <FormSelect id="state">
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
                  <FormInput type="number" id="zip-code" />
                </FormGroup>
              </FormFieldSet>
              <FormGroup>
                <FormLabel htmlFor="department">Department</FormLabel>
                <FormSelect>
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
              <Button>Save</Button>
            </FormGroup>
          </Form>
        </Container>
      </Main>
    </StyledCreateEmployeePage>
  );
}

const StyledCreateEmployeePage = styled.div``;
const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Main = styled.main``;
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
