import pymysql
from flask import Flask, request, jsonify
from .api_helpers import jsonConversion

app = Flask(__name__)

db = pymysql.connect(
    host='freetrainer.cryiqqx3x1ub.us-west-2.rds.amazonaws.com',
    user='elijah',
    password='changeme'
)

cursor = db.cursor()


@app.route('/restaurant', methods=['GET'])
def getRestaurants():
    sql = 'SELECT restaurant_name, restaurant_id FROM final_project.restaurant_table;'
    cursor.execute(sql)
    data = cursor.fetchall()
   
    return jsonConversion(data)

@app.route('/user', methods=['GET'])
def getUsernames():
    sql = 'SELECT user_name, user_id FROM final_project.user_table;'
    cursor.execute(sql)
    data = cursor.fetchall()

    payload = []
    content = {}
    for result in data:
        content = {'user_id': result[1],
                   'user_name': result[0]}
        payload.append(content)
        print(content)
        content = {}
    return jsonify(payload)


@app.route('/menu', methods=['POST'])
def getMenu():

    restaurant_id = request.json()['restaurant_id']
    sql = f"""
        SELECT 
            item_name, item_id
        FROM
            final_project.item_table
        WHERE
            restaurant_id = {restaurant_id};
    """
    cursor.execute(sql)
    data = cursor.fetchall()
    return {'data': data}


@app.route('/cart', methods=['POST'])
def getCart():
    user_id = request.json()['user_id']
    sql = f"""
        SELECT
            item_name, item_price
        FROM 
            final_project.order_table
        JOIN
            final_project.item_table ON item_table.item_id = order_table.item_id
        WHERE
            user_id = {user_id}
    """
    cursor.execute(sql)
    data = cursor.fetchall()
    return {'data': data}


@app.route('/add_favorite', methods=['POST'])
def addFavorite():
    inputs = request.json()
    term = input['term']
    favorite_id = input['favorite_id']
    user_id = input['user_id']
    sql = f"""
        INSERT INTO 
            final_project.favorite_{term}_table
            ( {term}_id, user_id )
        VALUES
            ({favorite_id}, {user_id});
    """
    try:
        cursor.execute(sql)
        db.commit()
        return True
    except:
        db.rollback()
        return False


@app.route('/place_order', methods=['POST'])
def placeOrder():
    user_id = request.json['user_id']
    item_ids = request.json['item_ids']
    order_number = 0
    for item_id in item_ids:
        sql = f"""
            INSERT INTO 
                final_project.order_table
                ( item_id, user_id, order_number)
            VALUES
                ({item_id}, {user_id}, {order_number});
        """
        try:
            cursor.execute(sql)
            db.commit()
            order_number += 1
            return True
        except:
            db.rollback()


if __name__ == '__main__':
    app.run(debug=True)
    # when we're done, remove the debug=True
