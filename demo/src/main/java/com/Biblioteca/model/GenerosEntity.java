package com.Biblioteca.model;

import jakarta.persistence.*;


@Entity
@Table(name = "genero")
public class GenerosEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idgenero")
    private int idGenero;
    
    @JoinColumn(name = "nombre_genero")
    private String nombreGenero;

	public int getIdGenero() {
		return idGenero;
	}

	public void setIdGenero(int idGenero) {
		this.idGenero = idGenero;
	}

	public String getNombreGenero() {
		return nombreGenero;
	}

	public void setNombreGenero(String nombreGenero) {
		this.nombreGenero = nombreGenero;
	}

	  @Override
	    public String toString() {
	        return "GenerosEntity{" +
	                "idGenero=" + idGenero +
	                ", nombreGenero='" + nombreGenero + '\'' +
	                '}';
	    }
}
