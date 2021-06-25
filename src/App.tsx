import React from "react";
import NavLink from "./Nav/NavLink";
import NavBody from "./Nav/NavBody";
import { BrowserRouter } from "react-router-dom";
import 'tailwindcss/tailwind.css'
import Context from "./Global/Context";
function App() {
  return (
    <div>
       <Context>
       <BrowserRouter>
        <NavBody />
        <NavLink />
      </BrowserRouter>
       </Context>
    </div>
  );
}

export default App;
