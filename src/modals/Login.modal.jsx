import { Grid, Typography } from "@mui/material";

import { useLoginFormik } from "../../hooks/useFormikSetup";

import MainModal from "./Main.modal";
import UsernameInput from "../inputs/Username.input";
import PasswordInput from "../inputs/Password.input";
import PrimaryButton from "../buttons/Primary.buttons";

const LoginModal = ({ open, handleClose }) => {
  const formik = useLoginFormik(handleClose);

  return (
    <MainModal
      open={open}
      handleClose={handleClose}
      styles={{
        py: 20,
        // px: { xl: "558px", lg: 30, md: 20, xs: 10 },
        width: { xl: 1522, md: "70vw", sm: "85vw", xs: "90vw" },
      }}
    >
      <Grid
        container
        component={formik.isSubmitting ? "div" : "form"}
        flexDirection="column"
        rowGap={8}
        width={410}
        mx="auto"
        onSubmit={formik.handleSubmit}
      >
        <Typography
          variant="h1"
          fontSize={45}
          fontWeight={500}
          textAlign="center"
        >
          ورود به حساب کاربری
        </Typography>

        <Grid container item rowGap={3}>
          <UsernameInput
            label="نام کاربری"
            placeholder="نام کاربری خود را وارد کنید"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.errors?.userName}
          />
          <PasswordInput
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد کنید"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors?.password}
          />
        </Grid>

        <PrimaryButton
          variant="contained"
          type="submit"
          loading={formik.isSubmitting}
        >
          ورود
        </PrimaryButton>
      </Grid>
    </MainModal>
  );
};

export default LoginModal;
