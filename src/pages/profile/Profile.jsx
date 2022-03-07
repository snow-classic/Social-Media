import TopBar from "../../components/topbar/Topbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Profile from '../../components/profile/profile';
import './profile.css'

export default function Home() {
  return (
    <div>
      <TopBar />
      <div className="profileContainer">
        <div className="sidebar"><Sidebar /></div>
        <div className="profile"><Profile/></div>
        <div className="rightbar"><Rightbar/></div>
        
      </div>
    </div>
  );
}
