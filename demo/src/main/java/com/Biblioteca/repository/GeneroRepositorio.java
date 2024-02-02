package com.Biblioteca.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Biblioteca.model.GenerosEntity;

public interface GeneroRepositorio extends JpaRepository<GenerosEntity, Integer> { 
	
	@Query("select g.nombreGenero from GenerosEntity g")
	 List<String>obtenerGeneros();
	
	
	
	@Query("SELECT l.titulo, l.autor.nombre, l.descripcion, l.portada, l.leido FROM LibroEntity l JOIN l.genero g WHERE g.nombreGenero = :genero")
	List<Object[]> librosPorGeneros(@Param("genero") String genero);



	
	
}



