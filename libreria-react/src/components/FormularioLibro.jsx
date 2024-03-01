import React, { useState, useEffect } from "react";
import { GuardarLibroService } from "../service/libro_service";
import { VerGeneros } from "../service/genero_service";
import { nombresAutor } from "../service/autor_service";

const FormularioLibro = () => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState(null);
  const [leido, setLeido] = useState(false);
  const [fechaLectura, setFechaLectura] = useState(new Date().toISOString().slice(0, 10));
  const [portada, setPortada] = useState(null);
  const [autores, setAutores] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nombres = await nombresAutor();
        const listaGeneros = await VerGeneros();
        setAutores(nombres);
        setGeneros(listaGeneros);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const libro = {
        titulo,
        autor: { idAutor: autor }, 
        descripcion,
        genero: { idGenero: genero }, 
        leido,
        fechaLectura,
        portada
      };
      console.log(libro);
      await GuardarLibroService(libro);

      setTitulo("");
      setAutor(null);
      setDescripcion("");
      setGenero(null);
      setLeido(false);
      setFechaLectura(new Date().toISOString().slice(0, 10));
      setPortada(null);
    } catch (error) {
      console.error("Error al guardar el libro:", error);
    }
  };

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setLeido(checked);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.split(',')[1];
      setPortada(base64String); 
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  

  const handleAutorChange = (event) => {
    const { value } = event.target;
    setAutor(parseInt(value));
  };
  
  const handleGeneroChange = (event) => {
    const { value } = event.target;
    setGenero(parseInt(value));
  };
  

  return (
    <div className="container">
      <h2>Formulario de Libro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título:</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="autor" className="form-label">Autor:</label>
          <select
            className="form-select"
            id="autor"
            value={autor || ''}
            onChange={handleAutorChange}
          >
            <option value="">Selecciona un autor</option>
            {autores.map((autor, index) => (
              <option key={index} value={index + 1}>{autor}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción:</label>
          <textarea
            className="form-control"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genero" className="form-label">Género:</label>
          <select
            className="form-select"
            id="genero"
            value={genero || ''}
            onChange={handleGeneroChange}
          >
            <option value="">Selecciona un género</option>
            {generos.map((genero, index) => (
              <option key={index} value={index + 1}>{genero}</option>
            ))}
          </select>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="leido"
            checked={leido}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="leido">Leído</label>
        </div>
        <div className="mb-3">
          <label htmlFor="fechaLectura" className="form-label">Fecha Lectura:</label>
          <input
            type="date"
            className="form-control"
            id="fechaLectura"
            value={fechaLectura}
            onChange={(e) => setFechaLectura(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="portada" className="form-label">Portada:</label>
          <input
            type="file"
            className="form-control"
            id="portada"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Guardar Libro</button>
      </form>
    </div>
  );
};

export default FormularioLibro;
