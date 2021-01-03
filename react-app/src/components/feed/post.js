import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";


const Post = ({ post, user, users, myUserId }) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(post.comments);
    const [numLikes, setNumLikes] = useState(post.numLikes);
    const [likeUsers, setLikeUsers] = useState(post.likers);
    const history = useHistory();
    const genCommentsJSX = () => {
        return comments.length <= 3 ? (
            comments.map((c) => (
                <div key={`${post.id}-${c.id}`} className="feed-post-comment">
                    <NavLink to={`users/${users[c.userId].username}`}><b>{users[c.userId].username}</b></NavLink> {c.comment}
                </div>
            ))
        ) : (
            <>
                <div className="feed-post-link">
                    <NavLink
                        className="see-more-comments"
                        to={`/posts/${post.id}`}
                    >
                        {`See ${comments.length - 1} more comments`}{" "}
                    </NavLink>
                </div>
                <div className="feed-post-comment">
                    <NavLink to={`/users/${users[comments[comments.length - 2].userId].username}`}>
                    <b>
                        {users[comments[comments.length - 2].userId].username}
                    </b>
                    </NavLink>
                    {" "+comments[comments.length - 2].comment}
                </div>
                <div className="feed-post-comment">
                    <NavLink to={`/users/${users[comments[comments.length - 1].userId].username}`}>
                    <b>
                        {users[comments[comments.length - 1].userId].username}
                    </b>
                    </NavLink>
                    {" "+comments[comments.length - 1].comment}
                </div>
            </>
        );
    };

    const submitComment = async (e) => {
        e.preventDefault();
        if (comment.length === 0) return;
        let res = await fetch(`/api/posts/${post.id}/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ comment }),
        });
        res = await res.json();
        setComments(res.comments);
        setComment("");
    };
    const like = async (e) => {
        e.preventDefault();
        let res = await fetch(`/api/posts/${post.id}/likes`, {
            method: "POST",
        });
        res = await res.json();
        setNumLikes(res.numLikes);
        setLikeUsers(res.likers);
    };
    return (
        <div className="one-post-holder">
            <div className="post-user-info">
                <img
                    src={user.avatarUrl}
                    alt={`profile pic of ${user.username}`}
                    className="post-profile-pic"
                />
                <div className="post-author-name"><NavLink to={`/users/${user.username}`}>{user.username}</NavLink></div>
            </div>
            <div className="feed-post-img-holder">
                <img alt={post.description} src={post.photoUrl} onClick={e => history.push(`/posts/${post.id}`)}/>
            </div>
            <div className="post-bottom-info-holder">
                <i
                    onClick={like}
                    className={
                        likeUsers.includes(myUserId)
                            ? "fas fa-heart fa-lg"
                            : "far fa-heart fa-lg"
                    }
                ></i>
                <div className="post-likes">
                    {numLikes} {numLikes !== 1 ? "likes" : "like"}{" "}
                </div>
                <div className="post-text">
                    <NavLink to={`/users/${user.username}`}><b>{user.username}</b></NavLink> {post.description}
                </div>
                <div className="post-comment-holder">{genCommentsJSX()}</div>
                <form className="comment-form" onSubmit={submitComment}>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment"
                        className="post-comment-field"
                    />
                    <input
                        className="comment-submit"
                        value="Comment"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default Post;
