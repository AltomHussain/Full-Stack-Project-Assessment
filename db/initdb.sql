\c videorec;

DROP TABLE IF EXISTS videos CASCADE;

CREATE TABLE videos (
    title VARCHAR,
    src VARCHAR
);

CREATE TABLE altom_test (
    title VARCHAR,
    src VARCHAR
);

INSERT INTO videos (title,src) VALUES ('altom222','https://www.youtube.com/watch?v=dQw4w9WgXcQ');
-- you can insert more rows using example data from the example_data.csv file


INSERT INTO altom_test (title,src) VALUES ('Never Gonna Give You Up','https://www.youtube.com/watch?v=dQw4w9WgXcQ');
