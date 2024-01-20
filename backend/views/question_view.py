from flask import Blueprint, jsonify, request
from models import Question, db, User
from sqlalchemy.orm import joinedload
from flask_jwt_extended import  jwt_required, get_jwt_identity

question_bp = Blueprint('question_bp', __name__)


# Fetch all questions
@question_bp.route('/questions', methods=['GET'])
def get_all_questions():
    questions =  Question.query.all()
 
    result = []
    for question in questions:
        answers = question.answers

        result.append({
            'id': question.id,
            'title': question.title,
            'body': question.body,
            'tags': question.tags,
            'views': question.views,
            'user': {
                'id': question.user.id if question.user else None,
                'username': question.user.username if question.user else None
            },
            'answers': [{'id': answer.id, 'body': answer.body} for answer in answers]
        })
    return jsonify(result), 200

# Fetch a single Question
@question_bp.route('/questions/<int:question_id>', methods=['GET'])
def get_question(question_id):
    question = Question.query.get(question_id)
    result = []

    if question:
        result.append({'id': question.id, 'title': question.title, 
                'body': question.body,
                'tags': question.tags, 
                'views': question.views, 
                'user': {'id': question.user.id, 'username': question.user.username },
                'answers': [{'id': answer.id, 'body': answer.body} for answer in question.answers]

                       })
        return jsonify(result)
    return jsonify({"error": "Question not found!"}), 404


# Create Question
@question_bp.route('/questions', methods=['POST'])
@jwt_required()
def create_question():
    data = request.get_json()
    print("DATA ", data)
    new_question = Question(title=data['title'], body=data['body'],tags=data['tags'], user_id=get_jwt_identity())
    db.session.add(new_question)
    db.session.commit()
    return jsonify({"success": "Question created successfully!"}), 201


# Update Question
@question_bp.route('/question/<int:question_id>', methods=['PUT'])
@jwt_required()
def update_question(question_id):
    question = Question.query.get(question_id)
    if question:
        
        if question.user_id == get_jwt_identity():
            data = request.form
            question.title = data.get('title', question.title)
            question.body = data.get('body', question.body)
            db.session.commit()
            return 'Question updated successfully!', 200
    
        else:
            return jsonify({"error": "You are trying to delete someone's question!"}), 404

    return jsonify({"error": "Question not found!"}), 404


# Delete Question
@question_bp.route('/question/<int:question_id>', methods=['DELETE'])
@jwt_required()
def delete_question(question_id):
    question = Question.query.get(question_id)
    if question:
        if question.user_id == get_jwt_identity():
            db.session.delete(question)
            db.session.commit()
            return jsonify({"success": "Deleted successfully!"}), 200
        else:
            return jsonify({"error": "You are trying to delete someone's question!"}), 404

    return jsonify({"error": "Question you are trying to delete is not found!"}), 404


# Get Questions by User ID
@question_bp.route('/get_questions_by_user', methods=['GET'])
@jwt_required()
def get_questions_by_user():
    questions = Question.query.filter_by(user_id=get_jwt_identity()).all()
    
    if questions:
        result = []
        for question in questions:
            result.append({
                'id': question.id,
                'title': question.title,
                'body': question.body,
                'tags': question.tags,
                'views': question.views,
                'user_id': question.user_id
            })
        return {'questions': result}
    return jsonify({"error": "No questions found for the given user ID!"}), 404

# Fetch all answers related to a question
@question_bp.route('/question_answers/<int:question_id>')
def get_question_answers(question_id):
    question = Question.query.get_or_404(question_id)
    
    # Question.query.options(joinedload('user')).get_or_404(question_id)
    answers = question.answers

    # Preparing JSON response
    question_data = {
        'id': question.id,
        'title': question.title,
        'body': question.body,
        'tags': question.tags,
        'views': question.views,
         'user': {
            'id': question.user.id if question.user else None,
            'username': question.user.username if question.user else None
        },
        'answers': [{'id': answer.id, 'body': answer.body} for answer in answers]
    }
    # print("cccccxx ", question.user.id)

    return jsonify(question_data)


# Update views
@question_bp.route('/update_views/<int:question_id>', methods=['PUT'])
def update_views(question_id):
    question = Question.query.get(question_id)

    if question:
        question.views += 1

        db.session.commit()
        return jsonify({'success': 'Views updated successfully!'})
    
    return jsonify({'error': 'Question not found!'})
