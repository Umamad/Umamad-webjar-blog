import {
  createContext,
  useState,
  forwardRef,
  useCallback,
  useMemo,
} from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";

import MainSnackBar from "../src/snackbars/Main.snackbars";

export const NotificationContext = createContext();

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NotificationProvider({ children }) {
  const DEFAULT_NOTIFICATION_DURATION = 1500;

  //! Notification State Definition
  const [notification, setNotification] = useState({
    open: false,
    autoHideDuration: DEFAULT_NOTIFICATION_DURATION,
    severity: "success",
    text: "",
    anchorOrigin: { vertical: "top", horizontal: "center" },
  });

  //! Dialog State Definition
  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    text: "",
    onAgree: null,
    onDesAgree: null,
  });

  //! Notification Functions
  const hideNotification = useCallback(
    () => setNotification({ ...notification, open: false }),
    []
  );

  const showNotification = useCallback(
    (
      // open,
      text,
      severity = "success",
      autoHideDuration = DEFAULT_NOTIFICATION_DURATION,
      anchorOrigin = { vertical: "top", horizontal: "center" }
    ) =>
      setNotification({
        open: true,
        autoHideDuration,
        severity,
        text,
        anchorOrigin,
      }),
    []
  );

  const isShowingNotification = useMemo(
    () => notification.open,
    [notification]
  );

  //! Dialog Functions
  const hideDialog = useCallback(
    () => setDialog({ ...dialog, open: false }),
    []
  );

  const showDialog = useCallback(
    (title, text, onAgree, onDesAgree) =>
      setDialog({
        open: true,
        title,
        text,
        onAgree,
        onDesAgree,
      }),
    []
  );

  const isShowingDialog = useMemo(() => dialog.open, [dialog]);

  return (
    <NotificationContext.Provider
      value={{
        showNotification,
        hideNotification,
        isShowingNotification,
        showDialog,
        hideDialog,
        isShowingDialog,
      }}
    >
      {children}
      <MainSnackBar
        open={notification.open}
        handleClose={hideNotification}
        autoHideDuration={notification.autoHideDuration}
        severity={notification.severity}
        anchorOrigin={notification.anchorOrigin}
      >
        {notification.text}
      </MainSnackBar>

      <Dialog
        open={dialog.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={hideDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{dialog.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialog.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialog.onDesAgree}>Cancel</Button>
          <Button onClick={dialog.onAgree}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;
