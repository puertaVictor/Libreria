package com.Biblioteca.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Biblioteca.service.libroService;

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
}
