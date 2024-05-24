"use client";
import ButtonKita from "@/components/Button";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

const ToDo = () => {
  const userReducer = useSelector((state) => state.userReducer);
  useEffect(() => {
    if (userReducer) {
      console.log("User Data:", userReducer);
    }
  }, [userReducer]);

  const [activity, setActivty] = useState("");
  const [deskirpsi, setDeskripsi] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activity === "" && deskirpsi === "") return;

    setActivty("");
    setDeskripsi("");
    setToDoList([...toDoList, { activity, deskirpsi }]);

    // if (activity !== "" && deskirpsi !== "") {
    //   setActivty("");
    //   setDeskripsi("");
    //   setToDoList([...toDoList, { activity, deskirpsi }]);
    // }
  };

  const handleDeleteList = (index) => {
    const newTask = toDoList;
    newTask.splice(index, 1);

    //refresh
    setToDoList([...newTask]);
  };

  return (
    <div className="container px-36">
      <h1 className="text-2xl">TODO LIST</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="flex flex-col gap-4">
          <p>Activity</p>
          <input
            value={activity}
            className="border-4 border-red-500"
            onChange={(value) => {
              setActivty(value.target.value);
            }}
          />
          <p>Deskripsi</p>
          <input
            value={deskirpsi}
            className="border-4 border-red-500"
            onChange={(value) => {
              setDeskripsi(value.target.value);
            }}
          />
          {/* <ButtonKita title={"Simpan ToDo"} type={"submit"} /> */}

          <Button
            type="submit"
            color="success"
            size="large"
            variant="contained"
          >
            Simpan
          </Button>
        </div>
      </form>

      <div className="mt-4" />
      {/* <Button title={"CEKK ToDo"} onClick={() => console.log(toDoList)} /> */}

      {toDoList.map((item, index) => (
        <div
          key={index}
          className="border mb-4 p-4 flex flex-row justify-between"
        >
          <div>
            <p className="text-[24px]">{item.activity}</p>
            <p className="text-[14px]">{item.deskirpsi}</p>
          </div>
          {/* <ButtonKita title={"Hapus"} onClick={() => handleDeleteList(index)} /> */}
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ToDo;
