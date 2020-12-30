import React, { useState, useRef } from 'react';
import './PostForm.css';

export default function () {
	const [description, setDescription] = useState('');
	const [image, setImage] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);
	const uploadInput = useRef(null);

	const handleSubmit = async e => {
		//Handle form submit
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', image);
		formData.append('description', description);

		try {
			let res = await fetch(`/api/posts/`, {
				method: 'POST',
				body: formData,
			});
			if (!res.ok) throw res;
		} catch (err) {
			console.error(err);
		}
	};

	const updateFile = e => {
		e.preventDefault();
		const {
			target: {
				validity,
				files: [file],
			},
		} = e;
		setImagePreview(URL.createObjectURL(e.target.files[0]));
		return validity.valid && setImage(file);
	};

	const handleUploadImage = e => uploadInput.current.click();

	const uploadImage = () => {
		if (!imagePreview) {
			return (
				<div onClick={handleUploadImage}>
					<div id='imgPlaceholder'></div>
					<h1 id='imgUploadPrompt'>Upload an Image</h1>
				</div>
			);
		} else {
			return (
				<div onClick={handleUploadImage}>
					<div id='imgContainer'>
						<img id='postImage' src={imagePreview} />
					</div>
					<h1 id='imgUploadPrompt'>Change Image</h1>
				</div>
			);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div id='postFormContainer'>
					{/* users avatar */}
					{uploadImage()}
					<div>
						<input
							ref={uploadInput}
							style={{ display: 'none' }}
							type='file'
							name='file'
							onChange={updateFile}
							required
						/>
					</div>
					<div id='imgCaptionContainer'>
						<label id='captionLabel'>Caption</label>
						<textarea
							id='imgCaptionInput'
							value={description}
							name='description'
							placeholder='Add a caption...'
							onChange={e => setDescription(e.target.value)}
						/>
					</div>
					<div>
						<input id='imgPostButton' type='submit' value='Post' />
					</div>
				</div>
			</form>
		</div>
	);
}
