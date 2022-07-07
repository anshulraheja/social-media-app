import React, {useEffect} from 'react'
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {likePost, dislikePost, addToBookmarks,removeFromBookmarks, getBookmarks} from '../../redux/reducers/postsSlice';
const SinglePost = ({post}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const bookmarks = useSelector((state) => state.posts.bookmarks);
    const isPostLikedByUser = post.likes.likedBy?.some(
      (item) => item.username === user.username
    )
      ? true
      : false;
    
      const isPostBookmarkedByUser = bookmarks.some((id) => id === post._id)
      ? true
      : false;
  return (
    <div>
    <h1>{post._id}</h1>
    <h4>{post.username}</h4>  
    <h5>{post.createdAt}</h5>
    <button>option</button>
    <div>{post.content}</div>
    <div>
    <button onClick={() => isPostLikedByUser ? dispatch(dislikePost(post._id)): dispatch(likePost(post._id))}>{isPostLikedByUser ? "Unlike" : "Like"}</button>
    <button onClick={() => isPostBookmarkedByUser ? dispatch(removeFromBookmarks(post._id)) : dispatch(addToBookmarks(post._id))}>{isPostBookmarkedByUser ? "unbookmark" : "bookmark"}</button>
    <Link to={`/${user.username}/${post._id}`} >Comment</Link>
    </div>
    </div>
  )
}

export default SinglePost