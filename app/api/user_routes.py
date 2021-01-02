from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Post
from ..models.db import db
import boto3
import os
from werkzeug.utils import secure_filename

user_routes = Blueprint('users', __name__)

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


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


# @user_routes.route('/<int:id>')
# @login_required
# def user(id):
#     user = User.query.get(id)
#     return user.to_dict()

@user_routes.route("/<username>")
@login_required
def userParam(username):
    user = User.query.filter_by(username = username).first()
    userProfile = user.to_profile_dict()
    return userProfile


@user_routes.route('/<int:id>', methods=['PATCH'])
@login_required
def edit_profile(id):
    user = User.query.get(id)
    user.username = request.form['username']
    user.email = request.form['email']
    user.bio = request.form['bio']
    if "file" not in request.files:
        return "No file key in request.files"
    file = request.files['file']
    description = request.form.get('description')
    if file:
        photo_url = upload_file_to_s3(file, current_user.get_id(), BUCKET_NAME)
        try:
            user.avatarUrl = photo_url
            db.session.commit()
            return jsonify(user.to_dict())
        except AssertionError as message:
            return jsonify({"error": str(message)}), 400
    else:
        print("Something went wrong")

    db.session.commit()


@user_routes.route("/<int:id>/posts")
def get_user_posts(id):
    posts = Post.query.filter_by(userId=id).all()
    return jsonify({"Posts": [post.to_dict() for post in posts]})


@user_routes.route("/<int:id>/follower", methods=["POST"])
@login_required
def addFollower(id):
    # Create a Follow Relationship
    # POST /api/users/(id of person to follow)/follower
    # BODY JSON {followerId: (id of follower to ADD)}
    user = User.query.get(id)
    followerId = request.json["followerId"]
    if current_user.id != followerId:
        return jsonify({"error": "Not authorized"})
    follower = User.query.get(followerId)
    user.followers.append(follower)
    db.session.commit()
    return jsonify({"added": True})


@user_routes.route("/<int:id>/follower", methods=["DELETE"])
@login_required
def deleteFollower(id):
    # Delete a Follow Relationship
    # DELETE /api/users/(id of person to follow)/follower
    # BODY JSON {followerId: (id of follower to REMOVE)}
    followerId = request.json["followerId"]
    if current_user.id != followerId:
        return jsonify({"error": "Not authorized"})
    # if current_user.get_id() != followerId and current_user.get_id() != id:
    #     return jsonify({"error": "Not authorized"})
    follower = User.query.get(followerId)
    user = User.query.get(id)
    user.followers.remove(follower)
    db.session.commit()
    return jsonify({"removed": True})
