import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Profile from "../src/app/profile/page";
import Container from "../src/components/Provider";

describe("Profile Page", () => {
  it("renders a profile page", () => {
    render(
      <Container>
        <Profile />
      </Container>
    );
    const isProfilePage = screen.getByText("ini loh profile");
    expect(isProfilePage).toBeInTheDocument();
  });
});
