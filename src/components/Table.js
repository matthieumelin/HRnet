import React, { useState } from "react";
import PropTypes from "prop-types";

import InputSearch from "./table/InputSearch";
import SelectEntries from "./table/SelectEntries";
import EntriesInfo from "./table/EntriesInfo";
import Pagination from "./table/Pagination";
import TableHeader from "./table/TableHeader";
import TableItem from "./table/TableItem";

import styled from "styled-components";

import { employeeAttributes } from "../data/EmployeeAttributes";

import { useSelector } from "react-redux";

const itemMatchesFilter = (employee, word) => {
  let res = false;
  Object.keys(employee).some((key) => {
    if (
      key !== "id" &&
      employee[key].toLowerCase().includes(word.toLowerCase())
    ) {
      res = true;
    }
  });
  return res;
};

const listFiltering = (employee, searchedWords) => {
  let res = false;

  for (const word of searchedWords) {
    res = itemMatchesFilter(employee, word);
    if (!res) return false;
  }
  return res;
};

const listSorting = (a, b, attribute, order) => {
  const textA = a[attribute].toLowerCase();
  const textB = b[attribute].toLowerCase();

  let res;

  if (textA === "" || textB === "") {
    return textA === "" ? (textB === "" ? 0 : 1) : -1;
  } else {
    res = textA < textB ? -1 : textA > textB ? 1 : 0;
  }
  return res === 0 ? res : order ? res : -res;
};

export default function Table() {
  const employees = useSelector((state) => state.employees.employees);
  const [filter, setFilter] = useState([""]);
  const [sorterAttribute, setSorterAttribute] = useState("firstName");
  const [sorterOrder, setSorterOrder] = useState(true);
  const [maxEntryNumber, setMaxEntryNumber] = useState(10);
  const [startIndex, setStartIndex] = useState(0);

  const filteredEmployeeList = employees.length
    ? employees.filter((employee) => listFiltering(employee, filter))
    : [];

  const onUpdateSorting = (sortingAttribute, sortingOrder) => {
    setSorterAttribute(sortingAttribute);
    setSorterOrder(sortingOrder);
  };

  const children = filteredEmployeeList.length
    ? filteredEmployeeList
        .filter((employee) => listFiltering(employee, filter))
        .sort((a, b) => {
          return listSorting(a, b, sorterAttribute, sorterOrder);
        })
        .slice(startIndex, +startIndex + +maxEntryNumber)
        .map((employee, index) => <TableItem key={index} employee={employee} />)
    : [];

  return (
    <StyledTable>
      <TableAside>
        <SelectEntries onSetInput={(value) => setMaxEntryNumber(value)} />
        <InputSearch onSetInput={(value) => setFilter(value)} />
      </TableAside>
      <TableContainer>
        <TableHeader
          attributes={employeeAttributes}
          onUpdateSorting={onUpdateSorting}
        />
        <TableBody>{children}</TableBody>
      </TableContainer>
      <TableAside>
        <EntriesInfo
          maxEntriesAmount={maxEntryNumber}
          startIndex={startIndex}
          listLength={employees.length}
          isFiltered={filter.length && filter[0] !== "" ? true : false}
          filteredListLength={filteredEmployeeList.length}
        />
        <Pagination
          maxEntriesAmount={maxEntryNumber}
          listLength={filteredEmployeeList.length}
          onSetPage={(value) => setStartIndex(value * maxEntryNumber)}
        />
      </TableAside>
    </StyledTable>
  );
}

Table.propTypes = {
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

Table.defaultProps = {
  employees: [],
};

const StyledTable = styled.div`
margin: 0 20px;
`;
const TableAside = styled.div`
display:flex;
justify-content: space-between;
margin: 20px 0;
`;
const TableContainer = styled.table`
background-color: white;
overflow-x:auto;
padding: 20px;
border-radius: 2px;
width:100%;
`;
const TableBody = styled.tbody``