import { useState, useMemo, useRef } from "react";

import { Grid, InputBase } from "@mui/material";

import SearchInputContainer from "../containers/SearchInput.container";

import SearchIcon from "../icons/search.icon";

const SearchInput = ({ name, placeholder, value, error, onChange, sx }) => {
  const inputRef = useRef(null);
  const handleFocus = () => inputRef.current.focus();

  const [isFocused, setIsFocused] = useState(false);
  const toggleFocus = () => setIsFocused(!isFocused);

  const isFilled = useMemo(
    () => !isFocused && inputRef?.current?.value,
    [value, isFocused]
  );

  return (
    <SearchInputContainer
      container
      isFocused={isFocused}
      isFilled={isFilled}
      onClick={handleFocus}
      sx={sx}
    >
      <Grid item>
        <SearchIcon />
      </Grid>
      <InputBase
        type="search"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        fullWidth
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        inputRef={inputRef}
      />
      <Grid item>
        <SearchIcon />
      </Grid>
    </SearchInputContainer>
  );
};

export default SearchInput;
