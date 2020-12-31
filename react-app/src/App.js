import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Profile from "./components/Profile";
import Feed from './components/feed';
import Post from "./components/post";
import UserEdit from './components/user-edit/UserEdit';
// import UploadUser from "./components/upload-post/UploadPost";
import LandingPage from './components/landing-page/LandingPage';
import PostForm from './components/upload-post/PostForm';
// import CommentForm from './components/comment/CommentForm';
import { authenticate } from "./services/auth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setUserdata(user);
      }
      setLoaded(true);
    })();
  }, []);

	if (!loaded) {
		return null;
	}

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            setUserdata={setUserdata}
            />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path='/landing' exact={true}>
          <LandingPage authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path={`/users/:username`} exact={true} authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} userdata={userdata} />
          <Profile userdata={userdata}/>
        </ProtectedRoute>
        <ProtectedRoute path={`/users/:user/edit`} exact={true} authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} userdata={userdata} />
          <UserEdit />
        </ProtectedRoute>
        {/* <ProtectedRoute path={`/$`} authenticated={authenticated}>
          <UserPage />
        </ProtectedRoute> */}
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} userdata={userdata} />
          <Feed />
        </ProtectedRoute>
        <ProtectedRoute path="/posts/new" exact={true} authenticated={authenticated}>
          <NavBar setAuthenticated={setAuthenticated} userdata={userdata} />
          <PostForm />
        </ProtectedRoute>
        <ProtectedRoute path="/posts/:postId" exact={true} authenticated={authenticated}>
          {/* <CommentForm postId={1}></CommentForm> */}
          <NavBar setAuthenticated={setAuthenticated} userdata={userdata} />
          <Post />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
