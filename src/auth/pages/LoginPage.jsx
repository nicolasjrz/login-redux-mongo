import { Button, Grid, Link, TextField } from "@mui/material";
import { LayoutAuth } from "../layout/LayoutAuth";

export const LoginPage = () => {
  return (
    <LayoutAuth title="Login">
      <form>
        <Grid container>
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
              Login
            </Button>
          </Grid>

          <Grid
            container
            mt={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Link mt={1}>Forgot password?</Link>
            <Link mt={1}>Dont have an account? Sign Up</Link>
          </Grid>
        </Grid>
      </form>
    </LayoutAuth>
  );
};
