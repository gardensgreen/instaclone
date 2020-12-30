import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
// import UploadUser from "./components/upload-post/PostForm";
import { authenticate } from './services/auth';
import PostForm from './components/upload-post/PostForm';
import CommentForm from './components/comment/CommentForm';

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			const user = await authenticate();
			if (!user.errors) {
				setAuthenticated(true);
			}
			setLoaded(true);
		})();
	}, []);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<NavBar setAuthenticated={setAuthenticated} />
			<Route path='/login' exact={true}>
				<LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
			</Route>
			<Route path='/sign-up' exact={true}>
				<SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
			</Route>
			<ProtectedRoute path='/users' exact={true} authenticated={authenticated}>
				<UsersList />
			</ProtectedRoute>
			<ProtectedRoute path='/users/:userId' exact={true} authenticated={authenticated}>
				<User />
			</ProtectedRoute>
			<ProtectedRoute path='/' exact={true} authenticated={authenticated}>
				<h1>My Home Page</h1>
			</ProtectedRoute>
			<ProtectedRoute path='/posts/new' exact={true} authenticated={authenticated}>
				<PostForm></PostForm>
			</ProtectedRoute>
			<ProtectedRoute
				path='/posts/:postId'
				exact={true}
				authenticated={authenticated}
			></ProtectedRoute>
		</BrowserRouter>
	);
}

export default App;
