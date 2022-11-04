-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS childhood_movies;

CREATE TABLE childhood_movies (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR NOT NULL,
    url VARCHAR NOT NULL, 
    year INT NOT NULL,
    is_animated BOOLEAN NOT NULL,
    is_anime BOOLEAN NOT NULL
);

INSERT INTO childhood_movies(title, url, year, is_animated, is_anime)
VALUES
('My Neighbor Totoro', 'https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg',1988, TRUE, TRUE),
('Just Around the Corner', 'https://upload.wikimedia.org/wikipedia/en/c/c7/Film_Poster_for_Just_Around_the_Corner.jpg', 1938, FALSE, FALSE),
('Peter Pan', 'https://upload.wikimedia.org/wikipedia/en/4/46/PeterpanRKO.jpg', 1953, TRUE, FALSE),
('Singin in the Rain', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Singin%27_in_the_Rain_%281952_poster%29.jpg/1280px-Singin%27_in_the_Rain_%281952_poster%29.jpg', 1952, FALSE, FALSE),
('Little Nemo: Adventures in Slumberland', 'https://upload.wikimedia.org/wikipedia/en/3/36/Little_Nemo_Japanese_poster.jpg', 1989,  TRUE, TRUE)