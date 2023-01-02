import { useState } from "react";
import Image from "next/image";

import useAuth from "../../hooks/useAuth";

import { AppBar, Toolbar, Grid } from "@mui/material";

import PageContainer from "../containers/Page.container";
import PrimaryButton from "../buttons/Primary.buttons";
import NavigationList from "../lists/Navigation.list";
import LoginModal from "../modals/Login.modal";

import Logo from "../../public/images/Group.png";

const MainAppBar = () => {
  const { isLogin, signOut } = useAuth();

  const [loginModal, setLoginModal] = useState(false);
  const toggleLoginModal = () => setLoginModal(!loginModal);

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.05)" }}
    >
      <PageContainer sx={{ height: 128, display: "flex" }}>
        <Toolbar disableGutters sx={{ width: "100%" }}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            flexWrap="nowrap"
            height="100%"
          >
            <Grid
              container
              item
              height="100%"
              alignItems="center"
              maxWidth={600}
              justifyContent="space-between"
            >
              <Image src={Logo} alt="Logo" />
              <NavigationList />
            </Grid>

            {isLogin ? (
              <PrimaryButton
                onClick={signOut}
                variant="outlined"
                sx={{ height: 56, minWidth: 157 }}
              >
                خروج
              </PrimaryButton>
            ) : (
              <PrimaryButton
                onClick={toggleLoginModal}
                variant="outlined"
                sx={{ height: 56, minWidth: 157 }}
              >
                ورود
              </PrimaryButton>
            )}
          </Grid>
        </Toolbar>
      </PageContainer>

      <LoginModal open={loginModal} handleClose={toggleLoginModal} />
    </AppBar>
  );
};

export default MainAppBar;
