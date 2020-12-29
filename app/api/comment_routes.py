from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from ..models.post import Post
from ..models.comment import Comment
from ..models.db import db

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/', methods=["POST"])
def new_comment():
    if comment:
      comment = comment(comment=request.form['comment'],
                        postId=request.form['postId'],
                        userId=current_user.get_id()
                        )
    db.session.add(comment)
    db.session.commit()
    return True
