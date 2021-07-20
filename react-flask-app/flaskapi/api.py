import time
from flask.wrappers import Request

import pymysql
from flask import Flask, request

app = Flask(__name__)

db = pymysql.connect(
    host='freetrainer.cryiqqx3x1ub.us-west-2.rds.amazonaws.com',
    user='elijah',
    password='changeme'
)

cursor = db.cursor()


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/', methods=['GET'])
def getRestaurants():
    sql = 'SELECT restaurant_name FROM final_project.restaurant_table;'
    return cursor.execute(sql)


@app.route('/user', methods=['GET'])
def getUsernames():
    sql = 'SELECT user_name FROM final_project.user_table;'
    return cursor.execute(sql)


@app.route('/menu', methods=['POST'])
def getMenu():
    restaurant_id = request.json['restaurant_id']
    sql = f"""
        SELECT 
            item_name, item_price, item_id
        FROM
            item_table
        WHERE
            restaurant_id = {restaurant_id};
    """
    return cursor.execute(sql)


@app.route('/cart', methods=['POST'])
def getCart():
    user_id = request.json['user_id']
    sql = f"""
        SELECT
            item_name, item_price
        FROM 
            order_table
        JOIN
            item_table ON item_table.item_id = order_table.item_id
        WHERE
            user_id = 1
    """
    return cursor.execute(sql)


@app.route('/add_favorite', methods=['POST'])
def addFavorite():
    term = request.form['term']
    favorite_id = request.form['favorite_id']
    user_id = request.form['user_id']
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
        return False
