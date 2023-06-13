import { Grid, Typography } from "@mui/material";

export const LayoutAuth = ({ children, title }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 2 }}
    >
      <Grid
        item
        sx={{
          width: { md: 1450 },
          backgroundColor: "white",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" color={"black"} sx={{ mb: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
