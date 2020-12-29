from .db import db

Like = db.Table(
    "likes",
    db.Model.metadata,
    db.Column("userId", db.Integer, db.ForeignKey("users.id")),
    db.Column("postId", db.Integer, db.ForeignKey("posts.id"))
)
