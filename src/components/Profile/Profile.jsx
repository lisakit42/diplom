import "./Profile.scss";
import React, { useState } from "react";
import ProfilePic from "../upload/profilepic.svg";
import EditIcon from "../upload/EditIcon.svg";
import { Helmet } from "react-helmet";

const Profile = () => {
    const [firstName, setFirstName] = useState("Иван");
    const [lastName, setLastName] = useState("Иванов");
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
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
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    className="ProfileInput"
                                />
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    className="ProfileInput"
                                />
                                <button
                                    onClick={handleSaveClick}
                                    className="SaveButton"
                                >
                                    Сохранить
                                </button>
                            </>
                        ) : (
                            <>
                                {firstName} {lastName}
                                <img
                                    src={EditIcon}
                                    alt="Edit"
                                    className="EditIcon"
                                    onClick={handleEditClick}
                                />
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
