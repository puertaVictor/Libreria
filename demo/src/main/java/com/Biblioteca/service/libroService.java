package com.Biblioteca.service;

import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Biblioteca.model.LibroEntity;
import com.Biblioteca.repository.LibroRepositorio;

import jakarta.transaction.Transactional;

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
    @Transactional
    public void actualizarLibro(int idLibro, String titulo, String descripcion, Boolean leido, Date fechaLectura,byte[] portada) {
        LibroEntity libro = libroRepositorio.findById(idLibro).orElseThrow(() -> new NoSuchElementException("Libro no encontrado"));

        if (titulo != null) {
            libro.setTitulo(titulo);
        }
        if (descripcion != null) {
            libro.setDescripcion(descripcion);
        }
        if (leido != null) {
            libro.setLeido(leido);
        }

       if (fechaLectura!=null) {
    	   libro.setFechaLectura(fechaLectura);
       }
       if(portada!=null) {
    	   libro.setPortada(portada);
       }

        libroRepositorio.save(libro);
    }
}
