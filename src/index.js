import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "bootstrap";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error.js";
import Restaurantmenu from "./components/Restaurantmenu.js";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";


const App = () => {

  return (
    <Provider store={appStore}>
      <div className="app">
        <Heading />
        <Outlet />
      </div>
    </Provider>
  );
};




const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurantmenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
