import { useFormik } from "formik";

import useAuth from "./useAuth";
import useNotification from "./useNotification";
import api from "../utils/axios.config";

export function useLoginFormik(onSuccessfulCallback = null) {
  const { showNotification } = useNotification();
  const { signIn } = useAuth();

  const initialValues = {
    userName: "",
    password: "",
  };

  const validate = (values) => {
    let error = {};
    const { userName, password } = values;

    if (!userName) error.userName = "الزامی";
    if (!password) error.password = "الزامی";

    return error;
  };

  const onSubmit = async (values) => {
    try {
      const result = await (await api.post("/auth/login", values)).data;
      signIn(result);
      showNotification("خوش آمدید");

      if (onSuccessfulCallback) onSuccessfulCallback();
    } catch (error) {
      showNotification(
        error.response ? error.response.data : error.message,
        "error",
        3000
      );
    }
  };

  return useFormik({
    initialValues,
    validate,
    isInitialValid: true,
    onSubmit,
  });
}
