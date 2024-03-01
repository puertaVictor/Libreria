package com.Biblioteca.controlador;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.Biblioteca.model.LibroEntity;
import com.Biblioteca.service.libroService;
@CrossOrigin("*")
@RestController
@RequestMapping("/Libro")
public class LibroControlador {

	@Autowired
	libroService LibroService;
	@GetMapping("/buscarPorTitulo")
	public List<Object[]> obtenerDatosPorLibro(@RequestParam("titulo") String titulo){
		List<Object[]> datos = LibroService.buscarPorTitulo(titulo);
		return datos;
	}
	
	@GetMapping("/buscarLeidos")
	public List<Object[]> buscarLeidos(){
		List<Object[]> datos = LibroService.buscarLeidos();
		return datos;
	}
	
	@GetMapping("/buscarNoLeidos")
	public List<Object[]> buscarNoLeidos(){
		List<Object[]> datos = LibroService.buscarNoLeidos();
		return datos;
	}
	
	@GetMapping("/sacarPortadas")
	public List<Object[]> sacarPortadas(){
		List<Object[]> datos = LibroService.sacarPortadas();
		return datos;
	}
	
	@GetMapping("/ordenarPorFechaAscendente")
	public List<Object[]> ordenarPorFechaAsc(){
		List<Object[]> datos = LibroService.ordenarPorFechaAsc();
		return datos;
	}
	@GetMapping("/ordenarPorFechaDescendente")
	public List<Object[]> ordenarPorFechaDes(){
		List<Object[]> datos = LibroService.ordenarPorFechaDes();
		return datos;
	}
	
    @GetMapping("/obtenerLibroAleatorio")
    public List<Object[]>libroAleatorio(){
    	List<Object[]> datos = LibroService.libroAleatorio();
    	return datos;
    }
	
	@GetMapping("/buscarPorCadena")
	public List<Object[]> buscarPorDescripcion(@RequestParam("cadena") String cadena){
		List<Object[]> datos = LibroService.buscarPorDescripcion(cadena);
		return datos;
	}
	
    @PostMapping("/guardarLibro")
    public ResponseEntity<?> agregarLibro(@RequestBody String jsonLibro) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
        	System.out.println(jsonLibro);

        	// Convertir el JSON en un objeto LibroEntity
            LibroEntity libro = objectMapper.readValue(jsonLibro, LibroEntity.class);
            // Llamar al servicio para guardar el libro
            LibroService.guardarLibro(libro);
            return ResponseEntity.ok("Libro guardado correctamente");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al guardar el libro");
        }
    }
    
    @PostMapping("/actualizarLibro/{idLibro}")
    public ResponseEntity<String> actualizarLibro(@PathVariable int idLibro,
                                                 @RequestParam(required = false) String titulo,
                                                 @RequestParam(required = false) String descripcion,
                                                 @RequestParam(required = false) Boolean leido,
    											 @RequestParam(required = false) Date fechaLectura,
    											 @RequestParam(required = false) byte[] portada){
    	LibroService.actualizarLibro(idLibro, titulo, descripcion, leido,fechaLectura,portada);
        return ResponseEntity.ok("Libro actualizado exitosamente");
    }
}