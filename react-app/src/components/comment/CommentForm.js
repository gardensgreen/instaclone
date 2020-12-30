import React, { useState } from 'react';

export default function CommentForm({ postId }) {
	const [comment, setComment] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		let body = { comment };
		console.log(body);
		let res = await fetch(`/api/posts/${postId}/comments`, {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' },
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>New Comment</label>
					<input
						type='text'
						value={comment}
						name='comment'
						onChange={e => {
							setComment(e.target.value);
						}}
					/>
				</div>
				<div>
					<input type='submit' value='Submit' />
				</div>
			</form>
		</div>
	);
}
