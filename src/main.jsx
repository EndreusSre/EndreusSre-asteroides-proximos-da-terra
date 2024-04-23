import React from "react";
import ReactDOM from "react-dom/client";
import Sobre from "./Sobre.jsx";
import PaginaInicial from "./PaginaInicial.jsx";
import MenuNavegacao from "./MenuNavegacao.jsx";
import DetalhesDoAsteroide from "./DetalhesDoAsteroide.jsx"
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuNavegacao />
      <Routes>
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/detalhes-asteroide/:id" element={<DetalhesDoAsteroide />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
