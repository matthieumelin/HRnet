import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export default function EntriesInfo({
  maxEntriesAmount,
  startIndex,
  listLength,
  isFiltered,
  filteredListLength,
}) {
  const startIndexText = isFiltered
    ? filteredListLength === 0
      ? 0
      : startIndex + 1
    : listLength === 0
      ? 0
      : startIndex + 1;
  const amountOfEntries = isFiltered ? filteredListLength : listLength;
  const endIndexText =
    +startIndex + +maxEntriesAmount >= amountOfEntries
      ? amountOfEntries
      : +startIndex + +maxEntriesAmount;
  const amountOfEntriesTotal = listLength;

  return (
    <StyledEntriesInfo>
      <EntriesInfoSpan>
        Showing {startIndexText} to {endIndexText} of {amountOfEntries} entries
      </EntriesInfoSpan>
      {isFiltered && (
        <EntriesInfoSpan>
          {` (filtered from ${amountOfEntriesTotal} total entries)`}
        </EntriesInfoSpan>
      )}
    </StyledEntriesInfo>
  );
}

EntriesInfo.propTypes = {
  maxEntriesAmount: PropTypes.number,
  startIndex: PropTypes.number,
  listLength: PropTypes.number,
  isFiltered: PropTypes.bool,
  filteredListLength: PropTypes.number,
};

EntriesInfo.defaultProps = {
  maxEntriesAmount: 0,
  startIndex: 0,
  listLength: 0,
  isFiltered: false,
  filteredListLength: 0,
};

const StyledEntriesInfo = styled.div``;
const EntriesInfoSpan = styled.span``;
