from flask import Flask, request
import pymysql

app = Flask(__name__)

db = pymysql.connect(
    host='freetrainer.cryiqqx3x1ub.us-west-2.rds.amazonaws.com',
    user='elijah',
    password='changeme'
)

cursor = db.cursor()

# @app.route('/time')
# def get_current_time():
#     return {'time': time.time()}


@app.route('/')
def getRestaurants():
    sql = 'SELECT restaurant_name FROM final_project.restaurant_table;'
    return cursor.execute(sql)


@app.route('/user')
def getUsernames():
    sql = 'SELECT user_name FROM final_project.user_table;'
    return cursor.execute(sql)


@app.route('/menu')
def getMenu():
    # pull out of a form? or use the url?
    restaurant_id = request.form['restaurant_id']
    sql = f"""
        SELECT 
            item_name, item_price, item_id
        FROM
            item_table
        WHERE
            restaurant_id = {restaurant_id};
    """
    return cursor.execute(sql)


@app.route('/cart')
def getCart():
    # pull out of a form? or use the url?
    user_id = request.form['user_id']
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


if __name__ == '__main__':
    app.run(debug=True)
