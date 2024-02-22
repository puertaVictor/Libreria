import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const GeneroComponent = ({ response }) => {
  console.log(response);

  return (
    <div>
      <table className="table caption-top">
        <thead>
          <tr>
            <th scope="col">Imagen</th>
            <th scope="col">Autor</th>
            <th scope="col">Título</th>
            <th scope="col">Leído</th>
          </tr>
        </thead>
        <tbody>
          {response.map((item, index) => (
            <tr key={index}>
              <td>
                {item[3] ? (
                  <img
                    src={`data:image/jpeg;base64, ${item[3]}`}
                    alt={`Portada de ${item[2]}`}
                    style={{ width: '100px', height: '150px', marginLeft:'50px' }}
                  />
                ) : (
                  <div style={{ width: '100px', height: '150px', backgroundColor: 'grey', border: 'solid 1px black', marginLeft:'50px' }}></div>
                )}
              </td>
              <td>{item[1]}</td>
              <td>{item[0]}</td>
              <td>
                {item[4] ? (
                  <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#63E6BE" }} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faThumbsDown} style={{ color: "#fb0404" }} size="lg" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GeneroComponent;
