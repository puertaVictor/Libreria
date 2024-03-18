import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const NacionalidadComponente = ({ response }) => {
console.log(response)
    const renderNacionalidad = () => {
        return response.map((datos, index) => {
            let titulo = datos[0];
            let leido = datos[4] ? (
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
            let img;
            let autor = datos[2];
            let genero = datos[6];
            let resumen = datos[1];
            let fecha = null;
            if (datos[5] != null) {
                fecha = new Date(datos[5]).toLocaleDateString();
            }
            if (datos[3]) {
                img = <img src={`data:image/jpeg;base64, ${datos[3]}`} alt="Imagen" style={{  width: "250px",
                height: "325px",
            marginTop: "15px"}} />;
            } else {
                img = (
                    <div
                        style={{
                            width: "250px",
                            height: "325px",
                            marginTop: "15px",
                            backgroundColor: "grey",
                            border: "solid 1px black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        Sin imagen
                    </div>
                );
            }

            return (
                <div className="card" style={{ width: "18rem" }} key={index}>
                    {img}
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Autor: {autor}</li>
                        <li className="list-group-item">Fecha: {fecha}</li>
                        <li className="list-group-item">Resumen: {resumen}</li>
                        <li className="list-group-item">Género: {genero}</li>
                        <li className="list-group-item">Leido: {leido}</li>
                    </ul>
                </div>
            );
        });
    }

    return (
        <div className="row">{renderNacionalidad()}</div>
    );
}

export default NacionalidadComponente;
