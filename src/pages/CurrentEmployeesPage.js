import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Table from "../components/Table";

export default function CurrentEmployeesPage() {
  return (
    <StyledCurrentEmployees>
      <Main>
        <MainTitle>Current Employees</MainTitle>
        <Table />
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
