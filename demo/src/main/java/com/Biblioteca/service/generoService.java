package com.Biblioteca.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Biblioteca.controlador.generoControlador;
import com.Biblioteca.model.GenerosEntity;
import com.Biblioteca.repository.GeneroRepositorio;

@Service
public class generoService {

	private final GeneroRepositorio generoRepositorio;
	
	@Autowired
	public generoService (GeneroRepositorio generoRepositorio) {
		this.generoRepositorio = generoRepositorio;
	}
	
	public List<String> obtenerGeneros(){
		return generoRepositorio.obtenerGeneros();
	}

	public List<Object[]> obtenerDatosPorGenero(String genero){
		return generoRepositorio.librosPorGeneros(genero);
	}
	
	public GenerosEntity guardarGenero(GenerosEntity genero) {
		return generoRepositorio.save(genero);
	}
}
