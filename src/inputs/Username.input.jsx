import { useState, useRef, useMemo } from "react";

import { Grid, Typography, InputBase } from "@mui/material";

import InputContainer from "../containers/Input.container";

import UserIcon from "../icons/user.icon";

const UsernameInput = ({
  label,
  name,
  placeholder,
  value,
  error,
  onChange,
}) => {
  const inputRef = useRef(null);
  const handleFocus = () => inputRef.current.focus();

  const [isFocused, setIsFocused] = useState(false);
  const toggleFocus = () => setIsFocused(!isFocused);

  const isFilled = useMemo(
    () => !isFocused && !error && inputRef?.current?.value,
    [value, isFocused, error]
  );

  return (
    <InputContainer
      container
      isFocused={isFocused}
      error={error}
      isFilled={isFilled}
    >
      <Typography component="label" htmlFor={name}>
        {label}
      </Typography>
      <Grid container item className="inner-container" onClick={handleFocus}>
        <UserIcon />
        <InputBase
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          fullWidth
          onFocus={toggleFocus}
          onBlur={toggleFocus}
          inputRef={inputRef}
          sx={{
            height: "100%",
          }}
        />
      </Grid>
    </InputContainer>
  );
};

export default UsernameInput;
