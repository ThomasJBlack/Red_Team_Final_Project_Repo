USE final_project;

CREATE TABLE item_table (
    item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100),
    item_price DOUBLE(7,2),
    restaurant_id INT,
    inventory INT
    );

INSERT INTO final_project.item_table
    ( item_name, item_price, restaurant_id, inventory )
VALUES
    ('Onion Rings', 10.05, 2, 25),
    ('Steak Strips', 15.50, 3, 50),
    ('Pizza', 12.00, 1, 100);