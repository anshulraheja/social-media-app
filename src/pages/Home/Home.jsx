import "./Home.css";
import { Bars as Loader } from "react-loader-spinner";
import SinglePost from "../../component/SinglePost/SinglePost";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, } from "react";
import { toast } from "react-toastify";
import { createPost, sortByValue} from "../../redux/reducers/postsSlice";
import { sortPosts } from "../../hooks/sortPosts";

export default function Home() {
  const [postDetails, setPostDetails] = useState({
    content: "",
    postImage: "",
  });


  const [selectSortValue, setSelectSortValue] = useState("Latest");
  const loading = useSelector((state) => state.posts.loading);

  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const allUsers = useSelector((state) => state.users.users);
  console.log("allUsers", allUsers);
  const loginUserDetails = allUsers.find(
    (item) => item.username === user?.username
  );
  console.log("loginUserDetails",loginUserDetails)
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  let sortBy = useSelector((state) => state.posts.sortBy);

  // const cloudinaryPost = async (postDetails) => {
  //   const data = new FormData();
  //   data.append("file", postDetails.postImage);
  //   data.append(
  //     "upload_preset",
  //     process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
  //   );
  //   const requestOptions = {
  //     method: "POST",
  //     body: data,
  //   };
  //   setIsLoading(true);
  //   await fetch(process.env.REACT_APP_CLOUDINARY_API_URL, requestOptions)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       dispatch(
  //         createPost({ content: postDetails.content, postImage: json.url })
  //       );
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       toast.error(error);
  //     });
  // };

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

  let finalPosts = sortPosts(posts, sortBy);

  return (
    <main className="main">
      <div className="content-area">
        <div className="main-user-homepage-container">
          <div className="home-top">
            <p className="main-heading">Home</p>
            <select
              className="home-select-sort"
              title="Select Options"
              value={selectSortValue}
              onChange={(e) => {
                setSelectSortValue(e.target.value);
                dispatch(sortByValue(e.target.value));
              }}
            >
              <option value="Latest">Latest Posts</option>
              <option value="Trending">Trending</option>
              <option value="Oldest">Oldest Posts</option>
            </select>
          </div>
          <div className="home-new-post-conatiner">
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
              onClick={() => postHandler(postDetails)}
            >
              <span>Post</span>
            </button>
          </div>
          {finalPosts.map((post) => (
            <SinglePost key={post._id} post={post} />
          ))}
        </div>
      </div>
      {(isLoading || loading) && (
        <div className="react-loader-spinner">
          <Loader />
        </div>
      )}
    </main>
  );
}