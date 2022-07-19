import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { logout } from '../../redux/reducers/authSlice';
import { useDispatch , useSelector } from 'react-redux';
import {openPostModal} from '../../redux/reducers/postModalSlice'
import CreatePostModal from '../CreatePostModal/CreatePostModal';

const MenuBar = () => {
    const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const allUsers = useSelector((state) => state.users.users);
  const loginUserDetails = allUsers.find(
    (item) => item.username === user?.username
  );
  const [openCreatePost, setOpenCreatePost] = useState(false)
  return (

    <div>
        <Link to="/">
            <p>Feed</p>
        </Link>
        <Link to="/explore">
            <p>Explore</p>
        </Link>
        <Link to="/bookmarks">
            <p>Bookmark</p>
        </Link>
        <Link to={`/${loginUserDetails?.username}`}>
            <p>Profile</p>
        </Link>
        <button onClick={() => dispatch(logout())}>Logout</button>
        <button onClick={() => setOpenCreatePost(true)}>Create POST</button>
        {openCreatePost && <CreatePostModal setOpenCreatePost={setOpenCreatePost}/>}
    </div>
  )
}

export default MenuBar