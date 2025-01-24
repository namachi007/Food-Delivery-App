import { render, screen } from "@testing-library/react";
import Heading from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";


test("Header Home text renders properly", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Heading />
      </Provider>
    </BrowserRouter>
  );

  const homeText = screen.getByText("Home");
  expect(homeText).toBeInTheDocument();
});
