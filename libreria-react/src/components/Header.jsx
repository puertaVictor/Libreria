import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BuscarPorNombre} from '../service/autor_service';
import { BuscarPorTituloService} from '../service/libro_service';
import { BuscarPorGenero } from '../service/genero_service';
import '../css/Header.css';

const Header = ({ onSearch }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(""); 

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); 
  };

  const handleSearch = async (event) => {
    event.preventDefault(); 
    let dato = document.getElementById("datoABuscar").value
    switch (selectedOption) {
      case "Autores":
        try {
          const response = await BuscarPorNombre(dato);
          console.log(response);
        } catch (error) {
          console.error('Error buscando autor por nombre:', error);
        }
        break;
      case "Libros":
        try {
          const response = await BuscarPorTituloService(dato);
          console.log(response);
        } catch (error) {
          console.error('Error buscando libro por título:', error);
        }
        break;
      case "Generos":
        try {
          const response = await BuscarPorGenero(dato);
          console.log(response);
        } catch (error) {
          console.error('Error buscando género por nombre:', error);
        }
        break;
      default:
        break;
    }
  };

  return (
    <nav className="header-container">
      <div className="container-fluid d-flex align-items-center justify-content-between w-100 py-3">
        <div className="d-flex align-items-center">
          <select className="form-select me-2" aria-label="" onChange={handleSelectChange} value={selectedOption}>
            <option disabled value="">Seleccione una opción</option>
            <option value="Autores">Autores</option>
            <option value="Libros">Libros</option>
            <option value="Generos">Géneros</option>
          </select>
        </div>
        <form className="d-flex flex-grow-1" onSubmit={handleSearch}>
          <input
            className="form-control me-2 flex-grow-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="datoABuscar"
          />
          <button className="btn btn-outline-success" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
