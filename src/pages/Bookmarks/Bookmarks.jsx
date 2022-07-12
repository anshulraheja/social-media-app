import "./Bookmarks.css";
import { useSelector } from "react-redux";
import  SinglePost  from "../../component/SinglePost/SinglePost";
import { Bars as Loader } from "react-loader-spinner";
export function Bookmarks() {
  const loading = useSelector((state) => state.posts.loading);
  const posts = useSelector((state) => state.posts.posts);
  const bookmarks = useSelector((state) => state.posts.bookmarks);
  const bookmarkedPosts = posts.filter((post) =>
    bookmarks.find((id) => post._id === id)
  );
  return (
    <main className="main">
      <div className="content-area">
        <div className="main-user-bookmarks-container">
          <div className="home-top">
            <p className="main-heading">Bookmarks</p>
          </div>
          {bookmarks.length === 0 && (
            <span className="no-bookmarks">
              Save Posts for later. Right now there are no bookmarked posts.
            </span>
          )}
          {bookmarkedPosts.map((post) => (
            <SinglePost key={post._id} post={post} />
          ))}
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