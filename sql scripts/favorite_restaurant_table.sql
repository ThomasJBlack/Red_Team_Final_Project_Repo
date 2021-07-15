USE final_project;

CREATE TABLE favorite_restaurant_table (
    pair_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT,
    user_id INT
);

INSERT INTO final_project.favorite_restaurant_table
    ( restaurant_id, user_id )
VALUES
    (1, 2),
    (1, 1),
    (2, 3),
    (3, 3);