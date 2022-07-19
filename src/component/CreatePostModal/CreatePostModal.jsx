import './CreatePostModal.css'
import {useState} from 'react';
import {Link} from 'react-router-dom'
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createPost, sortByValue} from "../../redux/reducers/postsSlice";

const CreatePostModal = (props) => {
    const {setOpenCreatePost} = props;
    const [postDetails, setPostDetails] = useState({
        content: "",
        postImage: "",
      });
      const dispatch = useDispatch();
      const user = useSelector((state) => state.auth.user);
      const allUsers = useSelector((state) => state.users.users);
      const loginUserDetails = allUsers.find(
        (item) => item.username === user?.username
      );

      const postHandler = (postDetails) => {
        if (postDetails.content !== "") {
          if (postDetails.content.length > 5) {
            if (postDetails.postImage !== "") {
            } else {
              dispatch(createPost(postDetails));
            }
            setPostDetails({
              content: "",
              postImage: "",
            });
          } else {
            toast.error("Post length must be more than 5 chars!");
          }
        } else {
          toast.error("Post is Empty. Try Again!");
        }
      };
    
  return (
    <div className={`create-post-modal-container ${setOpenCreatePost && "post-modal"}`}>
         <div className="home-new-post-container">
            {setOpenCreatePost && <div onClick={() => setOpenCreatePost(false)} className="btn-create-modal-close">X</div>}
            <Link
              to={`/${loginUserDetails?.username}`}
              className="home-avatar"
            >
              <div title="Go To Profile">
                <div className="create-modal-img-container ">
                  <img
                    src={`${loginUserDetails?.profilePhoto}`}
                    alt=""
                  />
                </div>
              </div>
            </Link>
            <textarea
              type="text"
              placeholder="What's Happening?"
              autoFocus
              rows="4"
              className="text-area"
              value={postDetails.content}
              onChange={(e) =>
                setPostDetails((prev) => ({
                  ...prev,
                  content: e.target.value,
                }))
              }
            ></textarea>
          </div>
            <button
              className="btn-post"
              title="Post"
              onClick={() => {
                postHandler(postDetails)
                {setOpenCreatePost && setOpenCreatePost(false)}
                }}
            >
              <span>Post</span>
            </button>
          {/* </div> */}
    </div>
  )
}

export default CreatePostModal