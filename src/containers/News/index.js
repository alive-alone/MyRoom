import { useState } from "react";
import {
  Tabs,
  Card,
  SwipeAction,
  PullToRefresh,
  Dialog,
  Toast,
} from "antd-mobile";
import { Link, useNavigate } from "react-router-dom";
import { MailOutline } from "antd-mobile-icons";
import "./index.css";
import Item from "./Item/index";

// 从服务器读取数据
// 聊天记录
// 聊天记录信息格式
// id、user、text、time
const message = [
  {
    id: 1,
    other: "xiaoming",
    avatar: "avatar-icon",
    talkLog: [
      {
        user: "me",
        text: "hello",
        time: "yyyy-mm-dd",
      },
      {
        user: "xiaoming",
        text: "hi",
        time: "yyyy-mm-dd",
      },
    ],
  },
  {
    id: 2,
    other: "Tim",
    avatar: "avatar-icon",
    talkLog: [
      {
        user: "me",
        text: "hello",
        time: "yyyy-mm-dd",
      },
      {
        user: "xiaoming",
        text: "hi",
        time: "yyyy-mm-dd",
      },
    ],
  },
];

// 通知消息
const notice = [
  {
    id: 3,
    avatar: "avatar-icon",
    other: "system",
    text: "this is a notice",
    time: 'yyyy-mm-dd'
  },
];

// 总的信息应该由消息和通知组成
const myInfo = { message, notice };
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
  const [info, setInfo] = useState(myInfo);
  const navigate = useNavigate();

  function handleMessageDelete(index) {
    setInfo((prevState) => {
      const newState = { ...prevState };
      newState.message.splice(index, 1);
      return newState;
    });
  }

  function handleNoticeDelete(index) {
    setInfo((prevState) => {
      const newState = { ...prevState };
      newState.notice.splice(index, 1);
      return newState;
    });
  }

  // 设置下拉刷新状态文本
  const statusRecord = {
    pulling: "Draging...",
    canRelease: "Release now",
    refreshing: "Refreshing now",
    complete: "Done",
  };

  return (
    <div className="News">
      <div className="top-hint">
        <MailOutline fontSize={32} />
        <h1>收件箱</h1>
      </div>
      <div>
        {/* 下拉刷新区域 */}
        <PullToRefresh
          onRefresh={async () => {
            // 刷新操作
            const newMessage = JSON.parse(JSON.stringify(refreashInfo));
            setInfo(newMessage);
          }}
          renderText={(status) => {
            return <div>{statusRecord[status]}</div>;
          }}
        >
          <Tabs defaultActiveKey="message">
            <Tabs.Tab title="消息" key={"message"}>
              {info.message.length > 0 ? (
                info.message.map((item, index) => (
                  <SwipeAction
                    key={item.id}
                    rightActions={[
                      {
                        key: "delete",
                        text: "删除",
                        color: "danger",
                        // 设置删除事件
                        onClick: async () => {
                          const result = await Dialog.confirm({
                            content: "确定要删除吗",
                          });
                          if (result) {
                            // 由于只有组件中才能接收到index并处理delete，因此action只能写在这里，如果写在外面无法得到对应handler
                            handleMessageDelete(index);
                          }
                        },
                      },
                      {
                        key: "readed",
                        text: "已读",
                        color: "warning",
                        onClick: async () => {
                          // 处理badge的删除相关操作
                        },
                      },
                    ]}
                    closeOnTouchOutside={true}
                  >
                    <Card
                      key={item.id}
                      className="card"
                      onClick={() => navigate(`/message/${item.id}`)}
                    >
                      {/* 手机上访问不能正确显示message，似乎不支持at方法，已用长度下标替代 */}
                      <Item
                        name={item.other}
                        message={item.talkLog[message.length - 1].text}
                      />
                    </Card>
                  </SwipeAction>
                ))
              ) : (
                <h2>您没有未读消息</h2>
              )}
            </Tabs.Tab>
            <Tabs.Tab title="通知" key={"notice"}>
              {info.notice.length > 0 ? (
                info.notice.map((item, index) => (
                  <SwipeAction
                    rightActions={[
                      {
                        key: "delete",
                        text: "删除",
                        color: "danger",
                        onClick: async () => {
                          const result = await Dialog.confirm({
                            content: "确定要删除吗",
                          });
                          if (result) {
                            handleNoticeDelete(index);
                          }
                        },
                      },
                      {
                        key: "readed",
                        text: "已读",
                        color: "warning",
                        onClick: async () => {
                          // 处理badge的删除相关操作
                        },
                      },
                    ]}
                    key={item.id}
                  >
                    <Card
                      key={item.id}
                      className="card"
                      onClick={() => navigate(`/notice/${item.id}`)}
                    >
                      <Item name={item.other} message={item.text} />
                    </Card>
                  </SwipeAction>
                ))
              ) : (
                <h2>您没有未读通知</h2>
              )}
            </Tabs.Tab>
          </Tabs>
        </PullToRefresh>
      </div>
    </div>
  );
}

export default News;
