import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../containers/Home";

export const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}