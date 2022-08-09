import React from 'react'

import { TableWrapper } from "@matthieumelin/mm-react-tables";

export default function CurrentEmployeesPage() {
  const columns = [
    "First Name", "Last Name", "Start Date", "Date of Birth", "Street", "City", "State", "Zip Code", "Department"
  ];
  return (
    <TableWrapper columns={columns} />
  )
}
