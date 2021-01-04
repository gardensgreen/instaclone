import { useEffect } from "react";

const NumFollowing = (props) => {
    useEffect(() => {}, [props.following]);

    return props.following;
};

export default NumFollowing;
