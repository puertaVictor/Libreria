// En App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AutorComponent from "./components/AutorComponent";
import PaginaInicio from './components/PaginaInicio'

const App = () => {
  const [response, setResponse] = useState("");
  const [paginaInicio, setPaginaInicio] = useState("");

  const handleSearchSuccess = (response) => {
    setResponse(response);
    setPaginaInicio(true);
  };
  
  const inicio = () =>{
    setPaginaInicio(true);
  }

  return (
    <Router>
      <div>
        <Header 
        onSearchSuccess={handleSearchSuccess} 
        onInicio={inicio}
        />
        <Routes>
        <Route
            path="/"
            element={<PaginaInicio />} 
          />
          <Route
            path="/autorComponent"
            element={<AutorComponent response={response} />}
          />
          {/* Otros Routes aquí */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
