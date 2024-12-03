import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Button,
  Box,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const signinSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  secondName: yup.string().required("Second Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .matches(/^\d+$/, "Password should contain only numbers")
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 8,
      }}
    >
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          id="first-name"
          label="First Name"
          variant="filled"
          sx={{ mt: 2, width: "25ch" }}
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
        <br />
        <TextField
          id="second-name"
          label="Second Name"
          variant="filled"
          sx={{ mt: 2, width: "25ch" }}
          {...register("secondName")}
          error={!!errors.secondName}
          helperText={errors.secondName?.message}
        />
        <br />
        <TextField
          id="email"
          label="Email"
          variant="filled"
          sx={{ mt: 2, width: "25ch" }}
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <br />
        <FormControl sx={{ mt: 3, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="password" error={!!errors.password}>
            Password
          </InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            error={!!errors.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.password.message}
            </p>
          )}
        </FormControl>
        <br />
        <Button type="submit" variant="contained" sx={{ mt: 1, width: "25ch" }}>
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default Signin;
