import './Header.css';
import { logout } from '../../redux/reducers/authSlice';
import { useDispatch  } from 'react-redux';

const Header = () => {
const dispatch = useDispatch();

  return (
    <div className="main-header">
        <h2>Social Media</h2>
        <button className="btn-logout" onClick={() => dispatch(logout())}>Logout</button>    
    </div>
  )
}

export default Header