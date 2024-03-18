import React, { useState, useEffect } from "react";
import {nombresAutor , GuardarAutor } from "../service/autor_service.jsx"

const FormularioAutor = () => {
  const [autor, setAutor] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [error, setError] = useState("");
  const [nombreGuardados, setNombresGuardados] = useState([]);

  useEffect(() => {
    const fecthAutores = async () => {
      try {
        const autores = await nombresAutor();
        setNombresGuardados(autores);
      } catch (error) {
        console.error("Error al obtener los autor:", error);
      }
    };

    fecthAutores();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!autor.trim()) {
      setError("El campo autor no puede estar vacío");
      return;
    }
  
    if (nombreGuardados.includes(autor.trim().toLowerCase())) {
      setError("El autor ya está guardado");
      return;
    }
    
    try {
      const autorData = {
        nombre: autor,
        nacionalidad: nacionalidad
      };
  console.log(autorData)
      await GuardarAutor(autorData);
      setAutor(""); 
      setError("");
      setNombresGuardados([...nombreGuardados, autor.trim().toLowerCase()]);
    } catch (error) {
      console.error("Error al guardar el género:", error);
      setError("Error al guardar el género");
    }
  }; 
  
  return (
    <div className="container">
      <h2>Insertar Autor</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Autor
          </span>
          <input
            type="text"
            id="autor"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Nacionalidad
          </span>
          <input
            type="text"
            id="nacionalidad"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={nacionalidad}
            onChange={(e) => setNacionalidad(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" id="btnEnter" className="btn btn-primary">
          Guardar Autor
        </button>
      </form>
    </div>
  );
  

  
};


export default FormularioAutor;
