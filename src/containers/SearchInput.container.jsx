import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const SearchInputContainer = styled(Grid)(({ theme, isFocused, isFilled }) => {
  const SVG_TRANSITION = theme.transitions.create(["width", "opacity"], {
    duration: theme.transitions.duration.standard,
  });

  const defaultStyle = {
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    columnGap: 4,
    padding: "18px 16px",
    height: 60,

    "& input": {
      height: "100%",
      caretColor: theme.palette.primary.main,
      "&::-webkit-search-cancel-button": {
        WebkitAppearance: "none",
      },
      "&::placeholder": {
        fontWeight: 400,
        fontSize: 16,
        paddingRight: 4,
      },
    },

    "& div:first-of-type": {
      width: "max-content",
      opacity: 1,
      overflow: "hidden",
      transition: SVG_TRANSITION,
      "& svg": {
        fill: theme.palette.text.secondary,
      },
    },
    "& div:last-of-type": {
      width: 0,
      opacity: 0,
      overflow: "hidden",
      transition: SVG_TRANSITION,
      "& svg": {
        fill: theme.palette.primary.main,
      },
    },
  };

  if (isFocused || isFilled) {
    defaultStyle["& div:first-of-type"].width = 0;
    defaultStyle["& div:first-of-type"].opacity = 0;
    defaultStyle["& div:last-of-type"].width = "max-content";
    defaultStyle["& div:last-of-type"].opacity = 1;
  }

  return defaultStyle;
});

export default SearchInputContainer;
