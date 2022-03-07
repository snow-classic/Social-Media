import "./Post.css";
import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";


export default function Post({ post }) {

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/persons/1.jpeg"
              alt=""
            />
            <span className="postUsername">Jane Doe
            </span>
            <span className="postDate">11 September 2021</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">This is Dolly</span>
          <img className="postImg" src="/assets/persons/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/icons/like.png" alt="" />
            <img className="likeIcon" src="/assets/icons/heart.png" alt="" />
            <span className="postLikeCounter">5 people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">10 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
