import { render , screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Contact component renders correctly", () => {
    render(<Contact />);
    const contactHeading = screen.getByRole("heading");

    expect(contactHeading).toBeInTheDocument();
});

test("Contact component renders correctly", () => {
  render(<Contact />);
  const contactHeading = screen.getByText("Contact us");

  expect(contactHeading).toBeInTheDocument();
});