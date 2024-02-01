package com.Biblioteca.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Biblioteca.model.LibroEntity;

public interface LibroRepositorio extends JpaRepository<LibroEntity, Integer> { 

    @Query("SELECT l.titulo, l.autor.nombre, l.descripcion, l.genero.nombreGenero, l.leido, l.fechaLectura, l.portada, l.autor.nombre " +
           "FROM LibroEntity l " +
           "JOIN l.autor a " +
           "LEFT JOIN l.genero g " + 
           "WHERE l.titulo = :titulo")
    List<Object[]> buscarPorLibro(@Param("titulo") String titulo);

}
