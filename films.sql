CREATE TABLE IF NOT EXISTS public.films
(
    id_film integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name_film character varying(50) COLLATE pg_catalog."default" NOT NULL,
    year_of_release character varying(4) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT films_pkey PRIMARY KEY (id_film)
);

CREATE TABLE IF NOT EXISTS public.films_genres
(
    id_film integer NOT NULL,
    id_genres integer NOT NULL,
    CONSTRAINT films_genres_pkey PRIMARY KEY (id_film, id_genres)
);

CREATE TABLE IF NOT EXISTS public.genres
(
    id_genres integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name_genres character varying(40) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT genres_pkey PRIMARY KEY (id_genres)
);

ALTER TABLE IF EXISTS public.films_genres
    ADD CONSTRAINT fk_film FOREIGN KEY (id_film)
    REFERENCES public.films (id_film) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.films_genres
    ADD CONSTRAINT fk_genres FOREIGN KEY (id_genres)
    REFERENCES public.genres (id_genres) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
	
	
INSERT INTO genres(name_genres) VALUES
('история'),
('мелодрамма'),
('драма'),
('фэнтези'),
('криминал'),
('комедия');

INSERT INTO films(name_film, year_of_release) VALUES
('Зеленая миля', 1999),
('Побег из Шоушенка', 1994),
('Властелин колец: Возвращение короля', 2003),
('Интерстеллар', 2014),
('Форрест Гамп', 1994);

INSERT INTO films_genres VALUES
(1,3),
(1,4),
(1,5),
(4,3),
(5,1),
(5,2),
(5,3),
(5,6);
