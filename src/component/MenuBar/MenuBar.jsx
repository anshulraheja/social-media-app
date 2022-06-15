import React from 'react'
import {Link} from "react-router-dom";
import { logout } from '../../redux/reducers/authSlice';
import { useDispatch } from 'react-redux';
const MenuBar = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <Link to="/">
            <p>Feed</p>
        </Link>
        <Link to="/explore">
            <p>Explore</p>
        </Link>
        <Link to="/bookmark">
            <p>Bookmark</p>
        </Link>
        <Link to="/profile">
            <p>Profile</p>
        </Link>
        <button onClick={() => dispatch(logout())}>Logout</button>
        <button>Create POST</button>
    </div>
  )
}

export default MenuBar