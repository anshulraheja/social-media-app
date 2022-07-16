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
              // cloudinaryPost(postDetails);
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
    <div>
         <div className="home-new-post-conatiner">
            {setOpenCreatePost && <div onClick={() => setOpenCreatePost(false)}>X</div>}
            <Link
              to={`/${loginUserDetails?.username}`}
              className="home-avatar"
            >
              <div title="Go To Profile">
                <div className="avatar avatar-hover s-s ">
                  {/* <img
                    src={`${loginUserDetails?.profilePhoto}`}
                    alt="lkj"
                  /> */}
                </div>
              </div>
            </Link>
            <textarea
              type="text"
              placeholder="What's Happening?"
              autoFocus
              rows="4"
              className="home-text-area"
              value={postDetails.content}
              onChange={(e) =>
                setPostDetails((prev) => ({
                  ...prev,
                  content: e.target.value,
                }))
              }
            ></textarea>
          </div>
          {/* {postDetails.postImage && (
            <div className="postimage-container">
              <img
                src={URL.createObjectURL(postDetails.postImage)}
                alt=""
              />
              <div
                className="close-icon "
                onClick={(e) =>
                  setPostDetails((prev) => ({
                    ...prev,
                    postImage: "",
                  }))
                }
              >
                <AiOutlineCloseCircle /> 
              </div>
            </div>
          )} */}
          <div className="home-feature-cta-container">
            {/* <label htmlFor="postImage">
              <span
                className="home-image-upload-btn"
                title="Click To Upload Image"
              >
                <MdImage />
              </span>
            </label>
            <input
              type="file"
              id="postImage"
              accept="image/*"
              hidden
              onInput={(e) =>
                setPostDetails((prev) => ({
                  ...prev,
                  postImage: e.target.files[0],
                }))
              }
            /> */}

            <button
              className="btn btn-primary btn-bold btn-round "
              title="Post"
              onClick={() => {
                postHandler(postDetails)
                {setOpenCreatePost && setOpenCreatePost(false)}
                }}
            >
              <span>Post</span>
            </button>
          </div>
    </div>
  )
}

export default CreatePostModal