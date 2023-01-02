import { useState, useRef, useMemo } from "react";

import { Grid, Typography, InputBase, IconButton } from "@mui/material";

import InputContainer from "../containers/Input.container";

import LockIcon from "../icons/lock.icon";
import EyeIcon from "../icons/eye.icon";

const PasswordInput = ({
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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

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
        <LockIcon />
        <InputBase
          type={isPasswordVisible ? "text" : "password"}
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
        <IconButton
          disableRipple
          onClick={togglePasswordVisibility}
          sx={{
            padding: 0,
          }}
        >
          <EyeIcon />
        </IconButton>
      </Grid>
    </InputContainer>
  );
};

export default PasswordInput;
