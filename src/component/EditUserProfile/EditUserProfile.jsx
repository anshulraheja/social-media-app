import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdImage } from "react-icons/md/";
import { updateUser } from "../../redux/reducers/usersSlice";
import { toast } from "react-toastify";
import './EditUserProfile.css'
export function EditUserProfile({ showEditProfile, setShowEditProfile, user }) {
  const [updateUserDetails, setUpdateUserDetails] = useState({ ...user });
  const dispatch = useDispatch();

  const updateHandler = () => {
    dispatch(updateUser(updateUserDetails));
  };

  return (
    <div
      className={`modal-main ${showEditProfile ? "modal-main-show" : ""}`}
    >
      <div className="modal-content">
        <button
          id="btn btn-primary"
          className="card-dismiss"
          title="Dismiss"
          onClick={() => setShowEditProfile((p) => !p)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="modal-title fw-700">
          {`Edit ${user?.firstName} ${user?.lastName}'s Profile`}{" "}
        </div>
        <div className="home-new-edit-post-container">
          <div className="edit-profile-img-container">
            <img src={`${updateUserDetails.profilePhoto}`} alt="" />
          </div>

          <div className="user-profile-content">
            <input
              type="text"
              autoFocus
              rows="4"
              className="home-text-area"
              value={updateUserDetails.bio}
              onChange={(e) =>
                setUpdateUserDetails((prev) => ({
                  ...prev,
                  bio: e.target.value,
                }))
              }
            />
            <input
              type="text"
              autoFocus
              rows="4"
              className="home-text-area"
              value={updateUserDetails.website}
              onChange={(e) =>
                setUpdateUserDetails((prev) => ({
                  ...prev,
                  website: e.target.value,
                }))
              }
            />
          </div>
          <button
            className="btn-update-profile"
            title="Update Profile"
            onClick={() => {
              updateHandler();
              setShowEditProfile((p) => !p);
            }}
          >
            <span>Update Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}