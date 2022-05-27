import NavHeader from "../../../components/NavHeader";
import NoticeBox from "../../../components/NoticeBox";

const NoticePanel = () => {
  return (
    <div>
      <div className="top-nav">
        <NavHeader>通知(通知数)</NavHeader>
      </div>
      <div className="notice">
        <NoticeBox />
      </div>
    </div>
  );
};

export default NoticePanel;
