import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';

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
			console.log('works!!');
			return <Redirect to='/' />;
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
		e.target.files[0]
			? setImagePreview(URL.createObjectURL(e.target.files[0]))
			: setImagePreview(null);
		return validity.valid && setImage(file);
	};

	const handleUploadImage = e => uploadInput.current.click();

	const uploadImage = () => {
		if (!imagePreview) {
			return (
				<>
					<h1 id='imgUploadTitle'>Upload an Image</h1>
					<div id='imgPlaceholder'></div>
					<div onClick={handleUploadImage}>
						<button id='imgUploadButton'>Upload</button>
					</div>
				</>
			);
		} else {
			return (
				<>
					<div id='imgContainer'>
						<img id='postImage' src={imagePreview} />
					</div>
					<div onClick={handleUploadImage}>
						<button id='imgUploadButton' style={{ width: '120px' }}>
							Change Image
						</button>
					</div>
				</>
			);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} id='newPostForm'>
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
