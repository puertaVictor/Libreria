import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const DescripcionComponent = ({ response }) => {
    const renderDescripcion = () => {
        return response.map((libDescripcion, index) => {
            let titulo = libDescripcion[0];
            let leido = libDescripcion[1] ? (
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
            if (libDescripcion[3]) {
                img = `data:image/jpeg;base64, ${libDescripcion[3]}`;
            }
            let fecha = null;
            if (libDescripcion[4] != null) {
                fecha = new Date(libDescripcion[4]).toLocaleDateString();
            }
            let genero = libDescripcion[5];
            let autor = libDescripcion[6];

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
                        <a href="#" className="card-link">Ver más</a>
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
