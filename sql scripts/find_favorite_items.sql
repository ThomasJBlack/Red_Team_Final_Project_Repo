SELECT
    user_table.user_name,
    item_table.item_name
FROM
    favorite_item_table
JOIN
    user_table ON user_table.user_id = favorite_item_table.user_id
JOIN
    item_table ON item_table.item_id = favorite_item_table.item_id
WHERE
    user_table.user_name = 'Thomas';