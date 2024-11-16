import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 8 }}>
            <h1>Sign In</h1>
            <TextField
                id="first-name"
                label="First Name"
                variant="filled"
                sx={{ mt: 2, width: "25ch" }}
            />
            <TextField
                id="second-name"
                label="Second Name"
                variant="filled"
                sx={{ mt: 2, width: "25ch" }}
            />
            <FormControl sx={{ mt: 3, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                    id="password"
                    type={showPassword ? "text" : "password"}
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
            </FormControl>
            <Button
                variant="contained"
                sx={{ mt: 3, width: "25ch" }}
                onClick={() => alert("Sign In Button Clicked")}
            >
                Sign In
            </Button>
        </Box>
    );
};

export default Signin;
