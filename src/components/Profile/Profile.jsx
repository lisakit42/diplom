import "./Profile.scss";
import React, { useState, useEffect } from "react";
import ProfilePic from "../upload/profilepic.svg";
import EditIcon from "../upload/EditIcon.svg";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else navigate("/registration");
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="ProfileDiv">
      <Helmet>
        <title>Личный кабинет</title>
      </Helmet>
      <div className="ProfileContainer">
        <img src={ProfilePic} alt="" className="ProfilePic" />
        <div className="ProfileDetails">
          <div className="ProfileText">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleInputChange}
                  className="ProfileInput"
                />
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleInputChange}
                  className="ProfileInput"
                />
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="ProfileInput"
                  disabled
                />
                <button onClick={handleSaveClick} className="SaveButton">
                  Сохранить
                </button>
              </>
            ) : (
              <>
                <div className="ProfileName">
                  {user.firstName} {user.lastName}
                  <img src={EditIcon} alt="Edit" className="EditIcon" onClick={handleEditClick} />
                </div>
                <div className="ProfileEmail">{user.email}</div>
              </>
            )}
          </div>
          <div className="ProfileStatus">Premium - пользователь</div>
          <a href="/" className="FavoritesLink">
            Избранное
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
