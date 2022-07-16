import "./App.css";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from 'react-router-dom'
import { MainContainer } from "./component/MainContainer/MainContainer";
import Home from "./pages/Home/Home";
import { LoginPage, SignupPage } from "./pages/AuthPage/";
import PrivateRoute from './component/private-route/PrivateRoute'
import RestrictedRoute from './component/restricted-route/RestrictedRoute';
import { verify } from "./redux/reducers/authSlice";
import { getPosts } from "./redux/reducers/postsSlice";
import { getUsers } from "./redux/reducers/usersSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { PostComment } from './pages/PostComment/PostComment'
import { Bookmarks } from "./pages/Bookmarks/Bookmarks";
import { Explore } from "./pages/Explore/Explore";
import { User } from "./pages/User/User";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(verify());
    dispatch(getPosts());
    dispatch(getUsers());
  }, []);


  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainContainer>
                <Home />
              </MainContainer>
            </PrivateRoute>
          }
        />
        <Route
          path="/:username/:postId"
          element={
            <PrivateRoute>
              <MainContainer>
                <PostComment />
              </MainContainer>
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <PrivateRoute>
              <MainContainer>
                <Bookmarks />
              </MainContainer>
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <MainContainer>
                <Explore />
              </MainContainer>
            </PrivateRoute>
          }
        />
        <Route
          path="/:username"
          element={
            <PrivateRoute>
              <MainContainer>
                <User />
              </MainContainer>
            </PrivateRoute>
          }
        />
        {/* <Route element={<PrivateRoute />}>
          <Route element={<MainContainer />}>
            <Route path="/" element={<Home />} />
            <Route path="/:username/:postId" element={<PostComment />} />
          </Route>
        </Route> */}

        <Route element={<RestrictedRoute />}>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="mockman" element={<Mockman />} />
      </Routes>
      <ToastContainer
        theme="colored"
        autoClose={1500}
        position={"top-right"}
        className={"toast-container"}
      />
    </div>
  );
}

export default App;
