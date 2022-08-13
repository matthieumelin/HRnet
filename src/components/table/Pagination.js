import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import { Colors } from "../../utils/style/Colors";

const generatePageButtonList = (pageAmount, actualPage) => {
  if (pageAmount <= 5) {
    const res = [];
    for (let i = 0; i < pageAmount; i++) {
      res.push(i + 1);
    }
    return res;
  } else {
    if (actualPage <= 2) {
      return [1, 2, 3, "...", pageAmount];
    } else if (actualPage >= pageAmount - 1) {
      return [1, 2, "...", pageAmount - 1, pageAmount];
    } else {
      return [1, "...", actualPage, "...", pageAmount];
    }
  }
};

export default function Pagination({
  maxEntriesAmount,
  listLength,
  onSetPage,
}) {
  const [page, setPage] = useState(1);
  const amountOfPage =
    listLength > maxEntriesAmount
      ? Math.ceil(listLength / maxEntriesAmount)
      : 1;
  const pageButtons = generatePageButtonList(amountOfPage, page);

  if (page > amountOfPage) {
    setPage(amountOfPage);
    onSetPage(amountOfPage - 1);
  }

  return (
    <StyledPagination>
      {page > 1 ? (
        <PaginationButton
          disabled={page === 1 ? true : false}
          onClick={() => {
            const previousPage = page > 1 ? page - 1 : page;
            setPage(previousPage);
            onSetPage(previousPage - 1);
          }}
        >
          Previous
        </PaginationButton>
      ) : null}
      {pageButtons.map((value, index) => {
        return (
          <PaginationButton
            disabled={value === "..." ? true : false}
            key={index + 1}
            onClick={() => {
              setPage(value);
              onSetPage(value - 1);
            }}
          >
            {value}
          </PaginationButton>
        );
      })}
      {page < amountOfPage ? (
        <PaginationButton
          disabled={page === amountOfPage ? true : false}
          onClick={() => {
            const nextPage = page < amountOfPage ? page + 1 : page;
            setPage(nextPage);
            onSetPage(nextPage - 1);
          }}
        >
          Next
        </PaginationButton>
      ) : null}
    </StyledPagination>
  );
}

Pagination.propTypes = {
  maxEntriesAmount: PropTypes.number,
  listLength: PropTypes.number,
  onSetPage: PropTypes.func,
};

Pagination.defaultProp = {
  maxEntriesAmount: 10,
  listLength: 0,
};

const StyledPagination = styled.div`
display:flex;
gap: 10px;
`;
const PaginationButton = styled.button`
padding: 5px 10px;
background-color: ${Colors.primary};
color: white;
border:none;
border-radius: 2px;
cursor:pointer;
transition: 0.5s;

&:hover {
  transition: 0.5s;
  background-color: ${Colors.secondary};
}
`;
