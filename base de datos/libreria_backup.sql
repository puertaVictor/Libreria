--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: autor_idautor_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.autor_idautor_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.autor_idautor_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: autor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.autor (
    idautor integer DEFAULT nextval('public.autor_idautor_seq'::regclass) NOT NULL,
    nombre character varying(255),
    nacionalidad character varying(255)
);


ALTER TABLE public.autor OWNER TO postgres;

--
-- Name: genero_idgenero_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.genero_idgenero_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.genero_idgenero_seq OWNER TO postgres;

--
-- Name: genero; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.genero (
    idgenero integer DEFAULT nextval('public.genero_idgenero_seq'::regclass) NOT NULL,
    nombre_genero character varying(255)
);


ALTER TABLE public.genero OWNER TO postgres;

--
-- Name: libro_idlibro_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.libro_idlibro_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.libro_idlibro_seq OWNER TO postgres;

--
-- Name: libro; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.libro (
    idlibro integer DEFAULT nextval('public.libro_idlibro_seq'::regclass) NOT NULL,
    idautor integer,
    idgenero integer,
    portada bytea,
    descripcion character varying(2000),
    fecha_lectura date,
    leido boolean,
    titulo character varying(255),
    id_libro integer NOT NULL
);


ALTER TABLE public.libro OWNER TO postgres;

--
-- Name: libro_id_libro_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.libro_id_libro_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.libro_id_libro_seq OWNER TO postgres;

--
-- Name: libro_id_libro_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.libro_id_libro_seq OWNED BY public.libro.id_libro;


--
-- Name: libro id_libro; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.libro ALTER COLUMN id_libro SET DEFAULT nextval('public.libro_id_libro_seq'::regclass);


--
-- Data for Name: autor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.autor (idautor, nombre, nacionalidad) FROM stdin;
\.


--
-- Data for Name: genero; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.genero (idgenero, nombre_genero) FROM stdin;
\.


--
-- Data for Name: libro; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.libro (idlibro, idautor, idgenero, portada, descripcion, fecha_lectura, leido, titulo, id_libro) FROM stdin;
\.


--
-- Name: autor_idautor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.autor_idautor_seq', 14, true);


--
-- Name: genero_idgenero_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.genero_idgenero_seq', 42, true);


--
-- Name: libro_id_libro_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.libro_id_libro_seq', 80, true);


--
-- Name: libro_idlibro_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.libro_idlibro_seq', 79, true);


--
-- Name: autor autor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.autor
    ADD CONSTRAINT autor_pkey PRIMARY KEY (idautor);


--
-- Name: genero genero_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genero
    ADD CONSTRAINT genero_pkey PRIMARY KEY (idgenero);


--
-- Name: libro libro_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.libro
    ADD CONSTRAINT libro_pkey PRIMARY KEY (idlibro);


--
-- Name: libro fk_libro_genero; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.libro
    ADD CONSTRAINT fk_libro_genero FOREIGN KEY (idgenero) REFERENCES public.genero(idgenero);


--
-- Name: libro libro_idautor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.libro
    ADD CONSTRAINT libro_idautor_fkey FOREIGN KEY (idautor) REFERENCES public.autor(idautor);


--
-- PostgreSQL database dump complete
--

