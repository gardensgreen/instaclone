
from app.models import db, Post
from datetime import datetime
import random
# Adds a demo user, you can add other users here if you want


def seed_posts():
    seed_post1 = Post(description="dummy description",
                      photoUrl=f"https://images.unsplash.com/photo-1608344501245-a5dcedbdeb4f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                      userId=3,
                      )
    seed_post2 = Post(description="dummy description",
                      photoUrl=f"https://images.unsplash.com/photo-1607095729999-2abf50ff676b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                      userId=3,
                      )
    seed_post3 = Post(description="dummy description",
                      photoUrl=f"https://images.unsplash.com/photo-1608409184772-6ea9ea64195d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                      userId=3,
                      )
    seed_post4 = Post(description="dummy description",
                      photoUrl=f"https://images.unsplash.com/photo-1608370617870-dc99b1b44a31?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                      userId=4,
                      )
    seed_post5 = Post(description="dummy description",
                      photoUrl=f"https://images.unsplash.com/photo-1608085022020-3e5ee70c4e42?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                      userId=4,
                      )
    seed_post6 = Post(description="dummy description",
                      photoUrl=f"https://images.unsplash.com/photo-1609150235801-1eea4e4f0b33?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                      userId=4,
                      )
    seed_post7 = Post(description="dummy description",
                      photoUrl=f"https://images.unsplash.com/photo-1607207807222-1f71e75a26d6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                      userId=5,
                      )
    seed_post8 = Post(description="dummy description",
                      photoUrl=f"https://images.unsplash.com/photo-1607468300733-51b9f8692337?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                      userId=5,
                      )
    seed_post9 = Post(description="dummy description",
                      photoUrl=f"https://images.unsplash.com/photo-1608373131006-e0f19ce14a44?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                      userId=5,
                      )
    seed_post10 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1607852410216-7937847d73e1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=6,
                       )
    seed_post11 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1607096077240-57fdd86b955e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=6,
                       )
    seed_post12 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1608949621308-c54d112c808a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=6,
                       )
    seed_post13 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=7,
                       )
    seed_post14 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1608039439183-c0e8c56fffdd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=7,
                       )
    seed_post15 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1607835017779-c176b83b2dd8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=7,
                       )
    seed_post16 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1607800406408-6bb0fe903c9b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=8,
                       )
    seed_post17 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1609195587572-1353004d333e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=8,
                       )
    seed_post18 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1608496099924-f863c6f1eaf3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=8,
                       )
    seed_post19 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1608415293454-a368a14d6f50?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=9,
                       )
    seed_post20 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1609609018625-afef0a259159?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=9,
                       )
    seed_post21 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1608684613900-ed93de878a06?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=9,
                       )
    seed_post22 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1608228421329-b96535c8729e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=9,
                       )
    seed_post23 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1609023537806-5cf023ecb0ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=10,
                       )
    seed_post24 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1607604971893-e4a9535a8ca2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=10,
                       )
    seed_post25 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1607238892629-6f8bda29a526?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=2,
                       )
    seed_post26 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1607088829641-c82e5a47b2c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=2,
                       )
    seed_post27 = Post(description="dummy description",
                       photoUrl=f"https://images.unsplash.com/photo-1609377232832-546f01970dea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920",
                       userId=2,
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
