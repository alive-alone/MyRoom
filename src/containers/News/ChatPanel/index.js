import NavHeader from "../../../components/NavHeader";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input, Space } from "antd-mobile";
import { MoreOutline } from "antd-mobile-icons";
import MessageBox from "../../../components/MessageBox";
import store from "../../../store";

// 发现个bug，从二级页面返回时home的图标是一直在active状态的
const ChatPanel = (props) => {
  const [inputValue, setInputValue] = useState("");
  const params = useParams();
  // 根据Params.id获取对应id的聊天记录

  return (
    <div className="bg-gray-100 h-screen">
      <div className="top-nav-area fixed w-full top-0">
        <NavHeader right={<MoreOutline fontSize={24} />}>
          对面名称(消息数)
        </NavHeader>
      </div>
      <div className="message-show-area mt-10" onClick={() => console.log(params)}>
        <MessageBox position="left" />
        <MessageBox position="right" />
        <MessageBox position="left" />
        <MessageBox position="right" />
        <MessageBox position="right" />
      </div>
      {/* 占位元素，隔开fixed的输入区域与messagebox */}
      <div className="h-16"></div>
      {/* 可将输入区域做成一个组件。可以将onChange方法从主面板传入到输入框，实现在输入时顶部面板显示正在输入提示 */}
      <div className="input-area bg-gray-300 fixed bottom-0 w-full h-14 px-2 py-2 rounded-md flex">
        {/* icon */}
        <input
          type="text"
          className="flex-1 mr-2 rounded indent-3 border-zinc-50 border-2 focus:border-gray-500 outline-none hover:border-indigo-300 font-sans"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="px-5 mr-1 h-full bg-green-500 text-color-gray-500 font-sans rounded-md text-white"
          onClick={() => setInputValue("")}
        >
          发送
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
