import React, { useMemo } from "react";

const Button = ({ title, onClick = () => {}, type }) => {
  const test = useMemo(() => {}, []);
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#FF5733] text-white
  text-center px-6 py-4"
    >
      {title}
    </button>
  );
};

export default Button;
