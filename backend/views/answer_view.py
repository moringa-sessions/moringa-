
from flask import Blueprint, jsonify, request
from models import Answer, db
from sqlalchemy.orm import joinedload

answer_bp = Blueprint('answer_bp', __name__)


# Create an answer
@answer_bp.route('/answers', methods=['POST'])
def create_answer():
    # data = request.json
    data = request.json 

    new_answer = Answer(body=data['body'], question_id=data['question_id'], user_id=1)

    db.session.add(new_answer)
    db.session.commit()

    return jsonify({'message': 'Answer created successfully'})



# Get all answers for a specific question
@answer_bp.route('/answers/<int:question_id>', methods=['GET'])
def get_answers_for_question(question_id):
    answers = Answer.query.filter_by(question_id=question_id).all()

    if not answers:
        return jsonify({'message': 'No answers found for the specified question'})

    answer_list = [{'id': answer.id, 'body': answer.body, 'user_id': answer.user_id} for answer in answers]

    return jsonify({'answers': answer_list})


# Update an answer
@answer_bp.route('/answers/<int:answer_id>', methods=['PUT'])
def update_answer(answer_id):
    answer = Answer.query.get_or_404(answer_id)
    data = request.form

    answer.body = data['body']

    db.session.commit()

    return jsonify({'message': 'Answer updated successfully'})

# Delete an answer
@answer_bp.route('/answers/<int:answer_id>', methods=['DELETE'])
def delete_answer(answer_id):
    answer = Answer.query.get_or_404(answer_id)

    db.session.delete(answer)
    db.session.commit()

    return jsonify({'message': 'Answer deleted successfully'})
