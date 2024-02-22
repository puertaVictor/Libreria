import React, { useState, useEffect } from 'react';
import { ListarAutores } from "../service/autor_service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faArrowRight, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'; 
import { BuscarPorTituloService } from '../service/libro_service'; 

const AutorBotones = ({onSearchSuccess}) => {
    const [listaAutores, setListaAutores] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [busqLibro, setBusqLibro] = useState(null);
    const itemsPerPage = 5;
    const navigate = useNavigate();
    let response;
    useEffect(() => {
        const obtenerAutores = async () => {
            try {
                const response = await ListarAutores();             
                setListaAutores(response); 
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

    const searchLibro = async (nombre) => {
        try {
            response = await BuscarPorTituloService(nombre);
            setBusqLibro(response);
            onSearchSuccess(response);
            console.log(response);
            navigate("/libros"); 
        } catch (error) {
            console.error("Error al sacar a los autores:", error);
        }
    }

    if (!listaAutores) {
        return <p>Cargando.....</p>;
    }

    return (
        <div> 
            <div className="mt-5 list-group">
                {currentItems.map((autorData, index) => (
                    <div key={index} onClick={() => searchLibro(autorData[0])}>
                        <p className='list-group-item list-group-item-action active'>Autor{'   '}
                        <FontAwesomeIcon icon={faArrowRight} style={{color: "#63E6BE",}} />
                        {'   '}{autorData[2]}</p> 
                        <ul>
                            <li className='list-group-item list-group-item-action' key={index}>
                                <p>Título: {autorData[0]}</p> 
                                <p>Descripción: {autorData[1]}</p> 
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
                                  )}</p> 
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
