import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resCardList.json";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

test("Search component on body renders correctly", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    console.log(MOCK_DATA);
    const searchInput = screen.getByTestId('searchInput');
    expect(searchInput).toBeInTheDocument();
    
    
    // const searchInput = screen.getByTestId("searchInput");
    // fireEvent.change(searchInput, { target: {value: "pizza"}});
    // fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter" });


    // const cards = await screen.getAllByTestId("rescard");

    // await waitFor(() => {
    //   screen.debug();
    // });
    // expect(cards.length).toBe(3);
  });
});
