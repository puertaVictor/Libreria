package com.Biblioteca.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Biblioteca.model.AutorEntity;

public interface AutorRepositorio extends JpaRepository<AutorEntity, Integer> {

    List<AutorEntity> findAll();

    @Query("SELECT l.titulo, l.descripcion "
            + "FROM AutorEntity a "
            + "JOIN a.libros l "
            + "WHERE a.nombre = :nombre")
    List<Object[]> buscarPorNombre(@Param("nombre") String nombre);

}
