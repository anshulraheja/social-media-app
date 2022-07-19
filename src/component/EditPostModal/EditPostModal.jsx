import { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../redux/reducers/postsSlice";
import './EditPostModal.css'
export function EditPostModal({ showEditModal, setShowEditModal, post }) {
  const [updatedPost, setUpdatedPost] = useState({ ...post });
  const dispatch = useDispatch();
  return (
    <div
      className={`modal-main ${showEditModal ? "modal-main-show" : ""}`}
    >
      <div className="modal-content">
        <button
          id="btn btn-primary"
          className="card-dismiss"
          title="Dismiss"
          onClick={() => setShowEditModal((p) => !p)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="modal-title fw-700"> Edit Post Content</div>

        <div className="home-new-post-container">
          <textarea
            type="text"
            autoFocus
            rows="4"
            className="home-text-area"
            value={updatedPost.content}
            onChange={(e) =>
              setUpdatedPost((prev) => ({ content: e.target.value }))
            }
          ></textarea>{" "}
          <button
            className="btn-modal-post"
            title="Post It!!"
            disabled={updatedPost.content === "" ? true : false}
            onClick={() => {
              dispatch(
                editPost({
                  postId: post?._id,
                  postData: updatedPost,
                })
              );
              setShowEditModal((p) => !p);
            }}
          >
            <span>Post</span>
          </button>
        </div>
      </div>
    </div>
  );
}