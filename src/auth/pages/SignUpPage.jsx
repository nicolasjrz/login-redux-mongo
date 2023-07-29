import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { LayoutAuth } from "../layout/LayoutAuth";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useAuthStore } from "../../hooks/useAuthStore";
export const SignUpPage = () => {
  const theme = useTheme();

  const { startRegister, errorMessage } = useAuthStore();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    startRegister(data);
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error al crear la cuenta", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <LayoutAuth title="SignUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="name"
              label="Fullname"
              variant="standard"
              type="text"
              {...register("name", {
                required: "El nombre es requerido",
                minLength: {
                  value: 5,
                  message: "El nombre debe tener al menos 5 caracteres",
                },
              })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <Typography
                mt={1}
                color={theme.palette.text.secondary}
                sx={{ textAlign: "end" }}
              >
                {errors.name?.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="standard"
              type="email"
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
              id="password"
              label="Password"
              variant="standard"
              type="password"
              {...register("password", {
                required: "La contraseña es requerida",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
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
              SignUp
            </Button>
          </Grid>

          <Grid
            container
            mt={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Link component={RouterLink} to="/auth/login" mt={1}>
              Already have an account?
            </Link>
          </Grid>
        </Grid>
      </form>
    </LayoutAuth>
  );
};
