import React, { useState, useEffect } from 'react';
import { ListarAutores } from "../service/autor_service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'; 

const AutorBotones = () => {
    const [listaAutores, setListaAutores] = useState(null);

    useEffect(() => {
        const obtenerAutores = async () => {
            try {
                const response = await ListarAutores();
                console.log(response);
                
                // Creamos un objeto para almacenar los libros agrupados por autor
                const librosPorAutor = {};

                // Iteramos sobre los datos y agrupamos los libros por autor
                response.forEach((fila) => {
                    const tituloLibro = fila[0];
                    const descripcionLibro = fila[1];
                    const nombreAutor = fila[2];
                    const leido = fila[4] ? (
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
                      );

                    // Verificamos si el autor ya está en el objeto, si no, creamos una nueva entrada
                    if (!librosPorAutor[nombreAutor]) {
                        librosPorAutor[nombreAutor] = [];
                    }

                    // Agregamos el libro a la lista de libros del autor, incluyendo el estado leido
                    librosPorAutor[nombreAutor].push({ titulo: tituloLibro, descripcion: descripcionLibro, leido: leido });
                });

                // Convertimos el objeto en un array para poder mostrarlo en la interfaz
                const listaAutoresFormateada = Object.keys(librosPorAutor).map((autor) => ({
                    nombre: autor,
                    libros: librosPorAutor[autor],
                }));

                // Establecemos la lista de autores formateada en el estado
                setListaAutores(listaAutoresFormateada);
            } catch (error) {
                console.error("Error al sacar a los autores:", error);
            }
        };
        obtenerAutores();
    }, []); 

 

    if (!listaAutores) {
        return <p>Cargando.....</p>;
    }

    return (
        <div> 
            <div className="mt-5 list-group">
                {listaAutores.map((autorData, index) => (
                    <div key={index}>
                        <p className='list-group-item list-group-item-action active'>Autor
                        <FontAwesomeIcon icon={faArrowRight} style={{color: "#63E6BE",}} />
                        {autorData.nombre}</p>
                        <ul>
                            {autorData.libros.map((libro, libroIndex) => (
                                <li className='list-group-item list-group-item-action' key={libroIndex}>
                                    <p>Título: {libro.titulo}</p>
                                    <p>Descripción: {libro.descripcion}</p>
                                    <p>Leído: {libro.leido}</p> 
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AutorBotones;



