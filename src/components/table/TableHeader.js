import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSortUp,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

import { Colors } from "../../utils/style/Colors";

export default function TableHeader({ attributes, onUpdateSorting }) {
  const [sorter, setSorter] = useState("firstName");
  const [order, setOrder] = useState(true);

  const handleSorterChange = (value) => {
    if (sorter === value) {
      setOrder(!order);
      onUpdateSorting(sorter, !order);
    } else {
      setSorter(value);
      setOrder(true);
      onUpdateSorting(value, true);
    }
  };

  const children = attributes.length
    ? attributes.map((attribute) => (
      <TableHeaderCell
        isSorter={attribute.value === sorter ? true : false}
        key={attribute.value}
        onClick={() => handleSorterChange(attribute.value)}
      >
        {attribute.name}
        {attribute.value === sorter ? (
          order ? (
            <TableHeaderCellArrow icon={faSortDown} />
          ) : (
            <TableHeaderCellArrow icon={faSortUp} />
          )
        ) : (
          <TableHeaderCellArrow icon={faSort} />
        )}
      </TableHeaderCell>
    ))
    : [];

  return (
    <StyledTableHeader>
      <TableHeaderRow>{children}</TableHeaderRow>
    </StyledTableHeader>
  );
}

TableHeader.propTypes = {
  attributes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onUpdateSorting: PropTypes.func,
};

TableHeader.defaultProps = {
  attributes: ["firstName"],
};

const StyledTableHeader = styled.thead``;
const TableHeaderCell = styled.th`
  cursor: pointer;
  text-align: left;
  border-bottom: 1px solid grey;
  color: ${(props) => props.isSorter ? `${Colors.primary}` : "black"};
  `;
const TableHeaderCellArrow = styled(FontAwesomeIcon)`
margin: 0 0 0 10px;
`;
const TableHeaderRow = styled.tr`
  `;