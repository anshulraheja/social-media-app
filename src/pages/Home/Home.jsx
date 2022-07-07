import {useState, useEffect} from 'react';
import {  useDispatch, useSelector } from "react-redux";
import SinglePost from '../../component/SinglePost/SinglePost';
import {getPosts} from '../../redux/reducers/postsSlice';
const Home = () => {
  const [postSort, setPostSort] = useState("Lastest");
  const sortOptions = [
    {label: "Latest", value: "latest_post"},
    {label: "Trending", value: "trending"},
    {label: "Oldest Post", value: "oldest_post"}
  ]
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[]);

  return (
    <div>
      <div>
        <input type="textarea" placeholder="Write your tweet"/>
        <button>Post</button>
      </div>
      <div>
      <select value={postSort} onChange={(e) => setPostSort(e.target.value)}>
        {sortOptions.map(option => (
          <option value ={option.value}>{option.label}</option>
        ))}
      </select>

      <div>
          {posts.map((post) => (
            <SinglePost post={post}/> 
          ))}
      </div>
    </div>
    </div>
  )
}

export default Home