import { styled } from "@mui/material/styles";
import Link from "next/link";
import theme from "../theme";

const NavigationListItem = styled(Link)(({ them, current }) => ({
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 20,
  color: current ? theme.palette.primary.main : theme.palette.text.primary,
  borderBottom: current ? `5px solid ${theme.palette.primary.main}` : "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: 20,
  paddingRight: 20,
  textDecoration: 'none',
  height: '100%',
}));

// const NavigationListItem = ({label, href}) => {
//   return (
//     <div>NavigationListItem</div>
//   )
// }

export default NavigationListItem;
