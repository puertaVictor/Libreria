package com.Biblioteca.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Biblioteca.model.LibroEntity;

public interface LibroRepositorio extends JpaRepository<LibroEntity, Integer> {

	@Query("SELECT l.titulo, l.autor.nombre, l.descripcion, l.genero.nombreGenero, l.leido, l.fechaLectura, l.portada, l.autor.nombre "
	        + "FROM LibroEntity l "
	        + "JOIN l.autor a "
	        + "LEFT JOIN l.genero g "
	        + "WHERE l.titulo = :titulo")
	List<Object[]> buscarPorLibro(@Param("titulo") String titulo);


	@Query("SELECT l.titulo, l.autor.nombre, l.descripcion, l.genero.nombreGenero, l.leido, l.fechaLectura, l.portada,l.autor.nombre "
			+ "FROM LibroEntity l " 
			+ "JOIN l.autor a " 
			+ "LEFT JOIN l.genero g " 
			+ "WHERE l.leido = true")
	List<Object[]> buscarLeidos();

	@Query("SELECT l.titulo, l.autor.nombre, l.descripcion, l.genero.nombreGenero, l.leido, l.fechaLectura, l.portada, l.autor.nombre "
	        + "FROM LibroEntity l "
	        + "JOIN l.autor a "
	        + "LEFT JOIN l.genero g "
	        + "WHERE l.leido = false")
	List<Object[]> buscarNoLeidos();

	@Query("SELECT l.portada, l.titulo, l.leido "
			+"FROM LibroEntity l"
	)
	List<Object[]> sacarPortadas();
	
	@Query("SELECT l.titulo, l.leido, l.descripcion, l.portada, l.fechaLectura, g.nombreGenero, " +
	        "(SELECT a.nombre FROM AutorEntity a WHERE a.idAutor = l.autor.idAutor) AS nombreDelAutor " +
	        "FROM LibroEntity l " +
	        "INNER JOIN GenerosEntity g ON l.genero.idGenero = g.idGenero " +
	        "ORDER BY l.fechaLectura ASC")
	List<Object[]> ordenarPorFechaAsc();

	@Query("SELECT l.titulo, l.leido, l.descripcion, l.portada, l.fechaLectura, g.nombreGenero, " +
	        "(SELECT a.nombre FROM AutorEntity a WHERE a.idAutor = l.autor.idAutor) AS nombreDelAutor " +
	        "FROM LibroEntity l " +
	        "INNER JOIN GenerosEntity g ON l.genero.idGenero = g.idGenero " +
	        "ORDER BY l.fechaLectura DESC")
	List<Object[]> ordenarPorFechaDesc();
}
