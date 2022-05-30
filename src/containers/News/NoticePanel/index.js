import NavHeader from "../../../components/NavHeader";
import NoticeBox from "../../../components/NoticeBox";
import { useParams } from "react-router-dom";

const NoticePanel = () => {
  const params = useParams();
  // 根据消息id获取对应聊天记录

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
