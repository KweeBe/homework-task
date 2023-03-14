CREATE TABLE IF NOT EXISTS public.audience
(
    audience_id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    country character varying(20) COLLATE pg_catalog."default" NOT NULL,
    number_of_spectators integer NOT NULL,
    fk_id_film integer NOT NULL,
    CONSTRAINT audience_pkey PRIMARY KEY (audience_id)
);

CREATE TABLE IF NOT EXISTS public.film_person
(
    fk_person_id integer NOT NULL,
    fk_film_id integer NOT NULL,
    role character varying(20) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT film_person_pkey PRIMARY KEY (fk_person_id, fk_film_id)
);

CREATE TABLE IF NOT EXISTS public.films
(
    film_id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    film_name character varying(60) COLLATE pg_catalog."default" NOT NULL,
    eng_name character varying(60) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    year integer NOT NULL,
    country character varying(40) COLLATE pg_catalog."default" NOT NULL,
    film_director integer NOT NULL,
    screenwriter integer NOT NULL,
    producer integer NOT NULL,
    operator integer NOT NULL,
    composer integer NOT NULL,
    painter integer NOT NULL,
    montage integer NOT NULL,
    budget integer NOT NULL,
    marketing integer NOT NULL,
    fees_in_the_usa integer NOT NULL,
    fees_in_the_world integer NOT NULL,
    premiere_in_russia date NOT NULL,
    world_premiere date NOT NULL,
    age integer NOT NULL,
    rating_mpaa character varying(5) COLLATE pg_catalog."default" NOT NULL,
    time_min integer NOT NULL,
    CONSTRAINT films_pkey PRIMARY KEY (film_id)
);

CREATE TABLE IF NOT EXISTS public.genres
(
    genres_id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    genres_name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT genres_pkey PRIMARY KEY (genres_id)
);

CREATE TABLE IF NOT EXISTS public.genres_of_the_film
(
    fk_film_id integer NOT NULL,
    fk_genres_id integer NOT NULL,
    CONSTRAINT genres_of_the_film_pkey PRIMARY KEY (fk_film_id, fk_genres_id)
);

CREATE TABLE IF NOT EXISTS public.person
(
    person_id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    first_name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT person_pkey PRIMARY KEY (person_id)
);

ALTER TABLE IF EXISTS public.audience
    ADD CONSTRAINT fk_film_audience FOREIGN KEY (fk_id_film)
    REFERENCES public.films (film_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.film_person
    ADD CONSTRAINT fk_film_person_film FOREIGN KEY (fk_film_id)
    REFERENCES public.films (film_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.film_person
    ADD CONSTRAINT fk_film_person_person FOREIGN KEY (fk_person_id)
    REFERENCES public.person (person_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.films
    ADD CONSTRAINT fk_composer FOREIGN KEY (composer)
    REFERENCES public.person (person_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.films
    ADD CONSTRAINT fk_film_director FOREIGN KEY (film_director)
    REFERENCES public.person (person_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.films
    ADD CONSTRAINT fk_montage FOREIGN KEY (montage)
    REFERENCES public.person (person_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.films
    ADD CONSTRAINT fk_operator FOREIGN KEY (operator)
    REFERENCES public.person (person_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.films
    ADD CONSTRAINT fk_painter FOREIGN KEY (painter)
    REFERENCES public.person (person_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.films
    ADD CONSTRAINT fk_producer FOREIGN KEY (producer)
    REFERENCES public.person (person_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.films
    ADD CONSTRAINT fk_screenwriter FOREIGN KEY (screenwriter)
    REFERENCES public.person (person_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.genres_of_the_film
    ADD CONSTRAINT fk_film_genres FOREIGN KEY (fk_film_id)
    REFERENCES public.films (film_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.genres_of_the_film
    ADD CONSTRAINT fk_genres_id FOREIGN KEY (fk_genres_id)
    REFERENCES public.genres (genres_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;