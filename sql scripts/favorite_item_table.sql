USE final_project;

CREATE TABLE favorite_item_table (
    pair_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item_id INT,
    user_id INT
);

INSERT INTO final_project.favorite_item_table
    ( item_id, user_id )
VALUES
    (1, 2),
    (2, 3),
    (3, 2),
    (2, 2);