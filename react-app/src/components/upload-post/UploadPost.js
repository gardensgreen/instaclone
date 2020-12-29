import React, { useState, useRef } from "react";

export default function () {
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const uploadInput = useRef(null);

    const handleSubmit = async (e) => {
        //Handle form submit
    };

    const updateFile = (e) => {
        e.preventDefault();
        const {
            target: {
                validity,
                files: [file],
            },
        } = e;
        return validity.valid && setImage(file);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Post Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div onClick={(e) => uploadInput.current.click()}>
                    {image ? image.name : "UPLOAD IMAGE"}
                </div>
                <div>
                    <input
                        ref={uploadInput}
                        style={{ display: "none" }}
                        type="file"
                        name="image"
                        onChange={updateFile}
                        required
                    />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}
