import { useEffect, useState } from "react";
import axios from "axios";
import store from "../../store";
import NewsPanel from "../../components/NewsPanel";

import {
  ACTION_UPDATE_MESSAGE_CHAT,
  ACTION_UPDATE_MESSAGE_NOTICE,
} from "../../store/actionTypes/messageTypes";

// 所使用技术栈：
// CSS框架、组件库：antd-mobile、tailwind css
// 状态管理： redux
// 路由管理： react-router
// 异步请求库： axios

// 向服务器发送请求
// 根据用户id获取所有对应聊天记录的id以及通知id
// 根据聊天记录id向服务器请求对应聊天记录、通知同理
// 拿到聊天记录和通知后渲染到消息面板，并通过redux进行全局状态管理

function News() {
  const [info, setInfo] = useState();

  // 将异步请求封装到高阶组件中
  async function getDataAsync() {
    try {
      const tids = await axios
        .get(
          "https://mock.presstime.cn/mock/628a42981a23490028bc4a15/example/uid2tid"
        )
        .then((response) => response.data);

      const message = await axios
        .get(
          "https://mock.presstime.cn/mock/628a42981a23490028bc4a15/example/tid2talkLog"
        )
        .then((response) => response.data);

      const notice = await axios
        .get(
          "https://mock.presstime.cn/mock/628a42981a23490028bc4a15/example/notice"
        )
        .then((response) => response.data);

      const messages = [];
      const notices = [];
      messages.push(message);
      notices.push(notice);

      // console.log({messages, notices})

      return { messages, notices };
    } catch (e) {
      console.log(e);
    }
  }

  function setState(data) {
    // 设置每次dispatch后自动更新state
    store.subscribe(() => {
      setInfo({
        messages: store.getState().messageReducer.messages,
        notices: store.getState().messageReducer.notices,
      });
    });

    store.dispatch(ACTION_UPDATE_MESSAGE_CHAT(data.messages));
    store.dispatch(ACTION_UPDATE_MESSAGE_NOTICE(data.notices));
  }

  // didmount
  useEffect(() => {
    getDataAsync().then(response => {
      // console.log(response);
      setState(response)
    })
  }, []);

  return (
    <div>
      <NewsPanel myName="xiaoming" refreshEvent={getDataAsync} info={info} />
    </div>
  );
}

export default News;
