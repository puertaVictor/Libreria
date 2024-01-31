package com.Biblioteca.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "autor")

public class AutorEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idautor")
	private int idAutor;

	private String nombre;

	@OneToMany(mappedBy = "autorEntity", cascade = CascadeType.ALL)
	private List<LibroEntity> libros;

	@OneToMany(mappedBy = "autorEntity", cascade = CascadeType.ALL)
	private List<GenerosEntity> generos;

	public int getIdAutor() {
		return idAutor;
	}

	public void setIdAutor(int idAutor) {
		this.idAutor = idAutor;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<LibroEntity> getLibros() {
		return libros;
	}

	public void setLibros(List<LibroEntity> libros) {
		this.libros = libros;
	}

	public List<GenerosEntity> getGeneros() {
		return generos;
	}

	public void setGeneros(List<GenerosEntity> generos) {
		this.generos = generos;
	}

	@Override
	public String toString() {
		return "AutorEntity [idAutor=" + idAutor + ", nombre=" + nombre + ", libros=" + libros + ", generos=" + generos
				+ "]";
	}



}
