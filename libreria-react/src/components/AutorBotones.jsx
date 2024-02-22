import React, { useState, useEffect } from 'react';
import { ListarAutores } from "../service/autor_service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'; 

const AutorBotones = () => {
    const [listaAutores, setListaAutores] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const obtenerAutores = async () => {
            try {
                const response = await ListarAutores();
                console.log(response);
                
                // Procesamiento de datos recibidos
                
                setListaAutores(response); // Establecer la lista de autores en el estado
            } catch (error) {
                console.error("Error al sacar a los autores:", error);
            }
        };
        obtenerAutores();
    }, []); 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = listaAutores ? listaAutores.slice(indexOfFirstItem, indexOfLastItem) : [];

    const nextPage = () => {
        setCurrentPage((prev) =>
            Math.min(prev + 1, Math.ceil(listaAutores.length / itemsPerPage))
        );
    };

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    if (!listaAutores) {
        return <p>Cargando.....</p>;
    }

    return (
        <div> 
            <div className="mt-5 list-group">
                {currentItems.map((autorData, index) => (
                    <div key={index}>
                        <p className='list-group-item list-group-item-action active'>Autor
                        <FontAwesomeIcon icon={faArrowRight} style={{color: "#63E6BE",}} />
                        {autorData[2]}</p> {/* Suponiendo que el nombre del autor está en la posición 2 del arreglo */}
                        <ul>
                            <li className='list-group-item list-group-item-action' key={index}>
                                <p>Título: {autorData[0]}</p> {/* Suponiendo que el título del libro está en la posición 0 del arreglo */}
                                <p>Descripción: {autorData[1]}</p> {/* Suponiendo que la descripción del libro está en la posición 1 del arreglo */}
                                <p>Leído: {autorData[4] ? (
                                    <FontAwesomeIcon
                                      icon={faThumbsUp}
                                      style={{ color: "#63E6BE" }}
                                      size="lg"
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      icon={faThumbsDown}
                                      style={{ color: "#fb0404" }}
                                      size="lg"
                                    />
                                  )}</p> {/* Suponiendo que el estado leído está en la posición 4 del arreglo */}
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            <div style={{ textAlign: "center" }}>
                <button
                  className="btn btn-outline-warning"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  Anterior
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={nextPage}
                  disabled={
                    currentPage === Math.ceil(listaAutores.length / itemsPerPage)
                  }
                >
                  Siguiente
                </button>
            </div>
        </div>
    );
};

export default AutorBotones;
