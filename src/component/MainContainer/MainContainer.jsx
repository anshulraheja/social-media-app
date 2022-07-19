import './MainContainer.css'
import FollowBar from '../FollowBar/FollowBar';
import MenuBar from "../MenuBar/MenuBar";
import Header from "../Header/Header";
export function MainContainer({ children }) {
  return (
    <div className="main-container">
      <Header/>      
      <div className="main-content">
        <MenuBar />
        <div>
          <div>{children}</div>
        </div>
        <FollowBar />
      </div>
    </div>
  );
}