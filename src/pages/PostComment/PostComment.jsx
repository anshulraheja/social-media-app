import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SinglePost  from "../../component/SinglePost/SinglePost";
import { postComment } from "../../redux/reducers/postsSlice";
import { Bars as Loader } from "react-loader-spinner";
import "./PostComment.css";
import { toast } from "react-toastify";
import {CommentCard} from '../../component/CommentCard/CommentCard'
export function PostComment() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const allPosts = useSelector((state) => state.posts.posts);
  const currentPost = allPosts.find((item) => item._id === postId);
  const loading = useSelector((state) => state.posts.loading);
  const [comment, setComment] = useState("");

  let finalComments = [...currentPost.comments];

  finalComments = finalComments.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <main className="main">
      <div className="content-area">
        <div className="main-user-comment-container">
          <p className="main-heading">Comments</p>
          <SinglePost key={currentPost._id} post={currentPost} />
          <div className="add-comments">
            <input
              type="text"
              placeholder="Enter Comment..."
              name="valid"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button
              className="comment-btn"
              onClick={() => {
                if (comment !== "") {
                  dispatch(
                    postComment({ postId, commentData: { text: comment } })
                  );
                  setComment("");
                } else {
                  toast.error("Empty Comment. Please Try Again!");
                }
              }}
            >
              Comment
            </button>
          </div>
          <div className="show-comments">
            {finalComments.map((comment) => (
              <CommentCard
                key={comment._id}
                postId={postId}
                comment={comment}
              />
            ))}
          </div>
        </div>
      </div>
      {loading && (
        <div className="react-loader-spinner">
          <Loader />
        </div>
      )}
    </main>
  );
}