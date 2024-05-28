"use client";

import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { postLogin } from "@/services/api/apiLogin";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const body = {
      email: event.target[0].value,
      password: event.target[1].value,
    };

    const res = await postLogin(body);

    if (res.status === 200) {
      console.log("BERHASIL", res);
      // router.push("/");
      setError("");
    } else {
      setError("Username or Password is wrong");
    }
  };

  return (
    <div className="flex flex-1 justify-center items-center h-screen flex-col bg-slate-500">
      <form
        onSubmit={handleOnSubmit}
        className="flex-col flex w-[40%] p-16 border rounded-lg bg-white gap-6"
      >
        <h1>Login</h1>
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-username">
            Username
          </InputLabel>
          <Input id="standard-adornment-usernam" type={"text"} />
        </FormControl>
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {error}
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
}
