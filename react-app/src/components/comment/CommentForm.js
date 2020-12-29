import React, { useState } from 'react';

export default function CommentForm(postId) {
	const [comment, setComment] = useState('');

	return (
		<div>
			<form action='/api/comments' method='post'>
				<div>
					<label>New Comment</label>
					<input
						type='text'
						value={comment}
						name='comment'
						onChange={e => setComment(e.target.value)}
					/>
          <input
          style={{display='none'}}
          value={postId}
          name='postId'
          />
				</div>
			</form>
		</div>
	);
}
