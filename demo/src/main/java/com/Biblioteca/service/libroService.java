package com.Biblioteca.service;

import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Biblioteca.model.*;
import com.Biblioteca.model.LibroEntity;
import com.Biblioteca.repository.AutorRepositorio;
import com.Biblioteca.repository.GeneroRepositorio;
import com.Biblioteca.repository.LibroRepositorio;

import jakarta.transaction.Transactional;

@Service
public class libroService {
	
   private final LibroRepositorio libroRepositorio;
   private final GeneroRepositorio generoRepositorio; 
   private final AutorRepositorio autorRepositorio;
	@Autowired
	public libroService (LibroRepositorio libroRepositorio, GeneroRepositorio generoRepositorio, AutorRepositorio autorRepositorio) { 
		this.libroRepositorio = libroRepositorio;
		this.generoRepositorio = generoRepositorio; 
		this.autorRepositorio = autorRepositorio;
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
    
    public List<Object[]> sacarPortadas(){
    	return libroRepositorio.sacarPortadas();
    }
    public List<Object[]> ordenarPorFechaAsc(){
    	return libroRepositorio.ordenarPorFechaAsc();
    }
    public List<Object[]> ordenarPorFechaDes(){
    	return libroRepositorio.ordenarPorFechaDesc();
    }
    
    public List<Object[]> libroAleatorio(){
    	return libroRepositorio.obtenerLibroAleatorio();
    }
    public LibroEntity guardarLibro(LibroEntity libro) {
        return libroRepositorio.save(libro);
    }
    public List<Object[]> buscarPorDescripcion(String cadena){
    	return libroRepositorio.buscarPorDescripcion(cadena);
    }
    public int obtenerID(String titulo) {
    	return libroRepositorio.obtenerID(titulo);
    }
    @Transactional
    public void actualizarLibro(LibroEntity libro) {
        LibroEntity libroExistente = libroRepositorio.findById(libro.getIdLibro())
                .orElseThrow(() -> new NoSuchElementException("Libro no encontrado"));
        
        if (libro.getTitulo() != null) {
            libroExistente.setTitulo(libro.getTitulo());
        }
        if (libro.getDescripcion() != null) {
            libroExistente.setDescripcion(libro.getDescripcion());
        }
        if (libro.isLeido()) {
            libroExistente.setLeido(libro.isLeido());
        }
        if (libro.getFechaLectura() != null) {
            libroExistente.setFechaLectura(libro.getFechaLectura());
        }
        if (libro.getPortada() != null) {
            libroExistente.setPortada(libro.getPortada());
        }
 
        if (libro.getGenero() != null && libro.getGenero().getIdGenero() != 0) {
            GenerosEntity genero = generoRepositorio.findById(libro.getGenero().getIdGenero())
                    .orElseThrow(() -> new NoSuchElementException("Género no encontrado"));
            libroExistente.setGenero(genero);
        }
        if (libro.getAutor() != null && libro.getAutor().getIdAutor() != 0) {
            AutorEntity autor = autorRepositorio.findById(libro.getAutor().getIdAutor())
                    .orElseThrow(() -> new NoSuchElementException("Género no encontrado"));
            libroExistente.setAutor(autor);
        }
        libroRepositorio.save(libroExistente);
    }





}
