/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const ButtonHeader = ({ fn, direction }) => {
  return (
    <Grid item padding={1}>
      <Typography
        component="button"
        onClick={fn}
        sx={{
          borderRadius: "50%",
          padding: "8px",
          border: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "rgba(187, 184, 184, 0.329)", // Cambia el color gris claro aquí
            color: "#242323",
          },
          color: "#242323",
        }}
      >
        {direction === "next" ? (
          <KeyboardArrowRightIcon />
        ) : (
          <KeyboardArrowLeftIcon />
        )}
      </Typography>
    </Grid>
  );
};
