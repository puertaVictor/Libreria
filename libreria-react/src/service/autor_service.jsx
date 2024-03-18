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


const ListarAutores = async () =>{
  try {
    const response = await axios.get(`${baseURL}/listarAutores`);
    return response.data;
  } catch (error) {
    console.error('Error sacando a los autores:', error);
    throw error;
  }
}

const nombresAutor = async () =>{
  try {
    const response = await axios.get(`${baseURL}/nombresAutores`);
    return response.data;
  } catch (error) {
    console.error('Error sacando a los autores:', error);
    throw error;
  }
}

const buscarPorNacionalidad = async (nacionalidad) =>{
  try {
    const response = await axios.get(`${baseURL}/buscarPorNacionalidad?nacionalidad=${nacionalidad}`);
    return response.data;
  } catch (error) {
    console.error('Error sacando a los autores:', error);
    throw error;
  }
}

const obtenerNacionalidades = async () =>{
  try {
    const response = await axios.get(`${baseURL}/obtenerNacionalidades`);
    return response.data;
  } catch (error) {
    console.error('Error sacando a los autores:', error);
    throw error;
  }
}
// GETS MAPPINGS Autores

const GuardarAutor = async (autorData) => {
    try {
      const response = await axios.post(`${baseURL}/guardarAutor`,autorData);
      return response.data;
    } catch (error) {
      console.error('Error al guardar el autor:', error);
      throw error;
    }
  };
export { VerAutores , BuscarPorNombre ,  GuardarAutor , ListarAutores , nombresAutor , buscarPorNacionalidad , obtenerNacionalidades };