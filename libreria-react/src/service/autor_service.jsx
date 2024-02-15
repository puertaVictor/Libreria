import axios from 'axios';

const baseURL = 'http://localhost:8080/Autor';



const VerAutores = async () => {
    try {
      const response = await axios.get(`${baseURL}/autores`);
      return response.data;
    } catch (error) {
      console.error('Error al buscar los libros leidos:', error);
      throw error;
    }
  };

const BuscarPorNombre = async (nombre) => {
  try {
    const response = await axios.get(`${baseURL}/buscarPorNombre?nombre=${nombre}`);
    return response.data;
  } catch (error) {
    console.error('Error buscando libro por título:', error);
    throw error;
  }
};

// GETS MAPPINGS Autores

const GuardarAutor = async (nombre) => {
    try {
      const response = await axios.post(`${baseURL}/guardarAutor`, { nombre });
      return response.data;
    } catch (error) {
      console.error('Error al guardar el autor:', error);
      throw error;
    }
  };
export { VerAutores , BuscarPorNombre ,  GuardarAutor };