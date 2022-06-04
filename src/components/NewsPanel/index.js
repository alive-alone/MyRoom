import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PullToRefresh,
  Tabs,
  SwipeAction,
  Dialog,
  Card,
  Empty,
  DotLoading,
} from "antd-mobile";
import { MailOutline } from "antd-mobile-icons";
import Item from "../NewsItem";

function NewsPanel(props) {
  const [info, setInfo] = useState(props.info);
  const navigate = useNavigate();

  function handleMessageDelete(index) {
    setInfo((prevState) => {
      const newState = { ...prevState };
      newState.messages.splice(index, 1);
      return newState;
    });
  }

  function handleNoticeDelete(index) {
    setInfo((prevState) => {
      const newState = { ...prevState };
      newState.notices.splice(index, 1);
      return newState;
    });
  }

  // 设置state为从父组件传来的状态，在父组件传来的info更新才setState
  useEffect(() => {
    setInfo(props.info);
  }, [props.info]);

  // 设置下拉刷新状态文本
  const statusRecord = {
    pulling: "Draging...",
    canRelease: "Release now",
    refreshing: "Refreshing now",
    complete: "Done",
  };

  return (
    <div className="News">
      <div className="flex items-center">
        <MailOutline fontSize={32} />
        <h1 className="text-xl font-sans">收件箱</h1>
      </div>
      <div>
        {/* 下拉刷新区域 */}
        <PullToRefresh
          className="ptr"
          onRefresh={async () => {
            // 刷新操作
            props.refreashInfo.then(data => {
              setInfo(data)})
          }}
          renderText={(status) => {
            return <div>{statusRecord[status]}</div>;
          }}
        >
          {/* 先判断info是否为undefined，如果为undefined则显示loading，否则显示消息 */}
          <Tabs defaultActiveKey="message" className="tabs">
            <Tabs.Tab title="消息" key={"message"}>
              {info === undefined ? (
                <div className="flex justify-center">
                <DotLoading color="primary" />
                </div>
              ) : info.messages?.length > 0 ? (
                info.messages.map((item, index) => (
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
                        name={(() => {
                          for (const user of item.users) {
                            if (user.userName !== props.myName)
                              return user.userName;
                          }
                        })()}
                        message={
                          item.talkLog[item.talkLog.length - 1].message.content
                        }
                      />
                    </Card>
                  </SwipeAction>
                ))
              ) : (
                <Empty description={"您没有未读消息"} />
              )}
            </Tabs.Tab>
            <Tabs.Tab title="通知" key={"notice"}>
              {info === undefined ? (
                <div className="flex justify-center">
                <DotLoading color="primary" className="justify-center" />
                </div>
              ) : info.notices.length > 0 ? (
                info.notices.map((item, index) => (
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
                      <Item name={item.sender} message={item.text} />
                    </Card>
                  </SwipeAction>
                ))
              ) : (
                <Empty description={"您没有未读通知"} />
              )}
            </Tabs.Tab>
          </Tabs>
        </PullToRefresh>
      </div>
    </div>
  );
}

export default NewsPanel;
