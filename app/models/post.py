from .db import db
from sqlalchemy.orm import relationship


class Post(db.Model):
    __tablename__ = "posts"
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(100), nullable=True)
    photoUrl = db.Column(db.String(100), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))

    comments = db.relationship('Comment', back_populates="post")

    def to_dict(self):
        return {
            "id": self.id,
            "description": self.description,
            "photoUrl": self.photoUrl,
            "userId": self.userId
        }
