import React, { useState, useRef } from "react";

export default function () {
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const uploadInput = useRef(null);

    const handleSubmit = async (e) => {
        //Handle form submit
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", image);
        formData.append("description", description);

        try {
            let res = await fetch(`/api/posts/`, {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw res;
            return "worked";
        } catch (err) {
            console.error(err);
        }
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
                        name="description"
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
                        name="file"
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
