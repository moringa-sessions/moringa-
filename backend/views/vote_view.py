from flask import Blueprint, request
from models import Vote
from models import db, Vote

vote_bp = Blueprint('vote_bp', __name__)

@vote_bp.route('/create_vote', methods=['POST'])
def create_vote():
    data = request.form
    new_vote = Vote(
        value=data['value'],
        type=data['type'],
        user_id=data['user_id'],
        answer_id=data.get('answer_id'),
        question_id=data.get('question_id')
    )
    db.session.add(new_vote)
    db.session.commit()
    return 'Vote created successfully!', 201

# Retrieve Vote
@vote_bp.route('/get_vote/<int:vote_id>', methods=['GET'])
def get_vote(vote_id):
    vote = Vote.query.get(vote_id)
    if vote:
        return {
            'id': vote.id,
            'value': vote.value,
            'type': vote.type,
            'user_id': vote.user_id,
            'answer_id': vote.answer_id,
            'question_id': vote.question_id
        }
    return 'Vote not found', 404

# Update Vote
@vote_bp.route('/update_vote/<int:vote_id>', methods=['PUT'])
def update_vote(vote_id):
    vote = Vote.query.get(vote_id)
    if vote:
        data = request.form
        vote.value = data.get('value', vote.value)
        vote.type = data.get('type', vote.type)
        db.session.commit()
        return 'Vote updated successfully!', 200
    return 'Vote not found', 404

# Delete Vote
@vote_bp.route('/delete_vote/<int:vote_id>', methods=['DELETE'])
def delete_vote(vote_id):
    vote = Vote.query.get(vote_id)
    if vote:
        db.session.delete(vote)
        db.session.commit()
        return 'Vote deleted successfully!', 200
    return 'Vote not found', 404