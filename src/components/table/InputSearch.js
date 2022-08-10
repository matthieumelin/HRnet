import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export default function InputSearch() {
  const [value, setValue] = useState("");
  return (
    <StyledInputSearch>
      <InputSearchLabel htmlFor="search">Search:</InputSearchLabel>
      <Input
        type="text"
        id="search"
        name="Search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </StyledInputSearch>
  );
}

const StyledInputSearch = styled.div``;
const InputSearchLabel = styled.label`
  margin: 0 10px 0 0;
`;
const Input = styled.input``;
