import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BuscarPorNombre, buscarPorNacionalidad } from "../service/autor_service";
import { BuscarPorGenero } from "../service/genero_service";
import {
  BuscarPorTituloService,
  buscarPorPalabraDescripcion
} from "../service/libro_service";
import "../css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faVenusMars,
  faPerson,
  faCirclePlus,
  faFlagUsa
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ onSearchSuccess }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const navigate = useNavigate();

  const handleAutorButtonClick = () => {
    navigate("/autores");
  };

  const handleGeneroButtonClick = () => {
    navigate("/generos");
  };

  const handleLibroButtonClick = () => {
    navigate("/libros");
  };
  
  const handleNacionalidadButtonClick = () => {
    navigate("/Nacionalidad");
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    let dato = document.getElementById("datoABuscar").value;
    let response;

    switch (selectedOption) {
      case "Autores":
        try {
          response = await BuscarPorNombre(dato);
          setSearchResults(response);
          onSearchSuccess(response);
          navigate("/autorComponent");
        } catch (error) {
          console.error("Error buscando autor por nombre:", error);
        }
        break;
      case "Libros":
        try {
          response = await BuscarPorTituloService(dato);
          setSearchResults(response);
          onSearchSuccess(response);
          navigate("/librosComponent");
        } catch (error) {
          console.error("Error buscando libro por título:", error);
        }
        break;
      case "Generos":
        try {
          response = await BuscarPorGenero(dato);
          setSearchResults(response);
          onSearchSuccess(response);
          navigate("/generoComponent");
        } catch (error) {
          console.error("Error buscando género por nombre:", error);
        }
        break;
      case "Descripcion":
        try {
          response = await buscarPorPalabraDescripcion(dato);
          setSearchResults(response);
          onSearchSuccess(response);
          navigate("/descripcionComponent");
        } catch (error) {
          console.error("Error buscando palabras:", error);
        }
        break;
      case "Nacionalidad":
        try {
          response = await buscarPorNacionalidad(dato);
          setSearchResults(response);
          onSearchSuccess(response);
          navigate("/nacionalidadComponent");
        } catch (error) {
          console.error("Error buscando nacionalidad:", error);
        }
        break;
      default:
        break;
    }
  };

  const handleGoToHomePage = () => {
    navigate("/");
  };

  return (
    <nav className="header-container">
      <button onClick={handleGoToHomePage} className="btn btn-home">
        <img src="/src/assets/logos/libreria.jpg" alt="Imagen" style={{ width: "150px", height: "50px", marginTop: "15px" }} />
      </button>
      <div className="container-fluid d-flex align-items-center justify-content-between w-100 py-3">
        <div className="d-flex align-items-center">
          <select
            className="form-select me-2"
            aria-label=""
            onChange={handleSelectChange}
            value={selectedOption}
          >
            <option disabled value="">
              Seleccione una opción
            </option>
            <option value="Autores">Autores</option>
            <option value="Libros">Libros</option>
            <option value="Generos">Géneros</option>
            <option value="Descripcion">Buscar por palabras</option>
            <option value="Nacionalidad">Nacionalidad</option>
          </select>
        </div>
        <form className="d-flex flex-grow-1" onSubmit={handleSearch}>
          <input
            className="form-control me-2 flex-grow-1"
            type="search"
            placeholder="Buscar........"
            aria-label="Search"
            id="datoABuscar"
          />
          <button
            id="btnBuscar"
            className="btn btn-outline-success"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </div>

      <div id="botones">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={handleLibroButtonClick}
        >
          <FontAwesomeIcon icon={faBook} size="lg" />
          <span> Libros</span>
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={handleGeneroButtonClick}
        >
          <FontAwesomeIcon icon={faVenusMars} size="lg" />
          <span> Genero</span>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={handleAutorButtonClick}
        >
          <FontAwesomeIcon icon={faPerson} size="lg" />
          <span> Autores</span>
        </button>
        
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={handleNacionalidadButtonClick}
        >
          <FontAwesomeIcon icon={faFlagUsa} size="lg" />
          <span> Nacionalidad</span>
        </button>

        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-outline-light dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#11ff00" }} />
            <span> Añadir</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link to="/formAutor" className="dropdown-item">
                Autor
              </Link>
            </li>
            <li>
              <Link to="/formGenero" className="dropdown-item">
                Género
              </Link>
            </li>
            <li>
              <Link to="/formLibro" className="dropdown-item">
                Libro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
