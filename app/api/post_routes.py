import boto3
import os
from ..models.post import Post
from ..models.comment import Comment
from ..models.user import User
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from werkzeug.utils import secure_filename
from ..models.db import db
# from app.models import Post

post_routes = Blueprint('posts', __name__)
s3 = boto3.client('s3',
                  aws_access_key_id=os.environ.get('AWS_ACCESS_KEY'),
                  aws_secret_access_key=os.environ.get('AWS_SECRET_KEY')
                  )
BUCKET_NAME = 'insta-group-project'


@post_routes.route('/', methods=["POST"])
@login_required
def upload_post():
    img = request.files['file']
    # print(dir(request["form"]))
    print((request.form.get('description')))
    if img:
        filename = secure_filename(img.filename)
        img.save(filename)
        response = s3.upload_file(
            Bucket=BUCKET_NAME,
            Filename=filename,
            Key=filename,
            ExtraArgs={'ACL': 'public-read'}
        )
        os.remove(filename)
        post = Post(description=request.form.get('description'),
                    photoUrl=f"https://s3.amazonaws.com/insta-group-project/{filename}",
                    userId=current_user.get_id())
        db.session.add(post)
        db.session.commit()
        return jsonify(post.to_dict())

@post_routes.route('/<int:id>/likes', methods=["POST"])
@login_required
def likePost(id):
    post = Post.query.get(id)
    user = User.query.get(current_user.get_id())
    likingUserIds = {u.id:True for u in post.likingUsers }
    if user.id not in likingUserIds:
        post.likingUsers.append(user)
        db.session.commit()
        return jsonify({"addedLike":True})
    else:
        post.likingUsers.remove(user)
        db.session.commit()
        return jsonify({"removedLike":True})


@post_routes.route('/<int:id>/comments', methods=["POST"])
@login_required
def comment(id):
    comment = Comment(userId=current_user.get_id(), comment=request.json["comment"], postId=id)
    db.session.add(comment)
    post = Post.query.get(id)
    post.comments.append(comment)
    db.session.commit()
    return jsonify(post.to_dict())

@post_routes.route('/<int:postId>/comments/<int:commentId>', methods=["DELETE"])
def deleteComment(postId, commentId):
    comment = Comment.query.get(commentId)
    post = Post.query.get(postId)
    post.comments.remove(comment)
    db.session.commit()
    return jsonify(post.to_dict())

@post_routes.route('/<int:postId>/comments/<int:commentId>', methods=["PATCH"])
def editComment(postId, commentId):
    comment = Comment.query.get(commentId)
    comment.comment = request.json["comment"]
    db.session.commit()
    return jsonify(comment.to_dict())
