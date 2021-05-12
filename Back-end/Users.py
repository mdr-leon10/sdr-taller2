import numpy
import pandas as pd
import Items as items

def read_data ():
	global df
	df = pd.read_csv('Users.csv', delimiter = ',')
	df['top_10_svd'] = df['top_10_svd'].str.split(',')
	df['top_10_week'] = df['top_10_week'].str.split(',')
	df['top_10_weekend'] = df['top_10_weekend'].str.split(',')
	df['top_10_hybrid'] = df['top_10_hybrid'].str.split(',')
	df['top_50'] = df['top_50'].str.split(',')
	df['top_10_reference'] = df['top_10_reference'].str.split(',')
	df.sort_values(by=['nan_count','apr_average'], ascending=[False,False], inplace=True)
	df.fillna('no_hay', inplace=True)
	df.to_csv('prueba.csv')

def get_all_users():
	return df['user']

def get_all_users_average_score():
	return df[['user','apr_average']]

def get_all_users_average_score_section(start, end):
	df_temp = get_all_users_average_score()
	if start >= 0 and end <= df.shape[0]:
		return df_temp[start:end].to_json(orient="records")
	else:
		return "out of limits"

def get_users_section(start, end):
	if start >= 0 and end <= df.shape[0]:
		return df[start:end]
	else:
		return "out of limits"

def get_user_by_id(user_id):
	return df[df['user'] == user_id]

""" Get User's recommendations lists in different models"""

def get_items_in_users_svd(user_param):
	ap = get_apr_in_users_svd(user_param)
	items_list = {'user': user_param, 'ap': float(ap)}
	item = []
	user = get_user_by_id(user_param)
	user_items = list(user['top_10_svd'])[0]
	if user_items != 'no_hay':
		for i in user_items:
			i = str(i).strip('[')
			i = i.strip(']')
			tuples = i.split(';')
			if len(tuples) > 1:
				id_item = tuples[0]
				score = tuples[1]
				item_name = items.get_item_by_id(id_item)[0]
				item.append({'id':str(id_item), 'score': float(score), 'item_name': str(item_name)})
			else:
				print('user: %s in item %s does not have score'.format(id, i))
		items_list['items'] = item
	return items_list

def get_items_in_users_context_week(user_param):
	ap = get_apr_in_users_context_week(user_param)
	items_list = {'user': user_param, 'ap': float(ap)}
	item = []
	user = get_user_by_id(user_param)
	user_items = list(user['top_10_week'])[0]
	if user_items != 'no_hay':
		for i in user_items:
			i = str(i).strip('[')
			i = i.strip(']')
			tuples = i.split(';')
			if len(tuples) > 1:
				id_item = tuples[0]
				score = tuples[1]
				item_name = items.get_item_by_id(id_item)[0]
				item.append({'id':str(id_item), 'score': float(score), 'item_name': str(item_name)})
			else:
				print('user: %s in item %s does not have score'.format(id, i))
		items_list['items'] = item
	return items_list

def get_items_in_users_context_weekend(user_param):
	ap = get_apr_in_users_context_weekend(user_param)
	items_list = {'user': user_param, 'ap': float(ap)}
	item = []
	user = get_user_by_id(user_param)
	user_items = list(user['top_10_weekend'])[0]
	if user_items != 'no_hay':
		for i in user_items:
			i = str(i).strip('[')
			i = i.strip(']')
			tuples = i.split(';')
			if len(tuples) > 1:
				id_item = tuples[0]
				score = tuples[1]
				item_name = items.get_item_by_id(id_item)[0]
				item.append({'id':str(id_item), 'score': float(score), 'item_name': str(item_name)})
			else:
				print('user: %s in item %s does not have score'.format(id, i))
		items_list['items'] = item
	return items_list

def get_items_in_users_hyrid(user_param):
	ap = get_apr_in_users_hyrid(user_param)
	items_list = {'user': user_param, 'ap': float(ap)}
	item = []
	user = get_user_by_id(user_param)
	user_items = list(user['top_10_hybrid'])[0]
	if user_items != 'no_hay':
		for i in user_items:
			i = str(i).strip('[')
			i = i.strip(']')
			tuples = i.split(';')
			if len(tuples) > 1:
				id_item = tuples[0]
				score = tuples[1]
				item_name = items.get_item_by_id(id_item)[0]
				item.append({'id':str(id_item), 'score': float(score), 'item_name': str(item_name)})
			else:
				print('user: %s in item %s does not have score'.format(id, i))
		items_list['items'] = item
	return items_list

def get_items_in_users_online(user_param):
	items_list = {'user': user_param}
	item = []	
	user = get_user_by_id(user_param)
	user_items = list(user['top_50'])[0]
	if user_items != 'no_hay':
		for i in user_items:
			i = str(i).strip('[')
			i = i.strip(']')
			tuples = i.split(';')
			if len(tuples) > 1:
				id_item = tuples[0]
				score = tuples[1]
				item_name = items.get_item_by_id(id_item)[0]
				item.append({'id':str(id_item), 'score': float(score), 'item_name': str(item_name)})
			else:
				print('user: %s in item %s does not have score'.format(id, i))
		items_list['items'] = item
	return items_list

def get_items_in_users_original(user_param):
	items_list = {'user': user_param}
	item = []
	user = get_user_by_id(user_param)
	user_items = list(user['top_10_reference'])[0]
	if user_items != 'no_hay':
		for i in user_items:
			i = str(i).strip('[')
			i = i.strip(']')
			tuples = i.split(';')
			if len(tuples) > 1:
				id_item = tuples[0]
				score = tuples[1]
				item_name = items.get_item_by_id(id_item)[0]
				item.append({'id':str(id_item), 'score': float(score), 'item_name': str(item_name)})
			else:
				print('user: %s in item %s does not have score'.format(id, i))
		items_list['items'] = item
	return items_list


""" Get User's APR in different models"""
def get_apr_in_users_svd(id):
	user = get_user_by_id(id)
	return user['apr_svd']

def get_apr_in_users_context_week(id):
	user = get_user_by_id(id)
	return user['apr_context_week']

def get_apr_in_users_context_weekend(id):
	user = get_user_by_id(id)
	return user['apr_context_weekend']

def get_apr_in_users_hyrid(id):
	user = get_user_by_id(id)
	return user['apr_hybrid']

def get_apr_in_users_average(id):
	user = get_user_by_id(id)
	return user['apr_average']


if __name__ == '__main__':
    read_data()