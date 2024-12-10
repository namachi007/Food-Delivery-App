import React from "react";
import ReactDOM from "react-dom/client";


const Heading = () => {
    return (
      <div className="heading-div">
        <h1>Welcome</h1>
      </div>
    );
};

const App = () => {
    return (
      <div>
        <h1>Hello user</h1>
        <Heading />
      </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());