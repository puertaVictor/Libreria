import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AutorComponent from "./components/AutorComponent.jsx";
import GeneroComponent from "./components/GeneroComponent.jsx";
import AutorBotones from "./components/AutorBotones";
import LibroComponent from "./components/LibroComponent.jsx";
import PaginaInicio from "./components/PaginaInicio";
import GeneroBotones from "./components/GeneroBotones.jsx";

const App = () => {
  const [response, setResponse] = useState("");
  const [paginaInicio, setPaginaInicio] = useState("");

  const handleSearchSuccess = (response) => {
    setResponse(response);
    setPaginaInicio(true);
  };

  const inicio = () => {
    setPaginaInicio(true);
  };

  return (
    <Router>
      <div>
        <Header onSearchSuccess={handleSearchSuccess} onInicio={inicio} />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route
            path="/autorComponent"
            element={<AutorComponent response={response} />}
          />
          <Route
            path="/generoComponent"
            element={<GeneroComponent response={response} />}
          />
          <Route
            path="/autores"
            element={<AutorBotones onSearchSuccess={handleSearchSuccess} />}
          />
          <Route
            path="/generos"
            element={<GeneroBotones />}
          />
          {/* Aquí pasamos los datos del libro al componente LibroComponent */}
          <Route
            path="/libros"
            element={<LibroComponent />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
