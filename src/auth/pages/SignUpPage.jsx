import { Button, Grid, Link, TextField } from "@mui/material";
import { LayoutAuth } from "../layout/LayoutAuth";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
export const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <LayoutAuth title="SignUp">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              id="fullname"
              label="Fullname"
              variant="standard"
              type="text"
              {...register("fullname", {
                required: "El nombre es requerido",
                minLength: {
                  value: 5,
                  message: "El nombre debe tener al menos 5 caracteres",
                },
              })}
              aria-invalid={errors.fullname ? "true" : "false"}
            />
            {errors.fullname && <p role="alert">{errors.fullname?.message}</p>}
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
            {errors.email && <p role="alert">{errors.email?.message}</p>}
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
            {errors.password && <p role="alert">{errors.password?.message}</p>}
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
              ya tienes cuenta?
            </Link>
          </Grid>
        </Grid>
      </form>
    </LayoutAuth>
  );
};
