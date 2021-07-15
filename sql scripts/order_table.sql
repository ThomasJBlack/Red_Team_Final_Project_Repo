USE final_project;

CREATE TABLE order_table (
    pair_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    item_id INT,
    user_id INT
);

INSERT INTO final_project.order_table
    ( item_id, user_id )
VALUES
    (2, 1),
    (1, 1),
    (2, 1);