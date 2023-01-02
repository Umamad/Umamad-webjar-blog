import { Alert, Snackbar } from "@mui/material";

const MainSnackBar = ({
  open,
  handleClose,
  autoHideDuration,
  severity,
  children,
  anchorOrigin = { vertical: "top", horizontal: "center" }, //{ vertical, horizontal }
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
      sx={{ direction: "ltr" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export default MainSnackBar;
