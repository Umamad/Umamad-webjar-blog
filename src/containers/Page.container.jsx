import Grid from "@mui/material/Grid";

const PageContainer = ({ children, sx, ...restOfProps }) => {
  return (
    <Grid
      container
      maxWidth={1520}
      px={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 0 }}
      mx="auto"
      display="block"
      sx={sx}
      {...restOfProps}
    >
      {children}
    </Grid>
  );
};

export default PageContainer;
