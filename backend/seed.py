from app import app, db, User, Question, Answer, Vote

def seed_data():
    with app.app_context():

        user1 = User(username='user1', email='user1@example.com', password='password1')
        user2 = User(username='user2', email='user2@example.com', password='password2')

        question1 = Question(title='Question 1', body='This is the body of Question 1', views=5, tags='tag1, tag2', user=user1)
        question2 = Question(title='Question 2', body='This is the body of Question 2', views=10, tags='tag3, tag4', user=user2)

        answer1 = Answer(body='Answer to Question 1', question=question1, user=user2)
        answer2 = Answer(body='Answer to Question 2', question=question2, user=user1)

        vote1 = Vote(type='upvote', answer=answer1, user=user1)
        vote2 = Vote(type='downvote', answer=answer2, user=user2)

        db.session.add_all([user1, user2, question1, question2, answer1, answer2, vote1, vote2])
        db.session.commit()

if __name__ == '__main__':
    print("Started Seeding")
    seed_data()
    print("Seeding Completed")
