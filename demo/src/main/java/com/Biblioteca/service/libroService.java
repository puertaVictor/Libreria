package com.Biblioteca.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Biblioteca.repository.LibroRepositorio;

@Service
public class libroService {
	
   private final LibroRepositorio libroRepositorio;
	@Autowired
	public libroService (LibroRepositorio libroRepositorio) {
		this.libroRepositorio = libroRepositorio;
	}
	
    public List<Object[]> buscarPorTitulo(String titulo){
    	return libroRepositorio.buscarPorLibro(titulo);
    }
    
    public List<Object[]> buscarLeidos(){
    	return libroRepositorio.buscarLeidos();
    }
    
    public List<Object[]> buscarNoLeidos(){
    	return libroRepositorio.buscarNoLeidos();
    }
}
