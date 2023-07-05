import { Link as RouterLink } from "react-router-dom";

import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { LayoutAuth } from "../layout/LayoutAuth";
import { useForm } from "react-hook-form";
import { useTheme } from "@emotion/react";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const theme = useTheme();
  return (
    <LayoutAuth title="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              variant="standard"
              type="email"
              label="Email"
              {...register("email", {
                required: "El correo electrónico es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Ingrese un correo electrónico válido",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <Typography
                mt={1}
                color={theme.palette.text.secondary}
                sx={{ textAlign: "end" }}
              >
                {errors.email?.message}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              variant="standard"
              type="password"
              label="Password"
              {...register("password", {
                required: "El password es requerido",
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <Typography
                mt={1}
                color={theme.palette.text.secondary}
                sx={{ textAlign: "end" }}
              >
                {errors.password?.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Button variant="contained" fullWidth type="submit">
              Login
            </Button>
          </Grid>
          <Grid
            container
            mt={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* <Link mt={1}>Forgot password?</Link> */}
            <Link component={RouterLink} to="/auth/signup" mt={1}>
              Dont have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </form>
    </LayoutAuth>
  );
};
