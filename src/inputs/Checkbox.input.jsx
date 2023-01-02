import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

import TickIcon from "../../public/images/icons/tick-icon.svg";

const CustomIcon = styled("span")(({ theme }) => ({
  borderRadius: 4,
  width: 30,
  height: 30,
  border: `2px solid ${theme.palette.text.secondary}`,
  backgroundColor: "#f5f8fa",
  backgroundImage: "white",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const CustomIconCheckedIcon = styled(CustomIcon)(({ theme }) => ({
  backgroundColor: "white",
  border: `2px solid ${theme.palette.primary.main}`,
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 14,
    height: 12,
    backgroundImage: `url("${TickIcon.src}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    content: '""',
  },
}));

export default function CheckboxInput(props) {
  return (
    <Checkbox
      disableRipple
      color="default"
      checkedIcon={<CustomIconCheckedIcon />}
      icon={<CustomIcon />}
      inputProps={{ "aria-label": "Checkbox custom" }}
      {...props}
    />
  );
}
