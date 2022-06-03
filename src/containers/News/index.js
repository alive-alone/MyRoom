import { useEffect, useState } from "react";
import {
  Dialog,
  Toast,
} from "antd-mobile";
import axios from "axios";
import store from "../../store";
import NewsPanel from "../../components/NewsPanel";

import "./index.css";
import {
  ACTION_UPDATE_MESSAGE_CHAT,
  ACTION_UPDATE_MESSAGE_NOTICE,
} from "../../store/actionTypes/messageTypes";

// 所使用技术栈：
// CSS框架、组件库：antd-mobile、tailwind css
// 状态管理： redux
// 路由管理： react-router
// 异步请求库： axios

// 一个用户id（uid）对应多个聊天记录id
const myName = "xiaoming";
const messages = [
  {
    id: 1,
    users: [
      {  userName: "xiaoming", avatar: "avatar-one" },
      {  userName: "xiaohong", avatar: "avatar-two" },
    ],
    talkLog: [
      {
        user: {
          userName: 'xiaohong',
          avatart: 'avatar',
        },
        message: {
          type: "text",
          content: "hello",
        },
        time: "yyyy-mm-dd",
      },
      {
        user: {
          userName: 'xiaoming',
          avatart: 'avatar',
        },
        message: {
          type: "text",
          content: "hi",
        },
        time: "yyyy-mm-dd",
      },
    ],
  },
  {
    id: 2,
    users: [
      {  userName: "xiaoming", avatar: "avatar-one" },
      {  userName: "xiaohong", avatar: "avatar-two" },
    ],
    talkLog: [
      {
        user: {
          userName: 'xiaogang',
          avatart: 'avatar',
        },
        message: {
          type: "text",
          content: "hello",
        },
        time: "yyyy-mm-dd",
      },
      {
        user: {
          userName: 'xiaoming',
          avatart: 'avatar',
        },
        message: {
          type: "text",
          content: "hi",
        },
        time: "yyyy-mm-dd",
      },
    ],
  },
];

// 通知消息
const notices = [
  {
    id: 3,
    avatar: "avatar-icon",
    sender: "system",
    text: "this is a notice",
    time: "yyyy-mm-dd",
  },
];

// 向服务器发送请求
// 根据用户id获取所有对应聊天记录的id以及通知id
// 根据聊天记录id向服务器请求对应聊天记录、通知同理
// 拿到聊天记录和通知后渲染到消息面板，并通过redux进行全局状态管理

const myInfo = { messages: messages, notices: notices };
const refreashInfo = JSON.parse(JSON.stringify(myInfo));

// 从右到左滑动手势
const rightActions = [
  {
    key: "delete",
    text: "删除",
    color: "danger",
    onClick: async (index) => {
      const result = await Dialog.confirm({
        content: "确认要删除吗",
      });
      if (result) {
        Toast.show({ content: "点击了确认" });
      } else {
        Toast.show({ content: "点击了取消" });
      }
    },
  },
  {
    key: "readed",
    text: "已读",
    color: "warning",
  },
];

function News() {
  const [info, setInfo] = useState();

  // 将异步请求封装到高阶组件中
  async function getDataAsync() {
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
        "https://mock.presstime.cn/mock/628a42981a23490028bc4a15/example/nid2notice"
      )
      .then((response) => response.data);

    const messages = [];
    const notices = [];
    messages.push(message);
    notices.push(notice);

    // 设置每次dispatch后自动更新state
    store.subscribe(() => {
      setInfo({
        messages: store.getState().messageReducer.messages,
        notices: store.getState().messageReducer.notices,
      });
    });

    store.dispatch(ACTION_UPDATE_MESSAGE_CHAT(messages));
    store.dispatch(ACTION_UPDATE_MESSAGE_NOTICE(notices));
  }

  // didmount
  useEffect(() => {
    getDataAsync();
  }, []);

  return (
    <div>
      <NewsPanel myName='xiaoming' refreashInfo={myInfo} info={info} />
    </div>
  )
}

export default News;
