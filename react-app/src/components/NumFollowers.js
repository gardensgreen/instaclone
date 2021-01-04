import { useEffect } from "react";

const NumFollowers = (props) => {
    useEffect(() => {}, [props.followers]);

    return props.followers;
};

export default NumFollowers;
