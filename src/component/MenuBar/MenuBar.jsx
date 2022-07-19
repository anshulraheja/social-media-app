import React, {useState} from 'react'
import './MenuBar.css';
import {Link} from "react-router-dom";
import { logout } from '../../redux/reducers/authSlice';
import { useSelector } from 'react-redux';
import {openPostModal} from '../../redux/reducers/postModalSlice'
import CreatePostModal from '../CreatePostModal/CreatePostModal';

const MenuBar = () => {
  const user = useSelector((state) => state.auth.user);
  const allUsers = useSelector((state) => state.users.users);
  const loginUserDetails = allUsers.find(
    (item) => item.username === user?.username
  );
  const [openCreatePost, setOpenCreatePost] = useState(false)
  return (
    <div className="menubar-container">
        <Link to="/">
            Feed
        </Link>
        <Link to="/explore">
            Explore
        </Link>
        <Link to="/bookmarks">
            Bookmark
        </Link>
        <Link to={`/${loginUserDetails?.username}`}>
            Profile
        </Link>
        <button className ="btn-create-post" onClick={() => setOpenCreatePost(true)}>Create POST</button>
        {openCreatePost && <CreatePostModal setOpenCreatePost={setOpenCreatePost}/>}
    </div>
  )
}

export default MenuBar