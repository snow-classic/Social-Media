import TopBar from "../../components/topbar/Topbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import './home.css'

export default function Home() {
  return (
    <div>
      <TopBar />
      <div className="homeContainer">
        <div className="sidebar"><Sidebar /></div>
        <div className="feed"><Feed /></div>
        <div className="rightbar"><Rightbar/></div>
        
      </div>
    </div>
  );
}
