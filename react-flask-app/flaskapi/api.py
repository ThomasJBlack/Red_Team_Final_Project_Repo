import time
import pymysql
from flask import Flask

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
    sql = 'SELECT restaurant_name, restaurant_id FROM final_project.restaurant_table'
    cursor.execute(sql)
    data = cursor.fetchall()
    return {'data': data}

@app.route('/user', methods=['GET'])
def getUsernames():
    sql = 'SELECT user_name, user_id FROM final_project.user_table'
    cursor.execute(sql)
    data = cursor.fetchall()
    return {'data': data}

@app.route('/menu', methods=['POST'])
def getMenu():
    restaurant_id = restaurant_id
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
    user_id = user_id
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
    term = term
    favorite_id = favorite_id
    user_id = user_id
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