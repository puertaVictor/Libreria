package com.Biblioteca.model;
import jakarta.persistence.*;

@Entity
@Table(name = "generos")
public class GenerosEntity {

    @Id
    @Column(name = "idGenero")
    private int idGenero;

    private String genero;

    @ManyToOne
    @JoinColumn(name = "idAutor")
    private AutorEntity autorEntity;

	public int getIdGenero() {
		return idGenero;
	}

	public void setIdGenero(int idGenero) {
		this.idGenero = idGenero;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public AutorEntity getAutorEntity() {
		return autorEntity;
	}

	public void setAutorEntity(AutorEntity autorEntity) {
		this.autorEntity = autorEntity;
	}

	@Override
	public String toString() {
		return "GenerosEntity [idGenero=" + idGenero + ", genero=" + genero + ", autorEntity=" + autorEntity + "]";
	}

  
}
