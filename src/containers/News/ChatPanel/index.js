import NavHeader from "../../../components/NavHeader";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Toast } from "antd-mobile";
import { MoreOutline } from "antd-mobile-icons";
import MessageBox from "../../../components/MessageBox";
import MessagePanel from "../../../components/MessagePanel";
import store from "../../../store";
import './index.module.css'

const message = {
  id: 1,
  // 使用users数组代替单一other和avatar，支持更多人聊天
  users: [
    { userName: "xiaoming", avatar: "avatar-one" },
    { userName: "xiaohong", avatar: "avatar-two" },
  ],
  talkLog: [
    {
      user: {
        userName: "xiaoming",
        avatar: "",
      },
      message: {
        type: "text",
        content: "你好啊",
      },
      time: "202/6/2 12:05:21",
    },
    {
      user: {
        userName: "xiaohong",
        avatar: "",
      },
      message: {
        type: "text",
        content: "你好你好",
      },
      time: "2022/6/2 12:05:33",
    },
  ],
};

// 发现个bug，从二级页面返回时home的图标是一直在active状态的
const ChatPanel = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [talkLog, setTalkLog] = useState(message.talkLog);
  const params = useParams();

  // 根据Params.id获取对应id的聊天记录
  async function getTalkLogById() {
    const id = params.id
    // console.log(id)
  }

  // 假设用户名为xiaoming
  const myName = "xiaoming";
  const myUuid = 1

  useEffect(() => {
    getTalkLogById()
    setTalkLog(message.talkLog);
  }, []);

  function handelSubmit() {
    if (inputValue === '') return Toast.show('输入为空，需要输入非空字符')
    const text = inputValue
    const newState = talkLog;
    newState.push({
      user: { userName: myName, avatar: '', uuid: myUuid },
      message: { type: "text", content: text },
      time: new Date().toLocaleString(),
    });
    setTalkLog(newState);
    setInputValue("");
  }

  return (
    <div className="h-100">
      <NavHeader
        right={<MoreOutline fontSize={24} />}
        className="top-nav-area fixed w-full top-0"
      >
        对面名称(消息数)
      </NavHeader>

      <MessagePanel
        className="message-show-area mt-10"
      >
        {talkLog.map((item, index) => {
          return (
            <MessageBox
              key={index}
              userName={item.user.userName}
              content={item.message?.content}
              avatar={item.user.avatar}
              time={item.time}
              position={item.user.userName === myName ? "left" : "right"}
            />
          );
        })}
      </MessagePanel>
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
          onClick={() => handelSubmit()}
        >
          发送
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
