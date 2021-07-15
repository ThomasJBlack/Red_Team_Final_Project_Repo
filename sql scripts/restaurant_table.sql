USE final_project;

CREATE TABLE restaurant_table (
    restaurant_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    restaurant_name VARCHAR(100)
);

INSERT INTO final_project.restaurant_table
    ( restaurant_name )
VALUES
    ('Maialina Pizzeria Neapolitana'),
    ('Moscow Alehouse'),
    ('Sangria Grille');