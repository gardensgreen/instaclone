
from app.models import db, Post
from datetime import datetime

# Adds a demo user, you can add other users here if you want


def seed_posts():
    seed_post1 = Post(description="dummy description",
                      photoUrl="https://source.unsplash.com/random",
                      userId=3,
                      )
    seed_post2 = Post(description="dummy description",
                      photoUrl="https://source.unsplash.com/random",
                      userId=3,
                      )
    seed_post3 = Post(description="dummy description",
                      photoUrl="https://source.unsplash.com/random",
                      userId=3,
                      )
    seed_post4 = Post(description="dummy description",
                      photoUrl="https://source.unsplash.com/random",
                      userId=4,
                      )
    seed_post5 = Post(description="dummy description",
                      photoUrl="https://source.unsplash.com/random",
                      userId=4,
                      )
    seed_post6 = Post(description="dummy description",
                      photoUrl="https://source.unsplash.com/random",
                      userId=4,
                      )
    seed_post7 = Post(description="dummy description",
                      photoUrl="https://source.unsplash.com/random",
                      userId=5,
                      )
    seed_post8 = Post(description="dummy description",
                      photoUrl="https://source.unsplash.com/random",
                      userId=5,
                      )
    seed_post9 = Post(description="dummy description",
                      photoUrl="https://source.unsplash.com/random",
                      userId=5,
                      )
    seed_post10 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=6,
                       )
    seed_post11 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=6,
                       )
    seed_post12 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=6,
                       )
    seed_post13 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=7,
                       )
    seed_post14 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=7,
                       )
    seed_post15 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=7,
                       )
    seed_post16 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=8,
                       )
    seed_post17 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=8,
                       )
    seed_post18 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=8,
                       )
    seed_post19 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=9,
                       )
    seed_post20 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=9,
                       )
    seed_post21 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=9,
                       )
    seed_post22 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=9,
                       )
    seed_post23 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=10,
                       )
    seed_post24 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=10,
                       )
    seed_post25 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=11,
                       )
    seed_post26 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=11,
                       )
    seed_post27 = Post(description="dummy description",
                       photoUrl="https://source.unsplash.com/random",
                       userId=11,
                       )

    db.session.add(seed_post1)
    db.session.add(seed_post2)
    db.session.add(seed_post3)
    db.session.add(seed_post4)
    db.session.add(seed_post5)
    db.session.add(seed_post6)
    db.session.add(seed_post7)
    db.session.add(seed_post8)
    db.session.add(seed_post9)
    db.session.add(seed_post10)
    db.session.add(seed_post11)
    db.session.add(seed_post12)
    db.session.add(seed_post13)
    db.session.add(seed_post14)
    db.session.add(seed_post15)
    db.session.add(seed_post16)
    db.session.add(seed_post17)
    db.session.add(seed_post18)
    db.session.add(seed_post19)
    db.session.add(seed_post20)
    db.session.add(seed_post21)
    db.session.add(seed_post22)
    db.session.add(seed_post23)
    db.session.add(seed_post24)
    db.session.add(seed_post25)
    db.session.add(seed_post26)
    db.session.add(seed_post27)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_posts():
    db.session.execute('TRUNCATE posts;')
    db.session.commit()
