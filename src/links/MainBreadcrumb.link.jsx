import { styled } from "@mui/material/styles";

import Link from "./Link";

const MainBreadcrumbLink = styled(Link)(({ theme, current }) => ({
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 20,
  textDecoration: "none",
  color: current ? theme.palette.primary.main : theme.palette.text.secondary,
}));

export default MainBreadcrumbLink;
