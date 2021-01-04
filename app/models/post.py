from .db import db
from .like import Like
from sqlalchemy.orm import relationship
from datetime import datetime


class Post(db.Model):
    __tablename__ = "posts"
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(100), nullable=True)
    photoUrl = db.Column(db.String(200), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    timestamp = db.Column(db.DateTime, default=datetime.now())

    user = relationship("User")

    comments = relationship('Comment')
    likingUsers = relationship(
        "User", secondary=Like, back_populates="likedPosts")
    # primaryjoin=id==Like.c.postId, secondaryjoin=id==Like.c.userId

    def to_simple_dict(self):
        return {
            "id": self.id,
            "photoUrl": self.photoUrl,
            "numLikes": len(self.likingUsers),
            "numComments": len(self.comments)
        }

    def to_dict(self):
        return {
            "id": self.id,
            "description": self.description,
            "photoUrl": self.photoUrl,
            "userId": self.userId,
            "comments": [comment.to_dict() for comment in self.comments],
            "numLikes": len(self.likingUsers),
            "likers": [l.id for l in self.likingUsers]
        }
