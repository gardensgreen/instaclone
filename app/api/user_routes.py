from flask import Blueprint, jsonify, request
from flask_login import login_required
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
def addFollower(id):
    user = User.query.get(id)
    followerId = request.json["followerId"]
    follower = User.query.get(followerId)
    user.followers.append(follower)
    db.session.commit()
    return "done"