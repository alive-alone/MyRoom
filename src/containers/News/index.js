import { Tabs, Card, SwipeAction } from "antd-mobile";
import { Link } from "react-router-dom";
import { MailOutline } from "antd-mobile-icons";
import "./index.css";
import Item from "./Item/index";

// 从服务器读取数据
// 聊天记录
let message = [
  {
    id: 1,
    other: "xiaoming",
    avatar: "avatar-icon",
    talkLog: [
      {
        user: "me",
        text: "hello",
      },
      {
        user: "xiaoming",
        text: "hi",
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
      },
      {
        user: "xiaoming",
        text: "hi",
      },
    ],
  },
];

// 通知消息
const notice = [
  {
    id: 1,
    avatar: "avatar-icon",
    other: "system",
    text: "this is a notice",
  },
];

// 总的信息应该由消息和通知组成
const info = [message, notice];

// 从右到左滑动手势
const rightActions = [
  {
    key: "delete",
    text: "删除",
    color: "danger",
  },
  {
    key: "readed",
    text: "已读",
    color: "warning",
  },
];

function News() {
  function handleDelete(index) {
    message = message.splice(index, 1);
  }

  return (
    <div className="News">
      <div className="top-hint">
        <MailOutline fontSize={32} />
        <h1>收件箱</h1>
      </div>
      <div>
        <Tabs defaultActiveKey="message">
          <Tabs.Tab title="消息" key={"message"}>
            {message.length > 0 ? (
              message.map((item, index) => (
                <SwipeAction rightActions={rightActions}>
                  <Card key={item.id} className="card">
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
            {notice.map((item) => (
              <SwipeAction rightActions={rightActions}>
                <Card key={item.id} className="card">
                  <Item name={item.other} message={item.text} />
                </Card>
              </SwipeAction>
            ))}
          </Tabs.Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default News;
