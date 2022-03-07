import "./sidebar.css";
import React, { Component } from 'react';
import { RssFeed, Chat, VideoCall, Group, Bookmark, QuestionAnswer} from '@material-ui/icons';

function SideBar() {
    return ( 
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                </li>

                <li className="sidebarListItem">
                    <VideoCall className="sidebarIcon"/>
                    <span className="sidebarListItemText">VideoCall</span>
                </li>
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Group className="sidebarIcon"/>
                    <span className="sidebarListItemText">Group</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon"/>
                    <span className="sidebarListItemText">Group</span>
                </li>

                <li className="sidebarListItem">
                    <QuestionAnswer className="sidebarIcon"/>
                    <span className="sidebarListItemText">Group</span>
                </li>
            </ul>
            <button className="sidebarbutton">Show More</button>
            <hr className='sidebarHr' />
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/persons/1.jpeg" alt="" />
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/persons/1.jpeg" alt="" />
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImg" src="/assets/persons/1.jpeg" alt="" />
                <span className="sidebarFriendName">Jane Doe</span>
            </li>
        </div>
        );
}

export default SideBar;