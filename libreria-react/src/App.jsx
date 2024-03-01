import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AutorComponent from "./components/AutorComponent.jsx";
import GeneroComponent from "./components/GeneroComponent.jsx";
import DescripcionComponent from "./components/DescripcionComponent.jsx";
import AutorBotones from "./components/AutorBotones";
import LibroBotones from "./components/LibroBotones";
import LibroComponent from "./components/LibroComponent.jsx";
import PaginaInicio from "./components/PaginaInicio";
import GeneroBotones from "./components/GeneroBotones.jsx";
import FormularioAutor from "./components/FormularioAutor.jsx";
import FormularioGenero from "./components/FormularioGenero.jsx";
import FormularioLibro from "./components/FormularioLibro.jsx";


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
            path="/librosComponent"
            element={<LibroComponent response={response}/>}
          />
        <Route
            path="/descripcionComponent"
            element={<DescripcionComponent 
            response={response} 
            onSearchSuccess={handleSearchSuccess} />}
          />

          <Route
            path="/autores"
            element={<AutorBotones />}
          />
          <Route
            path="/generos"
            element={<GeneroBotones />}
          />
          <Route
            path="/libros"
            element={<LibroBotones />}
          />
          <Route 
            path="/formAutor" 
            element={<FormularioAutor />} 
          />
          <Route 
            path="/formGenero" 
            element={<FormularioGenero />} 
          />
          <Route 
            path="/formLibro" 
            element={<FormularioLibro />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
