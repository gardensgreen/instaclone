import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import "./post.css"

const Post = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);
    const [img, setImg] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [description, setDescription] = useState('');
    const [users, setUsers] = useState({});
    const [poster, setPoster] = useState(0);
    const [newComent, setNewComment] = useState("");
    useEffect(() =>{
        (async () => {
            let res = await fetch(`/api/posts/${postId}`);
            res = await res.json();
            setUsers(res.users);
            setImg(res.post.photoUrl);
            setComments([{userId:res.post.userId,comment:res.post.description},...res.post.comments]);
            setDescription(res.post.description);
            setPoster(res.post.userId);
            setLoaded(true);
        })()
    }, [postId]);

    const submitComent = async (e) => {
        e.preventDefault();
        if (newComent.length === 0) return;
        let res = await fetch(`/api/posts/${postId}/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ comment:newComent }),
        });
        res = await res.json();
        setComments([{userId:res.userId,comment:res.description},...res.comments]);
        setNewComment("");
    }


    return loaded && (
        <div className="post-wraper">
            <div className="post-holder">
                <div className="post-img-holder">
                    <img alt={description} src={img}/>
                </div>
                <div className="post-info-holder">
                    <div className="poster-info">
                        <img alt="user avatar" src={users[poster].avatarUrl}/>
                        <div>{users[poster].username}</div>
                    </div>
                    <div className="post-comments-holder">
                        {comments.map(c=><div key={c.id} className="post-comment">
                            <img alt="user avatar" src={users[c.userId].avatarUrl}/>
                            <div className="post-comment-text"><b>{users[c.userId].username}</b> {c.comment}</div>
                        </div>)}
                    </div>
                    <div className="comment-submit">
                        <form onSubmit={submitComent}>
                            <textarea value={newComent} onChange={e => setNewComment(e.target.value)} placeholder="New Comment"/>
                            <input value="Post Comment" type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
