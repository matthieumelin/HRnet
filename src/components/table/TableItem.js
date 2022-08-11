import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export default function TableItem({ employee }) {
  return (
    <TableRow isEventIndex={employee.id % 2 === 0 ? true : false}>
      <TableData>{employee.firstName}</TableData>
      <TableData>{employee.lastName}</TableData>
      <TableData>{employee.startDate}</TableData>
      <TableData>{employee.department}</TableData>
      <TableData>{employee.dateOfBirth}</TableData>
      <TableData>{employee.street}</TableData>
      <TableData>{employee.city}</TableData>
      <TableData>{employee.state}</TableData>
      <TableData>{employee.zipCode}</TableData>
    </TableRow>
  );
}

TableItem.propTypes = {
  employee: PropTypes.shape({
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
  }),
};

TableItem.defaultProps = {
  employee: {},
};

const TableRow = styled.tr``;
const TableData = styled.td``;
