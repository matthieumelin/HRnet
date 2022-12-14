import React from "react";
import { NavLink } from "react-router-dom";
import { Router } from "../router/Routes";

import { Helmet } from "react-helmet-async";

import styled from "styled-components";

import { employeeAttributes } from "../data/EmployeeAttributes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { Colors } from "../utils/style/Colors";

import { useSelector } from "react-redux";

import Table from '@matthieumelin/mm-react-table';

export default function CurrentEmployeesPage() {
  const employees = useSelector((state) => state.employees.employees);

  return (
    <StyledCurrentEmployees>
      <Helmet>
        <title>HRNet - Current employees</title>
      </Helmet>

      <Main>
        <MainTitle>Current Employees</MainTitle>
        <Table datas={employees} attributes={employeeAttributes} />
        <HomeLink to={Router.CreateEmployee}>
          <HomeLinkIcon icon={faHome} />
          Home
        </HomeLink>
      </Main>
    </StyledCurrentEmployees>
  );
}

const StyledCurrentEmployees = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
`;
const Main = styled.main``;
const MainTitle = styled.h1`
  margin: 0;
  padding: 30px 0 0 0;
  text-align: center;
`;
const HomeLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  display: block;
  margin: 0 auto;
  color: ${Colors.primary};
`;
const HomeLinkIcon = styled(FontAwesomeIcon)`
  margin: 0 5px 0 0;
`;
