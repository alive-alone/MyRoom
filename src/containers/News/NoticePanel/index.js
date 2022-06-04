import NavHeader from "../../../components/NavHeader";
import NoticeBox from "../../../components/NoticeBox";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { SpinLoading } from "antd-mobile";

const NoticePanel = () => {
  const url =
    "https://mock.presstime.cn/mock/628a42981a23490028bc4a15/example/notice";
  const [notice, setNotice] = useState();

  const params = useParams();
  // 根据消息id获取对应聊天记录
  useEffect(() => {
    axios.get(url).then((response) => {
      setNotice(response.data);
    });
  }, []);

  return (
    <div>
      <div className="top-nav">
        <NavHeader>通知</NavHeader>
      </div>
      <div className="notice">
        {notice === undefined ? (
          <div className="flex justify-center">
            <SpinLoading color="default" />
          </div>
        ) : (
          <NoticeBox
            time={notice.time}
            text={notice.text}
            image={notice.image}
          />
        )}
      </div>
    </div>
  );
};

export default NoticePanel;
