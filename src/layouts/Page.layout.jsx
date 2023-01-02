import { Grid } from "@mui/material";

import useBreadcrumbData from "../../hooks/useBreadcrumbData";

import MainAppBar from "../appbars/Main.appbar";
import MainBreadcrumb from "../breadcrumbs/Main.breadcrumb";
import PageContainer from "../containers/Page.container";

const PageLayout = ({ children }) => {
  const breadCrumbData = useBreadcrumbData();

  return (
    <Grid container>
      <MainAppBar />
      <PageContainer>
        <MainBreadcrumb routeList={breadCrumbData} />
        {children}
      </PageContainer>
    </Grid>
  );
};

export default PageLayout;
