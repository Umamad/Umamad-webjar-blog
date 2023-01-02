import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

import RotateIcon from "../icons/rotate.icon";

const DefaultButton = styled(ButtonBase)(
  ({ theme, variant, fullWidth, active, loading }) => {
    const { primary, disabled } = theme.palette;

    let defaultStyle = {
      backgroundColor: primary.main,
      color: "white",
      borderRadius: theme.shape.borderRadius,
      padding: 18,
      fontFamily: "'IRANYekan'",
      transition: theme.transitions.create(["box-shadow"], {
        duration: theme.transitions.duration.standard,
      }),
      "&:hover": {
        boxShadow: "0px 5px 10px rgba(0, 200, 83, 0.25)",
      },
      "&:active": {
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor: "rgba(0, 200, 83, 0.5)",
      },
      "&:disabled": {
        backgroundColor: disabled,
      },
      "& svg": {
        fill: "white",
        animation: `spin 2s linear infinite`,
      },

      "@keyframes spin": {
        "0%": {
          transform: "rotate(360deg)",
        },
        "100%": {
          transform: "rotate(0deg)",
        },
      },
    };

    if (fullWidth) defaultStyle.width = "100%";
    if (active)
      defaultStyle.border = `2px solid ${
        primary[variant === "contained" ? "dark" : "main"]
      }`;
    if (loading) {
      defaultStyle.display = "flex";
      defaultStyle.alignItems = "center";
      defaultStyle.columnGap = 18;
      defaultStyle.opacity = 0.7;
    }

    switch (variant) {
      case "contained":
        return defaultStyle;

      case "outlined":
        defaultStyle.border = `1px solid ${primary.main}`;
        defaultStyle.backgroundColor = "white";
        defaultStyle.color = primary.main;
        defaultStyle["&:active"].backgroundColor = "white";
        defaultStyle["&:disabled"] = {
          borderColor: disabled,
          color: disabled,
        };
        defaultStyle["& svg"].fill = primary.main;

        return defaultStyle;

      default:
        return defaultStyle;
    }
  }
);

const PrimaryButton = ({
  variant = "contained",
  loading,
  children,
  ...restOdProps
}) => {
  return (
    <DefaultButton
      variant={variant}
      loading={loading ? 1 : 0}
      disableTouchRipple
      {...restOdProps}
    >
      {children} {loading && <RotateIcon />}
    </DefaultButton>
  );
};
export default PrimaryButton;
