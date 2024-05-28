"use client";

import Button from "@/components/Button";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Home Pagee</h1>
      <Button
        title={"Logout"}
        onClick={() => {
          console.log("cek button");
          deleteCookie("TOKEN");
          router.push("/login");
        }}
      />
    </div>
  );
};

export default Home;
