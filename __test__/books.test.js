import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Books from "../src/app/books/page";
import Container from "../src/components/Provider";

describe("Books Page", () => {
  it("render books page", () => {
    render(
      <Container>
        <Books />
      </Container>
    );
    const isBooksPage = screen.getByText("Books List");
    const isLoaderThere = screen.getByText("Loading...");

    expect(isBooksPage).toBeInTheDocument();
    expect(isLoaderThere).toBeInTheDocument();
  });
});
