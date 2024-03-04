import React, { useState, useEffect } from "react";
import { GuardarGenero, VerGeneros } from "../service/genero_service";

const FormularioGenero = () => {
  const [genero, setGenero] = useState("");
  const [error, setError] = useState("");
  const [generosGuardados, setGenerosGuardados] = useState([]);

  useEffect(() => {
    const fetchGeneros = async () => {
      try {
        const generos = await VerGeneros();
        setGenerosGuardados(generos);
      } catch (error) {
        console.error("Error al obtener los géneros:", error);
      }
    };

    fetchGeneros();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!genero.trim()) {
      setError("El campo género no puede estar vacío");
      return;
    }

    if (generosGuardados.includes(genero.trim().toLowerCase())) {
      setError("El género ya está guardado");
      return;
    }
    
    try {
      const generoData = {
        nombreGenero: genero,
      };

      await GuardarGenero(generoData);
      setGenero("");
      setError("");
      setGenerosGuardados([...generosGuardados, genero.trim().toLowerCase()]);
    } catch (error) {
      console.error("Error al guardar el género:", error);
      setError("Error al guardar el género");
    }
  };

  return (
    <div className="container">
      <h2>Insertar Género</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Género
          </span>
          <input
            type="text"
            id="nombreGenero"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" id="btnEnter" className="btn btn-primary">
          Guardar Género
        </button>
      </form>
    </div>
  );
};

export default FormularioGenero;
