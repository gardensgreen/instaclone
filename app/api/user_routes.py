from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User
from ..models.db import db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route("/<int:id>/follower", methods=["POST"])
@login_required
def addFollower(id):
    # Create a Follow Relationship
    # POST /api/users/(id of person to follow)/follower
    # BODY JSON {followerId: (id of follower to ADD)}
    user = User.query.get(id)
    followerId = request.json["followerId"]
    if current_user.get_id() != followerId:
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
    if current_user.get_id() != followerId and current_user.get_id() != id:
        return jsonify({"error": "Not authorized"})
    follower = User.query.get(followerId)
    user = User.query.get(id)
    user.followers.remove(follower)
    db.session.commit()
    return jsonify({"removed": True})
