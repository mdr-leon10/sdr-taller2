import flask
from flask import request, jsonify
import Items as items
import Users as users
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
@cross_origin(origin='*')
def home():
	if 'min' in request.args and 'max' in request.args:
		min = int(request.args['min'])
		max = int(request.args['max'])
	else:
		return "Error: No min or max field provided. Please specify an min or max."
	
	users_avg = users.get_all_users_average_score_section(min, max)
	return users_avg


@app.route('/svd', methods=['GET'])
@cross_origin(origin='*')
def svd():
	if 'id' in request.args:
		id = request.args['id']
	else:
		return "Error: No id field provided. Please specify an id."

	users_svd = users.get_items_in_users_svd(id)
	
	return jsonify(users_svd)


@app.route('/context', methods=['GET'])
@cross_origin(origin='*')
def context_week():
	if 'id' in request.args:
		id = request.args['id']
	else:
		return "Error: No id field provided. Please specify an id."
	
	users_context_week = users.get_items_in_users_context_week(id)
	
	return jsonify(users_context_week)

@app.route('/contextW', methods=['GET'])
@cross_origin(origin='*')
def context_weekend():
	if 'id' in request.args:
		id = request.args['id']
	else:
		return "Error: No id field provided. Please specify an id."
	
	users_context_weekend = users.get_items_in_users_context_weekend(id)
	
	return jsonify(users_context_weekend)

@app.route('/hybrid', methods=['GET'])
@cross_origin(origin='*')
def hybrid():
	if 'id' in request.args:
		id = request.args['id']
	else:
		return "Error: No id field provided. Please specify an id."
	
	users_hybrid = users.get_items_in_users_hyrid(id)
	
	return jsonify(users_hybrid)


@app.route('/online', methods=['GET'])
@cross_origin(origin='*')
def online():
	if 'id' in request.args:
		id = request.args['id']
	else:
		return "Error: No id field provided. Please specify an id."
	
	users_online = users.get_items_in_users_online(id)
	
	return jsonify(users_online)

@app.route('/original', methods=['GET'])
@cross_origin(origin='*')
def original():
	if 'id' in request.args:
		id = request.args['id']
	else:
		return "Error: No id field provided. Please specify an id."
	
	users_original = users.get_items_in_users_original(id)
	
	return jsonify(users_original)


users.read_data()
items.read_data()
app.run(host='0.0.0.0')
