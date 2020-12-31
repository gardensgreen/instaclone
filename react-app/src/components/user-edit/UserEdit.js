import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../../services/auth';
import './UserEdit.css';

export default function UserEdit() {
	const [myUserId, setMyUserId] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [username, setUsername] = useState(null);
	const [email, setEmail] = useState(null);
	const [bio, setBio] = useState('');
	const [avatarUrl, setAvatarUrl] = useState(null);
	const [avatarImage, setAvatarImage] = useState(null);
	const [avatarImagePreview, setAvatarImagePreview] = useState(null);
	const history = useHistory();
	const uploadInput = useRef(null);

	useEffect(() => {
		const getUserInfo = async () => {
			setMyUserId((await authenticate()).id);
			if (myUserId) {
				let res = await fetch(`/api/users/${myUserId}`);
				res = await res.json();
				setUsername(res.username);
				setEmail(res.email);
				res.bio ? setBio(res.bio) : setBio('');
				setAvatarUrl(res.avatarUrl);
				setLoaded(true);
			}
		};
		getUserInfo();
	}, [myUserId]);

	const handleSubmit = async e => {
		//Handle form submit
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', avatarImage);
		formData.append('username', username);
		formData.append('email', email);
		formData.append('bio', bio);
		try {
			let res = await fetch(`/api/users/${myUserId}`, {
				method: 'PATCH',
				body: formData,
			});
			if (!res.ok) throw res;
			return history.push(`/users/${myUserId}`);
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
			? setAvatarImagePreview(URL.createObjectURL(e.target.files[0]))
			: setAvatarImagePreview(null);
		return validity.valid && setAvatarImage(file);
	};

	const handleUploadImage = e => {
		e.preventDefault();
		uploadInput.current.click();
	};
	const avatarImg = () => {
		if (avatarImagePreview) {
			return (
				<div onClick={handleUploadImage}>
					<img id='avatarImage' src={avatarImagePreview} alt='Avatar' />
				</div>
			);
		}
		return avatarUrl ? (
			<img id='avatarImage' src={avatarUrl} alt='Avatar' />
		) : (
			<img id='avatarImage' src={require('./default-avatar.jpg')} alt='Avatar' />
		);
	};

	return (
		loaded && (
			<div>
				<form onSubmit={handleSubmit}>
					<div>
						<label>Profile Photo</label>
						<div id='avatarImageRing'>{avatarImg()}</div>
						<div onClick={handleUploadImage}>
							<p id='imgUploadLink'>Change Your Profile Photo</p>
						</div>
						<input
							ref={uploadInput}
							style={{ display: 'none' }}
							type='file'
							name='file'
							onChange={updateFile}
						/>
					</div>
					<div>
						<label>Username</label>
						<input
							value={username}
							name='username'
							placeholder='Username'
							onChange={e => setUsername(e.target.value)}
						/>
					</div>
					<div>
						<label>Email</label>
						<input
							value={email}
							name='email'
							placeholder='Email'
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label>Bio</label>
						<textarea
							id='bioInput'
							value={bio}
							name='bio'
							placeholder='Bio'
							onChange={e => setBio(e.target.value)}
						/>
					</div>
					<div>
						<input id='userEditSubmitButton' type='submit' value='Submit' />
					</div>
				</form>
			</div>
		)
	);
}
