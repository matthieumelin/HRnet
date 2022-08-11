import React from "react";
import { NavLink } from "react-router-dom";
import { Router } from "../router/Routes";

import PropTypes from "prop-types";

import styled from "styled-components";

import Table from "../components/Table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function CurrentEmployeesPage({ employees }) {
  return (
    <StyledCurrentEmployees>
      <Main>
        <MainTitle>Current Employees</MainTitle>
        <Table employees={employees} />
        <NavLink to={Router.CreateEmployee}>
          <FontAwesomeIcon icon={faHome} />
          Home
        </NavLink>
      </Main>
    </StyledCurrentEmployees>
  );
}

CurrentEmployeesPage.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      startDate: PropTypes.string,
      department: PropTypes.string,
      dateOfBirth: PropTypes.string,
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zipCode: PropTypes.string,
    })
  ),
};

CurrentEmployeesPage.defaultProps = {
  employees: [],
};

const StyledCurrentEmployees = styled.div``;
const Main = styled.main``;
const MainTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;
