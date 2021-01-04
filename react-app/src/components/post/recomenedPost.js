import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const RecomendedPost = ({ rec }) => {
    const overlay = useRef(null);
    const history = useHistory();
    return (
        <div
            className="one-recomended-post"
            onMouseOver={(e) => (overlay.current.style.display = "flex")}
            onMouseLeave={(e) => (overlay.current.style.display = "none")}
            onClick={(e) => history.push(`/posts/${rec.id}`)}
        >
            <div className="rec-img-holder">
                <img alt="Recommended Post " src={rec.photoUrl} />
            </div>
            <div ref={overlay} className="rec-overlay">
                <div className="overlay-likes">
                    <i className="far fa-heart"></i>
                    {rec.numLikes}
                </div>
                <div className="overlay-comments">
                    <i className="far fa-comment"></i>
                    {rec.numComments}
                </div>
            </div>
        </div>
    );
};

export default RecomendedPost;
