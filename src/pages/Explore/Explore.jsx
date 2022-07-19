import { useSelector } from "react-redux";
import { Bars as Loader } from "react-loader-spinner";
import  SinglePost from "../../component/SinglePost/SinglePost";
import "./Explore.css";
export function Explore() {
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  let finalPosts = [...posts];
  finalPosts = finalPosts.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <main className="main-homepage-container">
      <div className="explore-area">
          <div className="explore-top">
            <p className="main-heading">Explore</p>
          </div>
          {finalPosts.map((post) => (
            <SinglePost key={post._id} post={post} />
          ))}
      </div>
      {loading && (
        <div className="react-loader-spinner">
          <Loader />
        </div>
      )}
    </main>
  );
}