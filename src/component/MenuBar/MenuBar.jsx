import React from 'react'
import {Link} from "react-router-dom";
import { logout } from '../../redux/reducers/authSlice';
import { useDispatch , useSelector } from 'react-redux';
import {openPostModal} from '../../redux/reducers/postModalSlice'

const MenuBar = () => {
    const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const allUsers = useSelector((state) => state.users.users);
  const loginUserDetails = allUsers.find(
    (item) => item.username === user?.username
  );
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
        <button onClick={() => dispatch(openPostModal())}>Create POST</button>
    </div>
  )
}

export default MenuBar