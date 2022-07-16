import { Link } from "react-router-dom";
export function FollowBarCard({ user }) {
  return (
    <Link to={`/${user.username}`} className="avatar-link-container">
      <div className="avatar-link-profile" title="Go To Profile">
        <div className="avatar avatar-hover s-s avatar-link-margin">
          {/* <img src={`${user.profilePhoto}`} alt="" /> */}
        </div>
        <div className="avatar-link-info">
          <div className="avatar-link-name">
            {`${user.firstName} ${user.lastName}`}
          </div>
          <div className="avatar-link-username">{`@${user.username} `}</div>
        </div>
      </div>
    </Link>
  );
}