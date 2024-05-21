"use client";
import Button from "../../components/Button";
import React, { useState, useEffect, useMemo } from "react";
const Profile = () => {
  const [counter, setCounter] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(1);

  const hasilUseMemo = useMemo(() => {
    return num1 + num2;
  }, [num1, num2]);

  useEffect(() => {
    console.log("Nilai berubah jadi:", counter);
  }, [counter]);

  return (
    <div>
      <p>ini loh profile</p>
      <Button title={"ONIC"} onClick={() => {}} />
      <p>Nilai Count: {counter}</p>
      <div className="gap-2 flex flex-row">
        <Button
          title={"Ubah num1"}
          onClick={() => setNum1((prev) => prev + 2)}
        />
        <Button
          title={"Ubah num2"}
          onClick={() => setNum2((prev) => prev * 2)}
        />
      </div>
      <p>Jumlah: {hasilUseMemo}</p>
    </div>
  );
};

export default Profile;
