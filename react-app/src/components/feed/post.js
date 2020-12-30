import React from "react";

const Post = ({post}) => {
    return (
        <div className="one-post-holder">
            <div className="post-img-holder">
                <img src={post.photoUrl} />
            </div>
            <div className="post-text">{post.description}</div>
        </div>
    );
}

export default Post;
