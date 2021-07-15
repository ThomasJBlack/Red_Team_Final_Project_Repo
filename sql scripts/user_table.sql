USE final_project;

CREATE TABLE user_table (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100),
    user_address VARCHAR(100),
);

INSERT INTO final_project.user_table
    ( user_name )
VALUES
    ('Froh'),
    ('Thomas'),
    ('Nathaniel');