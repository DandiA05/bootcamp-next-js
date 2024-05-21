"use client";
import { Provider } from "react-redux";
import { store } from "@/store/storage";

function Wrapper({ children }) {
  return <>{children}</>;
}

export default function Container({ children }) {
  return (
    <Provider store={store}>
      <Wrapper>{children}</Wrapper>
    </Provider>
  );
}
