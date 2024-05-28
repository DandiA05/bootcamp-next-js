import Satellite from "../satellite";

export const handleRegister = async () => {
  try {
    const body = {
      email: "a",
    };
    const res = await Satellite.post("/auth/login", body);
    console.log("Resss:", res.data);
    return res.data.data;
  } catch (e) {}
};
