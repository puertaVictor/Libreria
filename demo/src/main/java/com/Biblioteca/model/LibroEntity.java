package com.Biblioteca.model;

import jakarta.persistence.*;

import java.util.Arrays;
import java.util.Date;

@Entity
@Table(name = "libro")
public class LibroEntity {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idlibro")
    private int idLibro;

    private String titulo;

    @ManyToOne
    @JoinColumn(name = "idautor")
    private AutorEntity autor;

    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "idgenero")
    private GenerosEntity genero;

    private boolean leido;

	public GenerosEntity getGenero() {
		return genero;
	}
	
	public AutorEntity getAutor() {
		return autor;
	}
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


	public void setAutor(AutorEntity autor) {
		this.autor = autor;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public void setGenero(GenerosEntity genero) {
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
		return "LibroEntity [idLibro=" + idLibro + ", titulo=" + titulo + ", autor=" + autor + ", descripcion="
				+ descripcion + ", genero=" + genero + ", leido=" + leido + ", fechaLectura=" + fechaLectura
				+ ", portada=" + Arrays.toString(portada) + "]";
	}



}