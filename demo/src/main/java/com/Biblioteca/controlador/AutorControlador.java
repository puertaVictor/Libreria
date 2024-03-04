package com.Biblioteca.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Biblioteca.model.AutorEntity;
import com.Biblioteca.service.autorService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@CrossOrigin("*")
@RestController
@RequestMapping("/Autor")
public class AutorControlador {

	@Autowired
	private autorService servicioAutor;

	@GetMapping("/autores")
	public List<AutorEntity> obtenerTodosLosAutores() {
	    System.out.println("Ingresó al método obtenerTodosLosAutores");
	    
	    List<AutorEntity> autores = servicioAutor.obtenerTodosLosAutores();
	    System.out.println(autores);
	    
	    return autores;
	}
	
	@GetMapping("/buscarPorNombre")
	public List<Object[]> obtenerDatosPorNombre(@RequestParam("nombre") String nombre){
		List<Object[]> datos = servicioAutor.buscarPorNombre(nombre);
		return datos;
	}
	
	@GetMapping("/listarAutores")
	public List<Object[]> listarAutores(){
		List<Object[]> datos = servicioAutor.sacarNomrbes();
		return datos;
	}
	
	@GetMapping("/nombresAutores")
	public List<Object[]> nombresAutor(){
		List<Object[]> datos = servicioAutor.conseguirNombres();
		return datos;
	}
	
	@JsonIgnoreProperties(ignoreUnknown = true)
	@PostMapping("/guardarAutor")
	public AutorEntity agregarAutor(@RequestBody AutorEntity autor) {
		System.out.println(autor);
		return servicioAutor.guardarAutor(autor);
	}
	
	


}
