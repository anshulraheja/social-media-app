import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SinglePost from "../../component/SinglePost/SinglePost";
import { Bars as Loader } from "react-loader-spinner";
import { logout } from "../../redux/reducers/authSlice";
import "./User.css";
import {
  followUser,
  getUserPost,
  unfollowUser,
} from "../../redux/reducers/usersSlice";
import { toast } from "react-toastify";
import { EditUserProfile } from "../../component/EditUserProfile/EditUserProfile";

export function User() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showEditProfile, setShowEditProfile] = useState(false);
  const allUsers = useSelector((state) => state.users.users);
  const loggedInUser = useSelector((state) => state.auth.user);
  const loginUserDetails = allUsers.find(
    (user) => user.username === loggedInUser.username
  );
  const profileUser = allUsers.find((user) => user.username === username);
  let currentUser =
    loginUserDetails?.username === profileUser?.username
      ? loginUserDetails
      : profileUser;

  let currentUserPosts = useSelector((state) => state.users.profileUserPosts);
  const loading = useSelector((state) => state.users.loading);

  const followingThisUser = loginUserDetails?.following.some(
    (user) => user.username === profileUser?.username
  );

  let allPosts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    if (currentUser) {
      dispatch(getUserPost(currentUser.username));
    } else {
      toast.error("User Not Found");
      navigate("/");
    }
  }, [currentUser, dispatch, navigate, allPosts]);

  return (
    <main className="main">
      <div className="content-area">
        <div className="main-user-profile-container">
          <div className="main-user-profile">
            <p className="main-heading">
              {`${currentUser?.firstName} ${currentUser?.lastName}'s `}
              Profile
            </p>

            {loginUserDetails?.username === profileUser?.username ? (
              <div className="user-profile-cta">
                <button
                  className="category-outline-btn active"
                  title="Edit Profile"
                  onClick={() => {
                    setShowEditProfile((p) => !p);
                  }}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  className="category-outline-btn active"
                  title="Share Profile"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(
                      `https://ar-social-media.netlify.app/${loginUserDetails.username}`
                    );
                    toast.success(`Profile Link Copied`);
                  }}
                >
                  <i className="fas fa-share-alt"></i>
                </button>
                <button
                  className="category-outline-btn active"
                  title="Logout Now"
                  onClick={() => dispatch(logout())}
                >
                  <i className="fas fa-sign-out-alt"></i>
                </button>
              </div>
            ) : (
              <div className="user-profile-cta">
                <button
                  className="category-outline-btn active"
                  title="Share Profile"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(
                      `https://ar-social-media.netlify.app/${profileUser.username}`
                    );
                    toast.success(`Profile Link Copied`);
                  }}
                >
                  <i className="fas fa-share-alt"></i>
                </button>
                <button
                  className="btn btn-primary btn-bolder btn-round"
                  title={followingThisUser ? "Unfollow" : "Follow"}
                  onClick={() => {
                    if (followingThisUser) {
                      dispatch(unfollowUser({ followUserId: profileUser._id }));
                    } else {
                      dispatch(followUser({ followUserId: profileUser._id }));
                    }
                  }}
                >
                  {followingThisUser ? "Unfollow" : "Follow"}
                </button>
              </div>
            )}
          </div>

          <div className="user-profile-main">
            <div className="avatar avatar-hover s-xl">
              {/* <img src={`${currentUser?.profilePhoto}`} alt="" /> */}
            </div>
            <div className="user-profile-content">
              <div className="user-profile-content-username">{`@${currentUser?.username}`}</div>
              <div className="user-profile-content-bio">{`${currentUser?.bio}`}</div>
              <div className="user-modal-counters">
                <span className="user-profile-count">
                  {currentUserPosts.length}
                </span>
                <span> posts</span>
                <span className="user-profile-count">
                  {currentUser?.followers?.length}
                </span>
                <span>followers</span>
                <span className="user-profile-count">
                  {" "}
                  {currentUser?.following?.length}{" "}
                </span>
                <span>following</span>
              </div>

              <div>
                <a href={currentUser?.website} target="_blank" rel="noreferrer">
                  {currentUser?.website}
                </a>
              </div>
            </div>
          </div>
          {[...currentUserPosts]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((post) => (
              <SinglePost key={post._id} post={post} />
            ))}
        </div>
        {showEditProfile && <EditUserProfile
          showEditProfile={showEditProfile}
          setShowEditProfile={setShowEditProfile}
          user={loginUserDetails}
        />}
      </div>

      {loading && (
        <div className="react-loader-spinner">
          <Loader />
        </div>
      )}
    </main>
  );
}