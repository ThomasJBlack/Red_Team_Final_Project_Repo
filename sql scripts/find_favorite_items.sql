SELECT
    user_table.user_name,
    user_items.item_name
FROM
    user_table
JOIN
    user_items ON user_items.user_id = user_table.user_id
WHERE 
    user_id = 1;