import { useSelector } from "react-redux";
import { FollowBarCard } from "../FollowBarCard/FollowBarCard";
import "./FollowBar.css";
export default function FollowBar() {
  const user = useSelector((state) => state.auth.user);
  const users = useSelector((state) => state.users.users);
  const loginUserDetails = users?.find(
    (item) => item.username === user?.username
  );

  const suggestedUsers = users
    .filter(
      (item) =>
        !loginUserDetails?.following.find(
          (tempUser) => tempUser.username === item.username
        ) && item.username !== user.username
    )
    .slice(0, 5);

  return (
    <aside className="followbar">
      <div className="followbar-container">
        <h3>Suggestions</h3>
        <div className="suggested-users-container">
          {suggestedUsers.map((user) => (
            <FollowBarCard key={user._id} user={user} />
          ))}
        </div>
      </div>
    </aside>
  );
}