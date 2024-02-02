package com.Biblioteca.model;

import jakarta.persistence.*;


@Entity
@Table(name = "genero")
public class GenerosEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idgenero")
    private int idGenero;

    @ManyToOne
    @JoinColumn(name = "idautor")
    private AutorEntity autor;

    @ManyToOne
    @JoinColumn(name = "idlibro")
    private LibroEntity libro;

    private String nombreGenero;

	public int getIdGenero() {
		return idGenero;
	}

	public void setIdGenero(int idGenero) {
		this.idGenero = idGenero;
	}

	public AutorEntity getAutor() {
		return autor;
	}

	public void setAutor(AutorEntity autor) {
		this.autor = autor;
	}

	public LibroEntity getLibro() {
		return libro;
	}

	public void setLibro(LibroEntity libro) {
		this.libro = libro;
	}

	public String getNombreGenero() {
		return nombreGenero;
	}

	public void setNombreGenero(String nombreGenero) {
		this.nombreGenero = nombreGenero;
	}

    
}
