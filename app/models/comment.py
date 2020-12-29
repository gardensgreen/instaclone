from .db import db
from sqlalchemy.orm import relationship


class Comment(db.Model):
  __tablename__ = "comments"
  id = db.Column(db.Integer, primary_key=True)
  comment = db.Column(db.String(255), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  postId = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
  post = db.relationship('Post', back_populates='comments')

  def to_dict(self):
    return {"id": self.id,
            "comment": self.comment,
            "postId": self.postId,
            "userId": self.userId,
            "post": self.post
            }
