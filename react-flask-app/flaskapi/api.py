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

@app.route('/')
def getRestaurants():
    sql = 'SELECT restaurant_name FROM final_project.restaurant_table'
    return 

@app.route('/user')
def getUsernames():
    sql = 'SELECT user_name FROM final_project.user_table'
    return

@app.route('/menu')
def getMenu():
    restaurant_id = restaurant_id
    sql = f"""
        SELECT 
            item_name, item_price, item_id
        FROM
            item_table
        WHERE
            restaurant_id = {restaurant_id};
    """
    return

@app.route('/cart')
def getCart():
    user_id = user_id
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