import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import dayjs from "dayjs";
import {
  FaRegComment,
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
  FaEdit,
} from "react-icons/fa/";
import { MdDelete } from "react-icons/md/";

import { formatNumber } from "../../hooks/formatNumber";
import {
  addToBookmarks,
  deletePost,
  dislikePost,
  likePost,
  removeFromBookmarks,
} from "../../redux/reducers/postsSlice";
import { EditPostModal } from "../EditPostModal/EditPostModal";
import { useState } from "react";
export default function SinglePost({ post }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const bookmarks = useSelector((state) => state.posts.bookmarks);
  const isPostLikedByUser = post.likes.likedBy?.some(
    (item) => item.username === user.username
  )
    ? true
    : false;

  const isPostBookmarkedByUser = bookmarks.some((id) => id === post._id)
    ? true
    : false;

  const { pathname } = useLocation();
  const { username } = useParams();
  const allUsers = useSelector((state) => state.users.users);
  const profileUser = allUsers.find((user) => user.username === username);
  const loginUserDetails = allUsers.find(
    (item) => item.username === user?.username
  );
  const isLoggedInUser = user?.username === profileUser?.username;

  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="single-post-container">
      <Link to={`/${post.username}`} className="home-avatar">
        <div title="Go To Profile">
          <div className="avatar avatar-hover s-s ">
            {/* <img
              src={
                post.username === loginUserDetails?.username
                  ? loginUserDetails?.profilePhoto
                  : post.profilePhoto
              }
              alt=""
            /> */}
          </div>
        </div>
      </Link>
      <div className="single-post-content">
        <div className="post-user-info-date">
          <Link
            to={`/${post.username}`}
            className="remove-link-props"
            title="Go To Profile"
          >
            <span className="post-name">{`${post.firstName} ${post.lastName} `}</span>
            <span className="post-username">{`  @${post.username} `}</span>
          </Link>
          <span className="dot-separator"></span>
          <span
            className="post-date"
            title={dayjs(post.createdAt).format("MMM DD,YYYY hh:mm A")}
          >
          {dayjs(post.createdAt).format("MMM DD,YYYY")}
          </span>
        </div>
        <div className="post-content-container">
          <span className="post-content">{post.content}</span>
          {post.postImage && (
            <div className="post-content-image-container">
              {/* <img src={post.postImage} alt="" /> */}
            </div>
          )}
        </div>
        <div className="post-cta-container">
          <Link to={`/${user.username}/${post._id}`} className="comment-cta">
            <span className="cta-comment" title="Post Comments">
              <FaRegComment />
              <span className="cta-like-count">
                {post.comments.length !== 0 &&
                  formatNumber(post.comments.length)}
              </span>
            </span>
          </Link>

          <span
            className="cta-like"
            title={`${isPostLikedByUser ? "Dislike Post" : "Like Post"}`}
            onClick={() => {
              isPostLikedByUser
                ? dispatch(dislikePost(post._id))
                : dispatch(likePost(post._id));
            }}
          >
            {isPostLikedByUser ? <FaHeart /> : <FaRegHeart />}

            <span className="cta-like-count">
              {post.likes.likeCount !== 0 && formatNumber(post.likes.likeCount)}
            </span>
          </span>
          <span
            className="cta-bookmark"
            title={`${
              isPostBookmarkedByUser
                ? "Remove from Bookmarks"
                : "Add to Bookmarks"
            }`}
            onClick={() => {
              isPostBookmarkedByUser
                ? dispatch(removeFromBookmarks(post._id))
                : dispatch(addToBookmarks(post._id));
            }}
          >
            {isPostBookmarkedByUser ? <FaBookmark /> : <FaRegBookmark />}
          </span>
          {isLoggedInUser && pathname === `/${username}` && (
            <>
              <span
                className="cta-edit"
                title="Edit Post"
                onClick={() => {
                  setShowEditModal((p) => !p);
                }}
              >
                <FaEdit />
              </span>
              <span
                className="cta-delete"
                title="Delete Post"
                onClick={() => dispatch(deletePost(post?._id))}
              >
                <MdDelete />
              </span>
            </>
          )}
        </div>
      </div>
     { showEditModal &&  <EditPostModal
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        post={post}
      />}
    </div>
  );
}