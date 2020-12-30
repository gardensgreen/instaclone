import React, { useState, useRef } from 'react';
import { authenticate } from '../../services/auth';
import './UserEdit.css';
export default function UserEdit() {
	const [myUserId, setMyUserId] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [username, setUsername] = useState(null);
	const [email, setEmail] = useState(null);
	const [bio, setBio] = useState(null);
	const [avatarUrl, setAvatarUrl] = useState(null);
	const [avatarImage, setAvatarImage] = useState(null);
	const [avatarImagePreview, setAvatarImagePreview] = useState(null);
	const uploadInput = useRef(null);

	const getUserInfo = async () => {
		setMyUserId((await authenticate()).id);
		if (myUserId) {
			let res = await fetch(`/api/users/${myUserId}`);
			res = await res.json();
			setUsername(res.username);
			setEmail(res.email);
			setBio(res.bio);
			setAvatarUrl(res.avatarUrl);
			setLoaded(true);
		}
	};

	const handleSubmit = async e => {
		//Handle form submit
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', avatarImage);
		formData.append('username', username);
		formData.append('email', email);
		formData.append('bio', bio);

		try {
			let res = await fetch(`/api/posts/`, {
				method: 'PATCH',
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
		setAvatarImagePreview(URL.createObjectURL(e.target.files[0]));
		return validity.valid && setAvatarImage(file);
	};

	getUserInfo();

	const handleUploadImage = e => uploadInput.current.click();

	const avatarImg = () => {
		if (avatarImagePreview) {
			return (
				<div onClick={handleUploadImage}>
					<img id='postImage' src={avatarImagePreview} />
					<h2 id='imgUploadPrompt'>Change Your Avatar</h2>
				</div>
			);
		}
		return avatarUrl ? (
			<img id='avatarImage' src={avatarUrl} />
		) : (
			<img id='avatarImage' src={require('./default-avatar.jpg')} />
		);
	};

	return (
		loaded && (
			<div>
				<form>
					<div>
						<label>Profile Photo</label>
						<div id='avatarImageRing'>{avatarImg()}</div>
						<div onClick={handleUploadImage}>
							<h2 id='imgUploadPrompt'>Change Your Avatar</h2>
						</div>
						<input
							ref={uploadInput}
							style={{ display: 'none' }}
							type='file'
							name='file'
							onChange={updateFile}
							required
						/>
					</div>
					<div>
						<label>Username</label>
						<input value={username} />
					</div>
					<div>
						<label>Email</label>
						<input value={email} />
					</div>
					<div>
						<label>Bio</label>
						<textarea value={bio} />
					</div>
				</form>
			</div>
		)
	);
}
