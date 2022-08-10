import React, { useState } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

export default function SelectEntries() {
  const options = [10, 25, 50, 100];
  const [value, setValue] = useState(options[0]);

  return (
    <StyledSelectEntries>
      <SelectEntriesSpan>Show</SelectEntriesSpan>
      <SelectEntriesSelect
        value={value}
        onChange={(event) => setValue(event.target.value)}
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

const StyledSelectEntries = styled.div`
display: flex;
gap: 5px;
`;
const SelectEntriesSpan = styled.span``;
const SelectEntriesSelect = styled.select``;
const SelectEntriesSelectOption = styled.option``;