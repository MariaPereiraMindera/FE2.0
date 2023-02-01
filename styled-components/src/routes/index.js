import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import routes from "./routes";
import { Template } from "./styled-components";

const MyRoutes = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      {routes.map((e) => (
        <Route path={e.path} element={<Template>{e.element}</Template>} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
