from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(70), unique=True, nullable=False)
    phone = db.Column(db.String(14), default="0123456789")
    password = db.Column(db.String(150), unique=False, nullable=False)
  
#   For Logout JWT Block List
class TokenBlocklist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jti =  db.Column(db.String(100),nullable=True)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    body = db.Column(db.Text, nullable=False)
    views = db.Column(db.Integer, default=0)
    body = db.Column(db.Text, nullable=False)
    tags = db.Column(db.Text, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    user = db.relationship("User", backref=db.backref('questions', lazy=True))
    answers = db.relationship("Answer", backref=db.backref('question', lazy=True), cascade="all, delete")


class Answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.Text, nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey("question.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    user = db.relationship("User", backref=db.backref('answer', lazy=True), cascade="all, delete-orphan", single_parent=True)
    votes = db.relationship("Vote", backref=db.backref('answer', lazy=True), cascade="all, delete-orphan")


class Vote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(20), nullable=False)
    answer_id = db.Column(db.Integer, db.ForeignKey("answer.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    user = db.relationship("User", backref=db.backref('votes', lazy=True), cascade="all, delete")

