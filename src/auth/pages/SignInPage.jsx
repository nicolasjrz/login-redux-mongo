import { Button, Grid, Link, TextField } from "@mui/material";
import { LayoutAuth } from "../layout/LayoutAuth";

export const SignInPage = () => {
  return (
    <LayoutAuth title="SignIn">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="fullname"
              label="Fullname"
              variant="standard"
              type="text"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="standard"
              type="email"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="password"
              label="Password"
              variant="standard"
              type="password"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Button variant="contained" fullWidth>
              SignIn
            </Button>
          </Grid>

          <Grid
            container
            mt={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Link mt={1}>ya tienes cuenta?</Link>
          </Grid>
        </Grid>
      </form>
    </LayoutAuth>
  );
};
