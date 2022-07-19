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


  let finalPosts = sortPosts(posts, sortBy);

  return (
    <main className="main-homepage-container">
        <div className="homepage-content">
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
            <CreatePostModal />

          {finalPosts.map((post) => (
            <SinglePost key={post._id} post={post} />
          ))}
        </div>
      {(isLoading || loading) && (
        <div className="react-loader-spinner">
          <Loader />
        </div>
      )}
    </main>
  );
}