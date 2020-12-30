import boto3
import os
from ..models.post import Post
from ..models.user import User
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


def spaceRemover(filename):
  list_filename = filename.split(' ')
  return '+'.join(list_filename)

# AWS s3 Helper


def upload_file_to_s3(file, userId, bucket_name, acl="public-read"):
    s3.upload_fileobj(
        file,
        bucket_name,
        file.filename,
        ExtraArgs={
            "ACL": acl,
            "ContentType": file.content_type
        }
    )

    return "{}{}".format('https://insta-group-project.s3.amazonaws.com/', spaceRemover(file.filename))

# Create Post
@post_routes.route('/', methods=["POST"])
@login_required
def create_post():
    if "file" not in request.files:
        return "No file key in request.files"

    file = request.files['file']
    description = request.form.get('description')

    if file:
        photo_url = upload_file_to_s3(file, current_user.get_id(), BUCKET_NAME)
        try:
            post = Post(description=description,
                        photoUrl=photo_url,
                        userId=current_user.get_id())

            db.session.add(post)
            db.session.commit()
            return jsonify(post.to_dict())
        except AssertionError as message:
            return jsonify({"error": str(message)}), 400
    else:
        print("Something went wrong")


# Read Post
@post_routes.route('/<int:id>', methods=['GET'])
def read_post(id):
    post = Post.query.get(id)
    return jsonify(post.to_dict())

# Read Posts (Post Feed)
@post_routes.route('/', methods=['GET'])
def read_posts():
    user = User.query.get(current_user.get_id())
    following_ids = [following.id for following in user.following]
    posts = Post.query.filter(Post.userId.in_(following_ids)).all()
    return jsonify({"Posts": [post.to_dict() for post in posts]})


# Update Post
@post_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_post(id):
    post = Post.query.get(id)
    if current_user.get_id() != post.userId:
        return jsonify({ "error": 'Not Authorized'})
    description = request.json['description']
    post.description = description
    db.session.add(post)
    db.session.commit()
    return jsonify(post.to_dict())

# Delete Post
@post_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    post = Post.query.get(id)
    if current_user.get_id() != post.userId:
        return jsonify({ "error": 'Not Authorized'})
    db.session.delete(post)
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
# @login_required
def deleteComment(postId, commentId):
    comment = Comment.query.get(commentId)
    post = Post.query.get(postId)
    post.comments.remove(comment)
    db.session.commit()
    return jsonify(post.to_dict())


@post_routes.route('/<int:postId>/comments/<int:commentId>', methods=["PATCH"])
# @login_required
def editComment(postId, commentId):
    comment = Comment.query.get(commentId)
    comment.comment = request.json["comment"]
    db.session.commit()
    return jsonify(comment.to_dict())
