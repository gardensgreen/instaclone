from .db import db

class Comment(db.Model):
    __tablename__ = "comments"
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(500))
    postId = db.Column(db.Integer, db.ForeignKey('posts.id'))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
