import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const PostListItemContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "0px 0px 30px rgba(0, 200, 83, 0.05)",
  borderRadius: theme.shape.borderRadius,
  flexWrap: "nowrap",
  overflow: "hidden",
  "div:nth-of-type(1)": {
    minWidth: 300,
    height: 300,
    position: "relative",
  },
  "div:nth-of-type(2)": {
    paddingRight: 70,
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 20,
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    maxWidth: 780,
    overflow: "hidden",
    "& h6": {
      marginBottom: 38,
    },
    "& p": {
      marginBottom: 'auto',
      display: "-webkit-box",
      maxWidth: "100%",
      maxHeight: 100,
      "-webkit-line-clamp": "3",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
    },
    "& div": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      width: "100%",
      justifyContent: "space-between",
      height: 30,
    },
  },
  "div:nth-of-type(3)": {
    display: "flex",
    paddingLeft: 10,
    "& button": {
      minWidth: 160,
      alignSelf: "end",
      marginBottom: 20,
    },
  },
}));

export default PostListItemContainer;
