import "./CommentCard.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { MdDelete } from "react-icons/md/";
import { deleteComment } from "../../redux/reducers/postsSlice";

export function CommentCard({ postId, comment }) {
  const dispatch = useDispatch();

  return (
    <div className="single-comment-container">
      <Link to={`/${comment.username}`} className="home-avatar">
        <div title="Go To Profile">
          <div className="avatar avatar-hover s-s ">
            {/* <img src={`${comment.profilePhoto}`} alt="" /> */}
          </div>
        </div>
      </Link>
      <div className="single-post-content">
        <div className="post-user-info-date">
          <Link
            to={`/${comment.username}`}
            className="remove-link-props"
            title="Go To Profile"
          >
            <span className="post-name">{`${comment.firstName} ${comment.lastName} `}</span>
            <span className="post-username">{`  @${comment.username} `}</span>
          </Link>
          <span className="dot-separator"></span>
          <span
            className="post-date"
            title={dayjs(comment.createdAt).format("MMM DD,YYYY hh:mm A")}
          >{dayjs(comment.createdAt).format("MMM DD,YYYY")}</span>
        </div>
        <div className="post-content-container">
          <span className="post-content">{comment.text}</span>
        </div>
      </div>
      <div
        className="comment-delete-btn"
        onClick={() => {
          dispatch(
            deleteComment({
              postId,
              commentId: comment._id,
            })
          );
        }}
      >
        <MdDelete />
      </div>
    </div>
  );
}