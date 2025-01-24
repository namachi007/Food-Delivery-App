import { render, screen } from "@testing-library/react";
import VegOrNonveg from "../VegOrNonveg";
import "@testing-library/jest-dom";


test("ResCard component renders isVeg or not correctly", () => {
    render(<VegOrNonveg isVeg={false} />);
    
    // const veg = screen.getByTestId("veg");
    // expect(veg).toBeInTheDocument();

    const nonVeg = screen.getByTestId("non-veg");
    expect(nonVeg).toBeInTheDocument();
});