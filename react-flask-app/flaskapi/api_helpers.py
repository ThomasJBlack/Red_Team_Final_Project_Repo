from flask import jsonify


def jsonConversion(data):
    payload = []
    content = {}
    for result in data:
        content = {'value_id': result[1],
                   'value_name': result[0]}
        payload.append(content)
        content = {}
    return jsonify(payload)