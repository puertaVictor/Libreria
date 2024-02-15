import axios from 'axios';

const baseURL = 'http://localhost:8080/Genero';



const VerGeneros = async () => {
    try {
      const response = await axios.get(`${baseURL}/obtenerGeneros`);
      return response.data;
    } catch (error) {
      console.error('Error al buscar los libros leidos:', error);
      throw error;
    }
  };



const BuscarPorGenero = async (nombre) => {
  try {
    const response = await axios.get(`${baseURL}/obtenerDatosPorGeneros?genero=${nombre}`);
    return response.data;
  } catch (error) {
    console.error('Error buscando libro por título:', error);
    throw error;
  }
};

// GETS MAPPINGS Generos

const GuardarGenero = async (nombre) => {
    try {
      const response = await axios.post(`${baseURL}/guardarGenero`, { nombre });
      return response.data;
    } catch (error) {
      console.error('Error al guardar el autor:', error);
      throw error;
    }
  };
export { VerGeneros , BuscarPorGenero ,  GuardarGenero };