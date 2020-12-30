import React, {useState} from "react";

const Post = ({post, user, users}) => {

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(post.comments);
    const [numLikes, setNumLikes] = useState(post.numLikes);

    const submitComment = async (e) => {
        e.preventDefault();
        if(comment.length == 0) return;
        let res = await fetch(`/api/posts/${post.id}/comments`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({comment})
        })
        res = await res.json();
        setComments(res.comments);
        setComment("");
    }
    const like = async (e) => {
        e.preventDefault();
        let res = await fetch(`/api/posts/${post.id}/likes`, {
            method: "POST",
        })
        res = await res.json();
        setNumLikes(res.numLikes);

    }
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
                <div className="post-likes">{numLikes} likes <i onClick={like} class="far fa-heart"></i>
                </div>
                <div className="post-text"><b>{user.username}</b> {post.description}</div>
                <div className="post-comment-holder">
                    {comments.map(c => <div className="post-comment"><b>{users[c.userId].username}</b> {c.comment}</div>)}
                </div>
                <form onSubmit={submitComment}>
                    <textarea value={comment} onChange={e => setComment(e.target.value)}placeholder="Add a comment" className="post-comment-field"/>
                    <input value="Comment" type="submit"/>
                </form>
            </div>

        </div>
    );
}

export default Post;
