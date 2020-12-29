import boto3
import os
from ..models.post import Post
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
