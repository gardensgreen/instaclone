import React from "react";

const Post = ({post, user, users}) => {
    return (
        <div className="one-post-holder">
            <div className="post-user-info">
                <img src={user.avatarUrl} alt={`profile pic of ${user.username}`} className="post-profile-pic"/>
                <div className="post-author-name">{user.username}</div>
            </div>
            <div className="post-img-holder">
                <img src={post.photoUrl} />
            </div>
            <div className="post-bottom-info-holder">
                <div className="post-likes">{post.numLikes} likes</div>
                <div className="post-text"><b>{user.username}</b> {post.description}</div>
                <div className="post-comment-holder">
                    {post.comments.map(c => <div className="post-comment"><b>{users[c.userId].username}</b> {c.comment}</div>)}
                </div>
            </div>

        </div>
    );
}

export default Post;
