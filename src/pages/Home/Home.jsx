import "./Home.css";
import { Bars as Loader } from "react-loader-spinner";
import SinglePost from "../../component/SinglePost/SinglePost";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, } from "react";
import { toast } from "react-toastify";
import { createPost, sortByValue} from "../../redux/reducers/postsSlice";
import { sortPosts } from "../../hooks/sortPosts";
import CreatePostModal from "../../component/CreatePostModal/CreatePostModal";

export default function Home() {


  const [selectSortValue, setSelectSortValue] = useState("Latest");
  const loading = useSelector((state) => state.posts.loading);

  const [isLoading, setIsLoading] = useState(false);


  
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

          {/* CreatePost Modal  */}
            <CreatePostModal 
            />
{/* End  */}

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