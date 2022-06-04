import NavHeader from "../../../components/NavHeader";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Toast } from "antd-mobile";
import { MoreOutline } from "antd-mobile-icons";
import MessageBox from "../../../components/MessageBox";
import MessagePanel from "../../../components/MessagePanel";
import { SpinLoading } from "antd-mobile";
import axios from "axios";
import store from "../../../store";

// 发现个bug，从二级页面返回时home的图标是一直在active状态的
const ChatPanel = () => {
  const [inputValue, setInputValue] = useState("");
  const [talkLog, setTalkLog] = useState([]);
  const [userName, setUserName] = useState()
  const params = useParams();

  // 根据Params.id获取对应id的聊天记录
  async function getTalkLogById() {
    const id = params.id
    const url =  'https://mock.presstime.cn/mock/628a42981a23490028bc4a15/example/client/getTalkLogByID'
    try{
    const data = await axios
      .get(url)
      .then(response => response.data)
      .catch(err => console.log(err))
      setTalkLog(data.talkLog)
      const getOtherUserName = () => {
        for(const user of data.users){
          if(user.userName !== myName)
            setUserName(user.userName)
        }
      }
      getOtherUserName()
    }
    catch(err) {console.log(err)}
    // console.log(id)
  }

  // 假设用户名为xiaoming
  const myName = "xiaoming";

  useEffect(() => {
    getTalkLogById()
  }, []);

  function handelSubmit() {
    if (inputValue === '') return Toast.show('输入为空，需要输入非空字符')
    const text = inputValue
    const newState = talkLog;
    newState.push({
      user: {userName: myName, avatar: ''},
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
        {`${userName === undefined ? '加载中' : userName} ${talkLog.length === 0 ? '' : `(${talkLog.length})` }`}
      </NavHeader>

      <MessagePanel
        className="message-show-area mt-10"
      >
        {talkLog.length === 0 ? 
        <div className="flex justify-center">
        <SpinLoading color="default" />
        </div>
        : talkLog.map((item, index) => {
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
