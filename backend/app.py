from models import db, User, Question, Answer, Vote
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from views import *

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
db.init_app(app)
migrate = Migrate(app, db)

app.register_blueprint(user_bp)
app.register_blueprint(question_bp)
app.register_blueprint(answer_bp)
app.register_blueprint(vote_bp)
# Operations CRUD



if __name__ == '__main__':
    app.run(port=5000, debug=True)