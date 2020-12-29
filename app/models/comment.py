from .db import db

class Comment(db.Model):
    __tablename__ = "comments"
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(500))
    postId = db.Column(db.Integer, db.ForeignKey('posts.id'))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))

    def to_dict(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "postId": self.postId,
            "userId": self.userId
        }
