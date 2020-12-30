from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')
    seed_user1 = User(username='Sara', email='sara@aa.io',
                      password='password', avatarUrl='https://uifaces.co/our-content/donated/3799Ffxy.jpeg', bio="dummy bio")
    seed_user2 = User(username='Ian', email='ian@aa.io',
                      password='password', avatarUrl='https://uifaces.co/our-content/donated/bUkmHPKs.jpg', bio="dummy bio")
    seed_user3 = User(username='Bryce', email='bryce@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/men/46.jpg', bio="dummy bio")
    seed_user4 = User(username='Juliet', email='juliet@aa.io',
                      password='password', avatarUrl='https://randomuser.me/api/portraits/women/95.jpg', bio="dummy bio")
    seed_user5 = User(username='Desmond', email='desmond@aa.io',
                      password='password', avatarUrl='https://uifaces.co/our-content/donated/1H_7AxP0.jpg', bio="dummy bio")
    seed_user6 = User(username='Isabella', email='isabella@aa.io',
                      password='password', avatarUrl='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb', bio="dummy bio")
    seed_user7 = User(username='Mark', email='mark@aa.io',
                      password='password', avatarUrl='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f', bio="dummy bio")
    seed_user8 = User(username='Rashmi', email='rashmi@aa.io',
                      password='password', avatarUrl='https://images.unsplash.com/photo-1500080209535-717dd4ebaa6b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=acddea1fd5f8d1eafd1fc300f280176c', bio="dummy bio")
    seed_user9 = User(username='Chris', email='chris@aa.io',
                      password='password', avatarUrl='https://uifaces.co/our-content/donated/noplz47r59v1uxvyg8ku.png', bio="dummy bio")

    # db.session.add(demo)
    db.session.add(seed_user1)
    db.session.add(seed_user2)
    db.session.add(seed_user3)
    db.session.add(seed_user4)
    db.session.add(seed_user5)
    db.session.add(seed_user6)
    db.session.add(seed_user7)
    db.session.add(seed_user8)
    db.session.add(seed_user9)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
