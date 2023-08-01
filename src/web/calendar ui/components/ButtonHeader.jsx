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
            backgroundColor: "#f0f0f0", // Cambia el color gris claro aquí
            color: "black",
          },
          color: "#f2f2f2",
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
