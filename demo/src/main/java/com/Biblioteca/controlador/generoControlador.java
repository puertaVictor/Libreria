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

import com.Biblioteca.model.GenerosEntity;
import com.Biblioteca.service.generoService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@CrossOrigin("*")
@RestController
@RequestMapping("/Genero")
public class generoControlador {

	@Autowired
	private generoService generoService;
	
	@GetMapping("/obtenerGeneros")
	public List<String> obtenerGeneros(){
		List<String> datos = generoService.obtenerGeneros();
		return datos;
	}
	
	@GetMapping("/obtenerDatosPorGeneros")
	public List<Object[]> obtenerDatosPorGenero(@RequestParam("genero")String genero){
		List<Object[]> datos = generoService.obtenerDatosPorGenero(genero);
		return datos;
	}
	@JsonIgnoreProperties(ignoreUnknown = true)
	@PostMapping("/guardarGenero")
	public GenerosEntity agregarGenero(@RequestBody GenerosEntity genero) {
		System.out.println(genero);
		return generoService.guardarGenero(genero);
	}
	
}
