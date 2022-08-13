import React from "react";
import { NavLink } from "react-router-dom";
import { Router } from "../router/Routes";

import styled from "styled-components";

import Table from "../components/Table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function CurrentEmployeesPage() {
  return (
    <StyledCurrentEmployees>
      <Main>
        <MainTitle>Current Employees</MainTitle>
        <Table />
        <NavLink to={Router.CreateEmployee}>
          <FontAwesomeIcon icon={faHome} />
          Home
        </NavLink>
      </Main>
    </StyledCurrentEmployees>
  );
}

const StyledCurrentEmployees = styled.div``;
const Main = styled.main``;
const MainTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;
