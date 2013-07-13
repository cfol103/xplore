# all the imports
from __future__ import with_statement
from contextlib import closing
import sqlite3
from flask import Flask, request, session, g, redirect, url_for, \
        abort, render_template, flash
from pprint import pprint
import json

# configuration
#DATABASE = '/tmp/flaskr.db'
DEBUG = True
SECRET_KEY = 'development key'
USERNAME = 'admin'
PASSWORD = 'default'


app = Flask(__name__)
app.config.from_object(__name__)

# Received as the result from the POST from the front page
video_ids = []

@app.route("/")
def index():
  return render_template('index.html')

@app.route("/results", methods = ["GET", "POST"])
def results():
  global video_ids
  if request.method == 'POST' and request.data:
    video_ids = []
    print "REQUEST DATA:"
    final_data = json.loads(request.data)
    for result in final_data:
      video_ids.append(str(result))
    print "SERVER IMPORTED: "
    for ele in video_ids:
      print ele
    return 'successful video requests'

if __name__ == '__main__':
    app.run()


