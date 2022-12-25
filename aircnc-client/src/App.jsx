import { useState } from "react";
import reactLogo from "./assets/icons8-wind.gif";
import "./App.css";
import Wave from "react-wavify";
import AOS from "aos";
import "aos/dist/aos.css";
import router from "./Routes/routes";
import { RouterProvider } from "react-router-dom";

AOS.init();

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
