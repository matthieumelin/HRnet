import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export default function SelectEntries({ onSetInput }) {
  const options = [10, 25, 50, 100];

  const [value, setValue] = useState(options[0]);

  const handleSelect = (event) => {
    const value = JSON.parse(event.target.value);
    setValue(value);
    onSetInput(value);
  };

  return (
    <StyledSelectEntries>
      <SelectEntriesSpan>Show</SelectEntriesSpan>
      <SelectEntriesSelect
        value={value}
        onChange={(event) => handleSelect(event)}
      >
        {options.map((option) => {
          return (
            <SelectEntriesSelectOption key={option} value={option}>
              {option}
            </SelectEntriesSelectOption>
          );
        })}
      </SelectEntriesSelect>
      <SelectEntriesSpan>entries</SelectEntriesSpan>
    </StyledSelectEntries>
  );
}

SelectEntries.propTypes = {
  onSetInput: PropTypes.func,
};

const StyledSelectEntries = styled.div`
  display: flex;
  gap: 5px;
`;
const SelectEntriesSpan = styled.span``;
const SelectEntriesSelect = styled.select``;
const SelectEntriesSelectOption = styled.option``;
