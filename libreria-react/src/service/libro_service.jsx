import axios from 'axios';

const baseURL = 'http://localhost:8080/Libro';


const BuscarPorTituloService = async (titulo) => {
  try {
    const response = await axios.get(`${baseURL}/buscarPorTitulo?titulo=${titulo}`);
    return response.data;
  } catch (error) {
    console.error('Error buscando libro por título:', error);
    throw error;
  }
};

const BuscarLeidos = async () => {
    try {
      const response = await axios.get(`${baseURL}/buscarLeidos`);
      return response.data;
    } catch (error) {
      console.error('Error al buscar los libros leidos:', error);
      throw error;
    }
  };

  const BuscarNoLeidos = async () => {
    try {
      const response = await axios.get(`${baseURL}/buscarNoLeidos`);
      return response.data;
    } catch (error) {
      console.error('Error al buscar los libros No leidos:', error);
      throw error;
    }
  };


  const SacarPortadas = async () => {
    try {
      const response = await axios.get(`${baseURL}/sacarPortadas`);
      return response.data;
    } catch (error) {
      console.error('Error al sacar las portadas:', error);
      throw error;
    }
  };

  const OrdenarFechaDescendente = async () => {
    try {
      const response = await axios.get(`${baseURL}/ordenarPorFechaDescendente`);
      return response.data;
    } catch (error) {
        console.error('Error al sacar los libros por FechaDescendente:', error);
      throw error;
    }
  };

  const OrdenarFechaAscendente = async () => {
    try {
      const response = await axios.get(`${baseURL}/ordenarPorFechaAscendente`);
      return response.data;
    } catch (error) {
      console.error('Error al sacar los libros por FechaAscendente:', error);
      throw error;
    }
  };

  const LibroAleatorio = async () => {
    try {
      const response = await axios.get(`${baseURL}/obtenerLibroAleatorio`);
      return response.data;
    } catch (error) {
      console.error('Error al sacar un libro aleatorio:', error);
      throw error;
    }
  };

  const buscarPorPalabraDescripcion = async (cadena) => {
    try {
      const response = await axios.get(`${baseURL}/buscarPorCadena?cadena=${cadena}`);
      return response.data;
    } catch (error) {
      console.error('Error buscando libro por título:', error);
      throw error;
    }
  };

  const obtenerID = async (titulo) => {
    try {
      const response = await axios.get(`${baseURL}/obtenerID?titulo=${titulo}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener el id:', error);
      throw error;
    }
  };

//   POST MAPPINGS


const GuardarLibroService = async (libro) => {
    try {
      const response = await axios.post(`${baseURL}/guardarLibro`,libro);
      return response.data;
    } catch (error) {
      console.error('Error al guardar el libro:', error);
      throw error;
    }
  };
  
  const ActualizarLibro = async (idLibro, { titulo, autor, descripcion, genero,leido, fechaLectura, portada }) => {
    try {
      const response = await axios.put(`${baseURL}/actualizarLibro/${idLibro}`, {
        titulo,
        autor,
        descripcion,
        genero, 
        leido,
        fechaLectura,
        portada,
      });
      return response.data;
    } catch (error) {
      console.error('Error al actualizar el libro:', error);
      throw error;
    }
  };
  

export { BuscarPorTituloService , BuscarLeidos , BuscarNoLeidos, SacarPortadas , OrdenarFechaDescendente , OrdenarFechaAscendente , ActualizarLibro , GuardarLibroService , LibroAleatorio , buscarPorPalabraDescripcion , obtenerID};