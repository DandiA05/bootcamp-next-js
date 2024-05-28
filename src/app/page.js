"use client";

import Button from "@/components/Button";
import React from "react";
import { handleRegister } from "@/services/api/apiLogin";

const Home = () => {
  const regist = async () => {
    const res = await handleRegister();
    console.log("Res:", res);
  };
  return (
    <div>
      <h1>Next JS hadir di UTY</h1>
      <Button title={"BTR"} onClick={regist} />
    </div>
  );
};

export default Home;
