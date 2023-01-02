import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

const useNotification = () => {
  const {
    showNotification,
    hideNotification,
    isShowingNotification,
    showDialog,
    hideDialog,
    isShowingDialog,
  } = useContext(NotificationContext);
  return {
    showNotification,
    hideNotification,
    isShowingNotification,
    showDialog,
    hideDialog,
    isShowingDialog,
  };
};

export default useNotification;
