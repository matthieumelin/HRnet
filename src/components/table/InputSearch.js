import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export default function InputSearch({ onSetInput }) {
  const [value, setValue] = useState("");

  const splitInputToArray = (input) => {
    return input.split(" ");
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setValue(value);
    onSetInput(splitInputToArray(value));
  };

  return (
    <StyledInputSearch>
      <InputSearchLabel htmlFor="search">Search:</InputSearchLabel>
      <Input
        type="text"
        id="search"
        name="Search"
        value={value}
        onChange={(event) => handleInput(event)}
      />
    </StyledInputSearch>
  );
}

InputSearch.propTypes = {
  onSetInput: PropTypes.func,
};

const StyledInputSearch = styled.div``;
const InputSearchLabel = styled.label`
  margin: 0 10px 0 0;
`;
const Input = styled.input``;
