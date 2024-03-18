import React, { useEffect, useState } from "react";
import { obtenerNacionalidades, buscarPorNacionalidad } from "../service/autor_service";
import { useNavigate } from "react-router-dom";

const NacionalidadBotones = ({onSearchSuccess}) => {
  const [nationalidades, setNationalidades] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNacionalidades = async () => {
      try {
        const response = await obtenerNacionalidades();
        setNationalidades(response);
        console.log(response);
      } catch (error) {
        console.error("Error al obtener las nacionalidades:", error);
      }
    };
    fetchNacionalidades();
  }, []);

  const handleClick = async (nombreNacionalidad) => {
    try {
      const response = await buscarPorNacionalidad(nombreNacionalidad);
      setNationalidades(response);
      onSearchSuccess(response);
      navigate("/NacionalidadesComponente");
    } catch (error) {
      console.error("Error buscando nacionalidad:", error);
    }
  };

  if (!nationalidades) {
    return <p>Cargando...</p>;
  }

  const nacionalidadesUnicas = nationalidades
    .filter(n => Array.isArray(n)) 
    .map(n => n[0]) 
    .filter((value, index, self) => self.indexOf(value) === index); 

  return (
    <div className="mt-5 list-group">

      <div className="carousel-container" style={{ marginTop: "85px" }}>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ height: "50px" }}
        >
          <div className="carousel-inner">
            {nacionalidadesUnicas.map((nacionalidad, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <h2
                  className="text-center"
                  style={{ fontWeight: "bold" }}
                  onClick={() => handleClick(nacionalidad)}
                >
                  {nacionalidad}
                </h2>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            style={{ backgroundColor: "red" }}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            style={{ backgroundColor: "green" }}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NacionalidadBotones;
