// En App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AutorComponent from "./components/AutorComponent.jsx";
import AutorBotones from "./components/AutorBotones";
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
          <Route path="/autores" element={<AutorBotones />} />
          <Route path="/generos" element={<GeneroBotones />} />
          {/* Otros Routes aquí */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;