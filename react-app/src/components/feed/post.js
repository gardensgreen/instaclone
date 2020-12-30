import React from "react";

const Post = ({post, user}) => {
    return (
        <div className="one-post-holder">
            <div className="post-user-info">
                <div className="post-author-name">{user.username}</div>
                <img src={user.avatarUrl} alt={`profile pic of ${user.username}`} className="post-profile-pic"/>
            </div>
            <div className="post-img-holder">
                <img src={post.photoUrl} />
            </div>
            <div className="post-text">{post.description}</div>
        </div>
    );
}

export default Post;
