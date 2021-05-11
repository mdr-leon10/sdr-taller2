import numpy
import pandas as pd

def read_data ():
	global df
	df = pd.read_csv('Business_list.csv')
	df.set_index('business_id', inplace = True)
	df.drop('Unnamed: 0', inplace = True, axis=1)

def get_items():
	return df

def get_items_section(start, end):
	if start >= 0 and end <= df.shape[0]:
		return df[start:end]
	else:
		return "out of limits"

def get_list_of_items(ids):
	return df.loc[ids]

def get_section_from_list(start, end, items_list):
	
	df_section = return_list_of_items(items_list)

	if start >= 0 and end <= df_section.shape[0]:
		return df_section[start:end]
	else:
		return "out of limits"

def get_item_by_id (id):
	return df.loc[id]

if __name__ == '__main__':
    read_data()
    print(get_item_by_id('D4JtQNTI4X3KcbzacDJsMw'))