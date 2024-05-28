import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Todo from "../src/app/todo/page";

describe("Todo Page", () => {
  it("renders a todo page", () => {
    render(<Todo />);
    const isTodoPage = screen.getByText("TODO LIST");
    expect(isTodoPage).toBeInTheDocument();
  });
});
