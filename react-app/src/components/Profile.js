import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecomendedPost from './post/recomenedPost';
import NumFollowers from './NumFollowers';
import NumFollowing from './NumFollowing';

function Profile(props) {
	const [user, setUsers] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [loggedin, setLoggedin] = useState([]);
	const [followingToFollow, setFollowingToFollow] = useState(false);
	const [followToFollowing, setFollowToFollowing] = useState(false);
	const [notFollowing, setNotFollowing] = useState(true);
	const { username } = useParams();
	const userName = localStorage.getItem('IG_USERNAME');
	const following = loggedin.followingUserNames;

	useEffect(() => {
		setLoaded(false);
		async function fetchData() {
			const response = await fetch(`/api/users/${username}`);
			const loggedInUser = await fetch(`/api/users/${userName}`);
			const responseData = await response.json();
			const resData = await loggedInUser.json();
			setUsers(responseData);
			setLoggedin(resData);
			setLoaded(true);
		}

		fetchData();
	}, [username, userName]);

	// let clickedFollowersButton = false;
	// const clickedFollowers = (e) => {
	//   e.preventDefault();
	//   const emptyDiv = window.document.querySelector(".clickable-element-userPage");
	//   const followersWindow = window.document.getElementById("followersDiv");
	//   if (clickedFollowersButton === false) {
	//     emptyDiv.style.display = "flex";
	//     followersWindow.style.display = "";
	//     clickedFollowersButton = true;
	//   } else {
	//     emptyDiv.style.display = "none";
	//     followersWindow.style.display = "none";
	//     clickedFollowersButton = false;
	//     e.stopPropagation();
	//     return;
	//   }
	// }

	const overFollowing = () => {
		const followButton = window.document.querySelector('.follow-button');

		if (followButton === null) {
			if ((followingToFollow === false && followToFollowing === false) || notFollowing === false) {
				const followingButton = window.document.querySelector('.following-button');
				followingButton.innerHTML = 'Unfollow';
			}
		}
	};

	const leftFollowing = () => {
		const followButton = window.document.querySelector('.follow-button');
		if (followButton === null) {
			if ((followingToFollow === false && followToFollowing === false) || notFollowing === false) {
				const followingButton = window.document.querySelector('.following-button');
				followingButton.innerHTML = 'Following';
			}
		}
	};
	const follow = async () => {
		const followButton = window.document.querySelector('.follow-button');
		const followingButton = window.document.querySelector('.following-button');

		if (followButton === null) {
			if (followingButton.innerHTML === 'Following' || followingButton.innerHTML === 'Unfollow') {
				unFollow();
				setFollowingToFollow(false);
				return;
			}
		}
		if (followButton.innerHTML === 'Follow') {
			followButton.classList.remove('follow-button');
			followButton.classList.add('following-button');
			followButton.innerHTML = 'Following';
			setFollowToFollowing(true);
			setNotFollowing(false);
			await fetch(`/api/users/${user.id}/follower`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					followerId: loggedin.id,
				}),
			});
			const response = await fetch(`/api/users/${username}`);
			const result = await response.json();
			setUsers(result);
			return;
		}
	};
	const unFollow = async () => {
		const followingButton = window.document.querySelector('.following-button');
		const followButton = window.document.querySelector('.follow-button');

		if (followingButton === null) {
			if (followButton.innerHTML === 'Follow') {
				follow();
				setFollowToFollowing(false);
				setFollowingToFollow(false);
				return;
			}
		}
		if (followingButton.innerHTML === 'Unfollow' || followingButton.innerHTML === 'Following') {
			followingButton.classList.remove('following-button');
			followingButton.classList.add('follow-button');
			followingButton.innerHTML = 'Follow';
			setFollowingToFollow(true);
			await fetch(`/api/users/${user.id}/follower`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					followerId: loggedin.id,
				}),
			});
			const response = await fetch(`/api/users/${username}`);
			const result = await response.json();
			setUsers(result);
			return;
		}
	};

	return (
		loaded && (
			<main className='main__backgroundColor'>
				<div className='userProfile__main__div'>
					<header className='main__div__header'>
						<div
							style={{
								width: '291px',
								height: '194px',
								marginRight: '30px',
							}}
						>
							<div
								style={{
									width: '150px',
									height: '150px',
									cursor: 'pointer',
									alignItems: 'center',
									display: 'block',
									justifyContent: 'center',
								}}
							>
								<span className='header__div__profilePicture'>
									<img
										style={{
											left: '0',
											position: 'absolute',
											top: '0',
											width: '150px',
											height: '150px',
										}}
										src={user.avatarUrl}
										alt='profile'
									/>
								</span>
							</div>
						</div>
						<section style={{ width: '613px', height: '194px' }}>
							<div
								style={{
									marginBotton: '20px',
									display: 'flex',
									flexDirection: 'row',
								}}
							>
								<h2 className='section__div__userName'>{user.username}</h2>
								{username !== userName && following.includes(`${username}`) === false ? (
									<div
										className='section__div__followButton'
										style={{
											width: '93px',
											height: '30px',
											marginLeft: '25px',
										}}
									>
										<button
											onMouseEnter={overFollowing}
											onMouseLeave={leftFollowing}
											onClick={follow}
											className='follow-button'
										>
											Follow
										</button>
									</div>
								) : username !== userName ? (
									<div
										className='section__div__followButton'
										style={{
											width: '93px',
											height: '30px',
											marginLeft: '25px',
										}}
									>
										<button
											onMouseEnter={overFollowing}
											onMouseLeave={leftFollowing}
											onClick={unFollow}
											className='following-button'
										>
											Following
										</button>
									</div>
								) : (
									<></>
								)}
							</div>
							<ul
								style={{
									marginBottom: '20px',
									display: 'flex',
									flexDirection: 'row',
									listStyle: 'none',
									paddingLeft: '0px',
								}}
							>
								<li
									style={{
										marginLeft: '0px',
										marginRight: '40px',
										fontSize: '16px',
										display: 'list-item',
										userSelect: 'none',
									}}
								>
									<span>
										<span
											style={{
												color: 'rgba(var(--i1d,38,38,38),1)',
												fontWeight: '600',
											}}
										>
											{user.posts.length}{' '}
										</span>
										posts
									</span>
								</li>
								<li
									style={{
										marginRight: '40px',
										fontSize: '16px',
										userSelect: 'none',
									}}
									className='profileFollowerInfo'
								>
									<span>
										<span
											style={{
												color: 'rgba(var(--i1d,38,38,38),1)',
												fontWeight: '600',
											}}
											title='600'
										>
											<NumFollowers followers={user.numFollowers} />{' '}
										</span>
										followers
									</span>
								</li>
								<li
									style={{
										marginRight: '0',
										fontSize: '16px',
										userSelect: 'none',
									}}
								>
									<span>
										<span
											style={{
												color: 'rgba(var(--i1d,38,38,38),1)',
												fontWeight: '600',
											}}
										>
											<NumFollowing following={user.numFollowing} />{' '}
										</span>
										following
									</span>
								</li>
							</ul>
							<div className='section__div__bio'>
								<p>{user.bio}</p>
							</div>
						</section>
					</header>
					<div className='main__div__posts'>
						<a className='div__posts__sectionTitle' href='/demo'>
							<span
								style={{
									display: 'flex',
									alignItems: 'center',
									color: 'rgba(var(--i1d,38,38,38),1)',
									cursor: 'pointer',
									textTransform: 'uppercase',
									letterSpacing: '1px',
								}}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									fill='currentColor'
									className='bi bi-grid-3x3-gap'
									viewBox='0 0 16 16'
								>
									<path d='M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z' />
								</svg>
								<span style={{ marginLeft: '6px' }}>Posts</span>
							</span>
						</a>
					</div>
					<div className='div__posts__images'>
						<article className='posts__images__article'>
							<div style={{ marginTop: '2vh' }} className='recomended-post-holder'>
								{user.posts.map(p => (
									<RecomendedPost key={p.id} rec={p} />
								))}
							</div>
						</article>
					</div>
				</div>
			</main>
		)
	);
}

export default Profile;
