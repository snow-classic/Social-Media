import "./feed.css";
import React, { Component } from 'react';
import Share from "../share/share"
import Post from "../post/Post"
function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Post/>
            </div>
        </div>
    );
}

export default Feed;