import NavHeader from "../../../components/NavHeader";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input, Space } from "antd-mobile";
import { MoreOutline } from "antd-mobile-icons";
import MessageBox from "../../../components/MessageBox";

// import "./style.css";

// 发现个bug，从二级页面返回时home的图标是一直在active状态的
const ChatPanel = (props) => {
  const [inputValue, setInputValue] = useState("");
  const params = useParams();
  // 根据Params.id获取对应id的聊天记录

  return (
    <div className="h-full">
      <div className="top-nav-area">
        <NavHeader right={<MoreOutline fontSize={24} />}>
          对面名称(消息数)
        </NavHeader>
      </div>
      <div className="message-show-area" onClick={() => console.log(params)}>
        <MessageBox position="left" />
        <MessageBox position="right" />
        <MessageBox position="left" />
        <MessageBox position="right" />
        <MessageBox position="right" />

      </div>
      <div className="mb-16"></div>
      <div className="input-area bg-gray-300 fixed bottom-0 w-full h-14 px-2 py-2 rounded-md flex">
        {/* icon */}
        <input type="text" className="flex-1 mr-2 rounded indent-3 border-zinc-50 border-2 focus:border-gray-500 outline-none hover:border-indigo-300 font-sans" />
        <button className="px-5 mr-1 h-full bg-green-500 text-color-gray-500 font-sans rounded-md text-white">发送</button>

        {/* <Input
          placeholder="write something"
          value={inputValue}
          onChange={(val) => setInputValue(val)}
          clearable
        /> */}
        {/* <Button color="success">发送</Button> */}
      </div>
    </div>
  );
};

export default ChatPanel;
