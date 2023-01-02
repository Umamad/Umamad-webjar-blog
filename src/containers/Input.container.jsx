import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const InputContainer = styled(Grid)(({ theme, isFocused, error, isFilled }) => {
  const DEF_INPUT_COLOR = theme.palette.text.inputDefaultColor;
  const COLOR_TRANSITION = theme.transitions.create(["border-color"], {
    duration: theme.transitions.duration.standard,
  });

  const defaultStyle = {
    display: "flex",
    flexDirection: "column",

    label: {
      color: DEF_INPUT_COLOR,
      marginBottom: 8,
      transition: COLOR_TRANSITION,
      fontSize: 18,
    },

    "& .inner-container": {
      border: `1px solid ${DEF_INPUT_COLOR}`,
      padding: 18,
      height: 56,
      borderRadius: theme.shape.borderRadius,
      display: "flex",
      alignItems: "center",
      flexWrap: "nowrap",
      columnGap: 25,
      cursor: "text",
      transition: theme.transitions.create(["border-color"], {
        duration: theme.transitions.duration.standard,
      }),
      "& svg": {
        fill: DEF_INPUT_COLOR,
        transition: theme.transitions.create(["fill"], {
          duration: theme.transitions.duration.standard,
        }),
      },
      "& input": {
        height: "100%",
      },
      "& input::placeholder": {
        fontSize: 14,
        color: DEF_INPUT_COLOR,
        paddingRight: 4,
        transition: COLOR_TRANSITION,
      },
    },
  };

  function setColorForConditionalParts(color) {
    defaultStyle.label.color = color;
    defaultStyle["& .inner-container"].borderColor = color;
    defaultStyle["& .inner-container"]["& svg"].fill = color;
    defaultStyle["& .inner-container"]["& input"].caretColor = color;
    defaultStyle["& .inner-container"]["& input"].caretColor = color;
    defaultStyle["& .inner-container"]["& input::placeholder"].color = color;
  }

  if (isFocused) setColorForConditionalParts(theme.palette.primary.main);
  if (error) setColorForConditionalParts(theme.palette.error.main);
  if (isFilled) setColorForConditionalParts("black");

  return defaultStyle;
});

export default InputContainer;
