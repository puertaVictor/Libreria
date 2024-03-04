package com.Biblioteca.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "autor")
public class AutorEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idautor")
    private int idAutor;

    private String nombre;
    
    @Column(name = "nacionalidad")
    private String nacionalidad; 
    
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

	public String getNacionalidad() {
		return nacionalidad;
	}

	public void setNacionalidad(String nacionalidad) {
		this.nacionalidad = nacionalidad;
	}

	@Override
	public String toString() {
		return "AutorEntity [idAutor=" + idAutor + ", nombre=" + nombre + ", nacionalidad=" + nacionalidad + "]";
	}



}
