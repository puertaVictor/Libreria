package com.Biblioteca.model;

import jakarta.persistence.*;

import java.util.Arrays;
import java.util.Date;

@Entity
@Table(name = "libro")
public class LibroEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idLibro")
	private int idLibro;

	private String titulo;

	private String autor;

	@ManyToOne
	@JoinColumn(name = "autor_id")
	private AutorEntity autorEntity;

	private String descripcion;

	private String genero;

	private boolean leido;

	@Temporal(TemporalType.DATE)
	private Date fechaLectura;

	@Column(name = "portada")
	private byte[] portada;

	public int getIdLibro() {
		return idLibro;
	}

	public void setIdLibro(int idLibro) {
		this.idLibro = idLibro;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public AutorEntity getAutorEntity() {
		return autorEntity;
	}

	public void setAutorEntity(AutorEntity autorEntity) {
		this.autorEntity = autorEntity;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public boolean isLeido() {
		return leido;
	}

	public void setLeido(boolean leido) {
		this.leido = leido;
	}

	public Date getFechaLectura() {
		return fechaLectura;
	}

	public void setFechaLectura(Date fechaLectura) {
		this.fechaLectura = fechaLectura;
	}

	public byte[] getPortada() {
		return portada;
	}

	public void setPortada(byte[] portada) {
		this.portada = portada;
	}

	@Override
	public String toString() {
		return "LibroEntity [idLibro=" + idLibro + ", titulo=" + titulo + ", autor=" + autor + ", autorEntity="
				+ autorEntity + ", descripcion=" + descripcion + ", genero=" + genero + ", leido=" + leido
				+ ", fechaLectura=" + fechaLectura + ", portada=" + Arrays.toString(portada) + "]";
	}

}
