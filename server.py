import re
from flask import Flask
import datetime
from flask import render_template
from flask import Response, request, jsonify
from flask_cors import CORS
import xgboost
# Import data from data folder.
app = Flask(__name__)
CORS(app)

#ML libraries 
from joblib import dump, load
from xgboost import XGBClassifier
import pandas as pd
import numpy as np

# ROUTES

# Stores quiz result (correct or incorrect) for each quiz id.
# Updated in check_answer() function. Can be used later for calculating quiz score.
#Takes the data from the tutorial_data.py and from quiz_data.py
quiz_result = {}
quiz_user_answer = {}
answer_submitted = False

columns = ['funding_rounds', 'funding_total_usd', 'milestones', 'relationships',
       'angel', 'crowdfunding', 'other', 'post-ipo', 'private-equity',
       'series-a', 'series-b', 'series-c+', 'venture', 'closed', 'dev',
       'operating', 'age_set']
# sample_pred = [[ "young", 8, 40000.0, 4, 32, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 2, 4]]
# sample_pred_df = pd.DataFrame(sample_pred, columns = columns)

@app.route('/')
def home():
  return render_template('index.html')

@app.route('/analysis')
def analysis():
  return render_template('analysis.html')

@app.route('/predict')
def predict():
  
  return render_template('predict.html')

@app.route('/endpoint', methods=['POST'])
def endpoint():
  print(request.get_json())
  ageset_le = load('ageset_le.joblib') 
  funding_scaler = load('funding_scaler.joblib')
  status_le = load('status_le.joblib')
  xgb_model = load('xgb_balanced.joblib') 
  X_test = []

  for col in columns:
    X_test.append(request.get_json()[col])
  
  X_test_df = pd.DataFrame([X_test], columns = columns)
  print("Before transform:", X_test_df)

  X_test_df[['age_set']] = ageset_le.transform(X_test_df[['age_set']])
  X_test_df[['funding_total_usd']] = funding_scaler.transform(X_test_df[['funding_total_usd']])
  print("After transform:", X_test_df)

  print("Startup is likely to be:", xgb_model.predict(X_test_df)[0])
  result = status_le.inverse_transform(xgb_model.predict(X_test_df))[0]
  return jsonify(statusCode=200, result=result.title())


if __name__ == '__main__':
  import click

  @click.command()
  @click.option('--debug', is_flag=True)
  @click.option('--threaded', is_flag=True)
  @click.argument('HOST', default='0.0.0.0')
  @click.argument('PORT', default=80, type=int)
  def run(debug, threaded, host, port):
    """
    This function handles command line parameters.
    Run the server using:

        python3 server.py

    Show the help text using:

        python3 server.py --help

    """

    HOST, PORT = host, port
    print("running on %s:%d" % (HOST, PORT))
    app.config['SECRET_KEY'] = '7f635aa07b19435aa72882fe85bdd3ac'
    app.run(host=HOST, port=PORT, debug=True, threaded=threaded)

  run()
