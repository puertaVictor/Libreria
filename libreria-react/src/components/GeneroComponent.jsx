import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const GeneroComponent = ({ response }) => {
  const itemsPerPage = 5; 
  const [currentPage, setCurrentPage] = useState(1); 

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


  const currentItems = response.slice(startIndex, endIndex);

 
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };


  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(response.length / itemsPerPage)));
  };

  return (
    <div>
      {response.length > 0 ? (
        <div>
          <table className="table caption-top" style={{textAlign:"center"}}>
            <thead>
              <tr>
                <th scope="col">Portada</th>
                <th scope="col">Autor</th>
                <th scope="col">Título</th>
                <th scope="col">Leído</th>
              </tr>
            </thead>
            <tbody >
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item[3] ? (
                      <img
                        src={`data:image/jpeg;base64, ${item[3]}`}
                        alt={`Portada de ${item[2]}`}
                        style={{
                          width: "100px",
                          height: "150px",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100px",
                          height: "150px",
                          backgroundColor: "grey",
                          border: "solid 1px black",
                        }}
                      ></div>
                    )}
                  </td>
                  <td>{item[1]}</td>
                  <td>{item[0]}</td>
                  <td>
                    {item[4] ? (
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
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ textAlign: "center" }}>
            <button class="btn btn-outline-warning" onClick={prevPage} disabled={currentPage === 1}>
              Anterior
            </button>
            <button class="btn btn-outline-success" onClick={nextPage} disabled={currentPage === Math.ceil(response.length / itemsPerPage)}>
              Siguiente
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "80px",
              color: "red",
              fontWeight: "bold",
            }}>
            Nombre del género incorrecto.
          </h3>
        </div>
      )}
    </div>
  );
};

export default GeneroComponent;
