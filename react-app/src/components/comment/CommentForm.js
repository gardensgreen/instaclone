import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function CommentForm(postId) {
	const [comment, setComment] = useState('');

	const postComment = e => {
		e.preventDefault();
		return <h1>This comment {e.value}submitted</h1>;
	};

	return (
		<div>
			<form action='/api/comments/' method='post'>
				<div>
					<label>New Comment</label>
					<input
						type='text'
						value={comment}
						name='comment'
						onChange={e => {
							setComment(e.target.value);
							console.log(comment);
						}}
					/>
					{/* <input style={{ display: 'none' }} value={postId} name='postId' /> */}
				</div>
				<div>
					<input type='submit' value='Submit' onSubmit={postComment} />
				</div>
				{/* <button type='submit'>Comment</button> */}
			</form>
		</div>
	);
}
