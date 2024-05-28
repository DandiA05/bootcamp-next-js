import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Todo from "../src/app/todo/page";
import Container from "@/components/Provider";

describe("Login Page Test", () => {
  it("should render login page", () => {
    render(
      <Container>
        <Todo />
      </Container>
    );

    const isLoginPage = screen.getByText("TODO LIST");
    const isActivityExist = screen.getByText("Activity");
    expect(isLoginPage).toBeInTheDocument();
    expect(isActivityExist).toBeInTheDocument();
  });
});
