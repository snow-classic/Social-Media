import "./rightbar.css";
import React, { Component } from 'react';

function RightBar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/icons/gift.png" alt="" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImageContainer">
                            <img src="/assets/persons/1.jpeg" alt="" className="rightbarProfileImage"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Ragini</span>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default RightBar;