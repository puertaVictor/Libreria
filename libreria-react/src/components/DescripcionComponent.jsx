import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { BuscarPorTituloService } from '../service/libro_service'; 

const DescripcionComponent = ({ response }) => {
    console.log(response)
    const navigate = useNavigate();
    const [busqLibro, setBusqLibro] = useState(null);
    const searchLibro = async (nombre) => {
        try {
            let response = await BuscarPorTituloService(nombre);
            setBusqLibro(response);
            navigate("/librosComponent"); 
        } catch (error) {
            console.error("Error al sacar el libro:", error);
        }
    }

    const renderDescripcion = () => {
        return response.map((libDescripcion, index) => {
            let titulo = libDescripcion[0];
            let leido = libDescripcion[4] ? (
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
            let resumen = libDescripcion[2];
            let img = null;
            if (libDescripcion[6]) {
                img = `data:image/jpeg;base64, ${libDescripcion[6]}`;
            }
            let fecha = null;
            if (libDescripcion[5] != null) {
                fecha = new Date(libDescripcion[5]).toLocaleDateString();
            }
            let genero = libDescripcion[3];
            let autor = libDescripcion[1];

            return (
                <div className="card" style={{ width: "18rem" }} key={index}>
                    {img && <img src={img} className="card-img-top" alt="Book cover" />}
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{resumen}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Fecha: {fecha}</li>
                        <li className="list-group-item">Género: {genero}</li>
                        <li className="list-group-item">Autor: {autor}</li>
                        <li className="list-group-item">Leido: {leido}</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" 
                        className="card-link"
                        onClick={() => searchLibro(titulo)}
                        >Ver Libro</a>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="row">{renderDescripcion()}</div>
    );
}

export default DescripcionComponent;
